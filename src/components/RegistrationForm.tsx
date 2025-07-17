import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

const API_BASE_URL = 'https://telepro-production.up.railway.app//api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const RegistrationForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    agreeTerms: true
  });

  const [verificationData, setVerificationData] = useState({
    verification_code: '',
    email: ''
  });

  const [showVerification, setShowVerification] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [apiError, setApiError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      phone: value
    });
  };

  const handleVerificationChange = (e) => {
    setVerificationData({
      ...verificationData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstname.trim()) newErrors.firstname = t('register.3') + ' is required';
    if (!formData.lastname.trim()) newErrors.lastname = t('register.4') + ' is required';
    if (!formData.email.trim()) {
      newErrors.email = t('register.5') + ' is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('register.5') + ' is invalid';
    }
    if (!formData.phone) {
      newErrors.phone = t('register.6') + ' is required';
    } else if (formData.phone.length < 10) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateVerificationCode = () => {
    const newErrors = {};
    if (!verificationData.verification_code.trim()) {
      newErrors.verification_code = 'Verification code is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const registerUser = async (userData) => {
    try {
      const response = await api.post('/register', userData);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Registration failed');
      }
      throw new Error('Registration failed');
    }
  };

  const verifyCode = async (email, verification_code) => {
    try {
      const response = await api.post('/verify-email', { email, verification_code });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Verification failed');
      }
      throw new Error('Verification failed');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setApiError('');

    try {
      await registerUser(formData);
      setVerificationData({
        verification_code: '',
        email: formData.email
      });
      setShowVerification(true);
    } catch (error) {
      setApiError(error instanceof Error ? error.message : 'Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVerificationSubmit = async (e) => {
    e.preventDefault();
    if (!validateVerificationCode()) return;

    setIsSubmitting(true);
    setApiError('');

    try {
      const response = await verifyCode(verificationData.email, verificationData.verification_code);

      // ✅ Redirect to Telegram channel
      if (response.redirect_url) {
        window.location.href = response.redirect_url;
      } else {
        setSubmitSuccess(true);
      }
    } catch (error) {
      setApiError(error instanceof Error ? error.message : 'Verification failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="register" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2c2928]">{t('register.0')}</h2>
          <p className="mt-4 text-lg text-gray-600">
            {t('register.1')}
          </p>
        </div>

        <div className="max-w-md mx-auto bg-[#D9D9D9] rounded-lg overflow-hidden shadow-lg">
          <div className="px-6 py-8">
            {submitSuccess ? (
              <div className="text-center py-8 animate-fade-in">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-[#2c2928] mb-2">Registration Successful!</h3>
                <p className="text-gray-600">Thank you for registering. You'll receive a confirmation email shortly.</p>
              </div>
            ) : showVerification ? (
              <form onSubmit={handleVerificationSubmit}>
                <h3 className="text-xl font-semibold mb-6">Verify Your Account</h3>
                <div className="mb-4">
                  <p className="text-sm text-gray-600">Verification code sent to:</p>
                  <p className="font-medium text-[#2c2928]">{verificationData.email}</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="verification_code" className="block text-sm font-medium text-[#2c2928] mb-1">
                      Verification Code
                    </label>
                    <input
                      id="verification_code"
                      name="verification_code"
                      type="text"
                      value={verificationData.verification_code}
                      onChange={handleVerificationChange}
                      className={`block w-full px-3 py-2 border ${errors.verification_code ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-[#117CA2] focus:border-[#117CA2]`}
                      placeholder="Enter verification code"
                    />
                    {errors.verification_code && <p className="mt-1 text-sm text-red-600">{errors.verification_code}</p>}
                  </div>
                  {apiError && <p className="text-sm text-red-600">{apiError}</p>}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-[#117CA2] hover:bg-[#117CA2]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#117CA2] transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Verifying...' : 'Verify Code'}
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="text-xl font-semibold mb-6">{t('register.2')}</h3>
                <div className="grid grid-cols-1 gap-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-[#2c2928] mb-1">
                        {t('register.3')}
                      </label>
                      <input
                        id="firstName"
                        name="firstname"
                        type="text"
                        value={formData.firstname}
                        onChange={handleChange}
                        className={`block w-full px-3 py-2 border ${errors.firstname ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-[#117CA2] focus:border-[#117CA2]`}
                      />
                      {errors.firstname && <p className="mt-1 text-sm text-red-600">{errors.firstname}</p>}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-[#2c2928] mb-1">
                        {t('register.4')}
                      </label>
                      <input
                        id="lastName"
                        name="lastname"
                        type="text"
                        value={formData.lastname}
                        onChange={handleChange}
                        className={`block w-full px-3 py-2 border ${errors.lastname ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-[#117CA2] focus:border-[#117CA2]`}
                      />
                      {errors.lastname && <p className="mt-1 text-sm text-red-600">{errors.lastname}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#2c2928] mb-1">
                      {t('register.5')}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-[#117CA2] focus:border-[#117CA2]`}
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#2c2928] mb-1">
                      {t('register.6')}
                    </label>
                    <PhoneInput
                      country={'us'}
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      inputClass={`!w-full !px-3 !py-2 !border ${errors.phone ? '!border-red-500' : '!border-gray-300'} !rounded-md !shadow-sm focus:!outline-none focus:!ring-[#117CA2] focus:!border-[#117CA2]`}
                      containerClass="!w-full"
                      buttonClass={errors.phone ? '!border-red-500' : ''}
                    />
                    {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                  </div>

                  {apiError && <p className="text-sm text-red-600 text-center">{apiError}</p>}

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-[#117CA2] hover:bg-[#117CA2]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#117CA2] transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? 'Processing...' : t('register.7')}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;

// API endpoints
const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API URL

export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    return await response.json();
  } catch (error) {
    throw new Error('Registration failed');
  }
};

export const verifyCode = async (email: string, code: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, code }),
    });
    return await response.json();
  } catch (error) {
    throw new Error('Verification failed');
  }
};
import React from 'react';
import { BookOpen, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2c2928] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <BookOpen className="h-8 w-8 text-[#117CA2] mr-2" />
              <span className="text-white font-bold text-xl">EduLearn</span>
            </div>
            <p className="text-[#D9D9D9] mb-6 max-w-xs">
              Empowering individuals through accessible, quality education to achieve their career and personal goals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#D9D9D9] hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
              <a href="#" className="text-[#D9D9D9] hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 3H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1zM8.5 17.5h-3v-9h3v9zM7 7.5C6.2 7.5 5.5 6.8 5.5 6S6.2 4.5 7 4.5 8.5 5.2 8.5 6 7.8 7.5 7 7.5zm11 10h-3v-4.8c0-1.1-.2-2.5-1.7-2.5-1.7 0-2 1.2-2 2.5v4.8h-3v-9h3v1.2h.1c.4-.8 1.5-1.7 3-1.7 3.2 0 3.9 2.1 3.9 4.8v4.7z" />
                </svg>
              </a>
              <a href="#" className="text-[#D9D9D9] hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
                </svg>
              </a>
              <a href="#" className="text-[#D9D9D9] hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm5.5 13c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-11 0c-.83 0-1.5-.67-1.5-1.5S5.67 12 6.5 12s1.5.67 1.5 1.5S7.33 15 6.5 15zm5.5 2c-2.03 0-3.8-1.11-4.75-2.75.7.15 1.42.25 2.25.25 2.69 0 4.88-1.92 5-4.25h-1.11c-.13 1.86-1.79 3.25-3.89 3.25-.78 0-1.5-.19-2.16-.53.17-.53.28-1.09.28-1.67 0-2.76-2.24-5-5-5v.5c2.21 0 4 1.79 4 4 0 .37-.07.72-.17 1.06-.46-.7-1.14-1.29-1.95-1.67.03-.12.05-.24.07-.36.36-2.09 2.07-3.69 4.22-3.69 2.35 0 4.25 1.94 4.25 4.33 0 .08-.02.16-.02.25.93.08 1.79.33 2.5.71C19.2 11.24 16.87 8 12 8s-7.2 3.24-7.2 7.2c0 4.05 3.28 7.33 7.33 7.33 2.42 0 4.58-1.17 5.92-3.01-.41-.23-.89-.35-1.35-.52-.79.9-1.95 1.5-3.25 1.5z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-[#117CA2] pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-[#D9D9D9] hover:text-[#117CA2] transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Home
                </a>
              </li>
              <li>
                <a href="#courses" className="text-[#D9D9D9] hover:text-[#117CA2] transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Courses
                </a>
              </li>
              <li>
                <a href="#roadmap" className="text-[#D9D9D9] hover:text-[#117CA2] transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Roadmap
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#D9D9D9] hover:text-[#117CA2] transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#D9D9D9] hover:text-[#117CA2] transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-[#117CA2] pb-2">Course Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#D9D9D9] hover:text-[#117CA2] transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-[#D9D9D9] hover:text-[#117CA2] transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Data Science
                </a>
              </li>
              <li>
                <a href="#" className="text-[#D9D9D9] hover:text-[#117CA2] transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> UX/UI Design
                </a>
              </li>
              <li>
                <a href="#" className="text-[#D9D9D9] hover:text-[#117CA2] transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Mobile Development
                </a>
              </li>
              <li>
                <a href="#" className="text-[#D9D9D9] hover:text-[#117CA2] transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Business & Marketing
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-[#117CA2] pb-2">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#117CA2] mr-3 mt-1 shrink-0" />
                <span className="text-[#D9D9D9]">123 Education St, Learning City, CA 94105</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#117CA2] mr-3 shrink-0" />
                <span className="text-[#D9D9D9]">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#117CA2] mr-3 shrink-0" />
                <span className="text-[#D9D9D9]">info@edulearn.com</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Subscribe to our newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 rounded-l-md focus:outline-none text-[#2c2928] w-full"
                />
                <button
                  type="submit"
                  className="bg-[#117CA2] px-4 rounded-r-md hover:bg-[#117CA2]/90 transition-colors"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-[#D9D9D9]">
          <p>&copy; {new Date().getFullYear()} EduLearn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
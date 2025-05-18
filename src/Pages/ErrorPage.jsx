import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4 font-['Montserrat']">
      <AlertTriangle size={80} className="text-orange-500 mb-4 animate-bounce" />
      
      <h1 className="text-6xl font-bold text-orange-500 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">Oops! The page you're looking for doesn't exist.</p>
      
      <button
        onClick={() => navigate('/')}
        className="bg-orange-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-orange-600 transition duration-300"
      >
        Go Back Home
      </button>
    </section>
  );
};

export default ErrorPage;

import React, { useState } from 'react';

// Define the type for form data
interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// Define the type for form errors
interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Invalid email format';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = 'Passwords do not match';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      console.log('Form Data:', formData); // You can send this data to an API for registration
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-600">
      <div className="w-2/6 bg-blue-400 mx-auto p-6  rounded-lg shadow-md shadow-black transition-transform transform ">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Register</h2>
        {submitted ? (
          <div className="text-green-600 font-semibold text-center">Registration successful!</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`mt-1 p-3 w-full border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg transition duration-200 focus:ring-2 focus:ring-blue-500`}
                placeholder="Enter your name"
              />
              {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`mt-1 p-3 w-full border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg transition duration-200 focus:ring-2 focus:ring-blue-500`}
                placeholder="Enter your email"
              />
              {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`mt-1 p-3 w-full border ${formErrors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg transition duration-200 focus:ring-2 focus:ring-blue-500`}
                placeholder="Enter your password"
              />
              {formErrors.password && <p className="text-red-500 text-sm">{formErrors.password}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className={`mt-1 p-3 w-full border ${formErrors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-lg transition duration-200 focus:ring-2 focus:ring-blue-500`}
                placeholder="Confirm your password"
              />
              {formErrors.confirmPassword && <p className="text-red-500 text-sm">{formErrors.confirmPassword}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-200"
            >
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegistrationForm;

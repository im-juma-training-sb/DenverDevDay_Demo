import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { User, Mail, Building, Briefcase, Check, AlertCircle, Loader } from 'lucide-react';

/**
 * Registration Component
 * 
 * Features:
 * - Form validation using react-hook-form
 * - Real-time validation feedback
 * - Accessible form design with proper labels and error messages
 * - Professional conference registration flow
 * - Success/error state handling
 * - Responsive design for all screen sizes
 */
const Registration = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm({
    mode: 'onBlur' // Validate on blur for better UX
  });

  // Watch form values for dynamic feedback
  const watchedValues = watch();

  // Form submission handler
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Simulate API call - in production, this would be a real registration endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For demo purposes, randomly succeed or fail
      if (Math.random() > 0.1) { // 90% success rate
        console.log('Registration data:', data);
        setIsSubmitted(true);
        reset();
      } else {
        throw new Error('Registration service temporarily unavailable. Please try again.');
      }
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Role options
  const roleOptions = [
    { value: '', label: 'Select your role' },
    { value: 'developer', label: 'Software Developer' },
    { value: 'engineer', label: 'Software Engineer' },
    { value: 'architect', label: 'Software Architect' },
    { value: 'manager', label: 'Engineering Manager' },
    { value: 'lead', label: 'Tech Lead' },
    { value: 'designer', label: 'UX/UI Designer' },
    { value: 'product', label: 'Product Manager' },
    { value: 'devops', label: 'DevOps Engineer' },
    { value: 'data', label: 'Data Scientist' },
    { value: 'student', label: 'Student' },
    { value: 'other', label: 'Other' }
  ];

  // Show success state
  if (isSubmitted) {
    return (
      <section className="section-padding bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container-width">
          <div className="max-w-2xl mx-auto text-center">
            <div className="card p-8 lg:p-12">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                Registration Successful!
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Thank you for registering for Denver Dev Day 2025. You'll receive a confirmation 
                email shortly with your ticket and event details.
              </p>
              <p className="text-gray-500 mb-8">
                We're excited to see you at the conference!
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="btn-primary"
                aria-label="Register another attendee"
              >
                Register Another Attendee
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-width">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
            Register for Denver Dev Day 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Secure your spot at Colorado's premier developer conference. 
            Join us for a day of learning, networking, and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Registration Form */}
          <div className="card p-8 lg:p-10">
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">
              Registration Details
            </h3>

            {submitError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-red-800 font-medium">Registration Error</p>
                  <p className="text-red-700 text-sm">{submitError}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
              
              {/* Full Name */}
              <div>
                <label 
                  htmlFor="fullName" 
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    id="fullName"
                    type="text"
                    className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-denver-red/20 focus:border-denver-red transition-colors ${
                      errors.fullName 
                        ? 'border-red-300 bg-red-50' 
                        : watchedValues.fullName 
                        ? 'border-green-300 bg-green-50' 
                        : 'border-gray-300'
                    }`}
                    placeholder="Enter your full name"
                    {...register('fullName', {
                      required: 'Full name is required',
                      minLength: {
                        value: 2,
                        message: 'Name must be at least 2 characters'
                      },
                      pattern: {
                        value: /^[a-zA-Z\s]+$/,
                        message: 'Name can only contain letters and spaces'
                      }
                    })}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                  />
                </div>
                {errors.fullName && (
                  <p id="fullName-error" className="mt-2 text-sm text-red-600" role="alert">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    id="email"
                    type="email"
                    className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-denver-red/20 focus:border-denver-red transition-colors ${
                      errors.email 
                        ? 'border-red-300 bg-red-50' 
                        : watchedValues.email 
                        ? 'border-green-300 bg-green-50' 
                        : 'border-gray-300'
                    }`}
                    placeholder="your.email@company.com"
                    {...register('email', {
                      required: 'Email address is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Please enter a valid email address'
                      }
                    })}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                </div>
                {errors.email && (
                  <p id="email-error" className="mt-2 text-sm text-red-600" role="alert">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Role */}
              <div>
                <label 
                  htmlFor="role" 
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Professional Role *
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    id="role"
                    className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-denver-red/20 focus:border-denver-red transition-colors appearance-none bg-white ${
                      errors.role 
                        ? 'border-red-300 bg-red-50' 
                        : watchedValues.role 
                        ? 'border-green-300 bg-green-50' 
                        : 'border-gray-300'
                    }`}
                    {...register('role', {
                      required: 'Please select your role'
                    })}
                    aria-describedby={errors.role ? 'role-error' : undefined}
                  >
                    {roleOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.role && (
                  <p id="role-error" className="mt-2 text-sm text-red-600" role="alert">
                    {errors.role.message}
                  </p>
                )}
              </div>

              {/* Company */}
              <div>
                <label 
                  htmlFor="company" 
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Company/Organization
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    id="company"
                    type="text"
                    className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-denver-red/20 focus:border-denver-red transition-colors ${
                      watchedValues.company ? 'border-green-300 bg-green-50' : 'border-gray-300'
                    }`}
                    placeholder="Enter your company name"
                    {...register('company', {
                      minLength: {
                        value: 2,
                        message: 'Company name must be at least 2 characters'
                      }
                    })}
                  />
                </div>
                {errors.company && (
                  <p className="mt-2 text-sm text-red-600" role="alert">
                    {errors.company.message}
                  </p>
                )}
              </div>

              {/* Dietary Restrictions */}
              <div>
                <label 
                  htmlFor="dietary" 
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Dietary Restrictions/Allergies
                </label>
                <textarea
                  id="dietary"
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-denver-red/20 focus:border-denver-red transition-colors resize-none"
                  placeholder="Please let us know about any dietary restrictions or allergies..."
                  {...register('dietary')}
                />
              </div>

              {/* Newsletter Subscription */}
              <div className="flex items-start space-x-3">
                <input
                  id="newsletter"
                  type="checkbox"
                  className="w-4 h-4 text-denver-red border-gray-300 rounded focus:ring-denver-red/20 focus:ring-2 mt-1"
                  {...register('newsletter')}
                />
                <label htmlFor="newsletter" className="text-sm text-gray-700">
                  I'd like to receive updates about future Denver Dev Day events and tech community news.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label={isSubmitting ? 'Submitting registration...' : 'Submit registration'}
              >
                {isSubmitting ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    <span>Registering...</span>
                  </>
                ) : (
                  <span>Complete Registration</span>
                )}
              </button>
            </form>
          </div>

          {/* Event Info & Pricing */}
          <div className="space-y-8">
            
            {/* Event Details */}
            <div className="card p-8">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                Event Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-denver-red rounded-full"></div>
                  <span className="text-gray-700">Date: June 27, 2025</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-denver-red rounded-full"></div>
                  <span className="text-gray-700">Time: 8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-denver-red rounded-full"></div>
                  <span className="text-gray-700">Location: Denver Convention Center</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-denver-red rounded-full"></div>
                  <span className="text-gray-700">Expected Attendance: 500+ developers</span>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="card p-8">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                What's Included
              </h3>
              <ul className="space-y-3">
                {[
                  'Full day conference access',
                  'Breakfast and lunch',
                  'Coffee breaks and networking',
                  'Swag bag with local treats',
                  'Access to speaker presentations',
                  'Networking reception',
                  'Certificate of attendance'
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;

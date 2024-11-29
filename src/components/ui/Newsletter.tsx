import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

interface NewsletterForm {
  email: string;
}

export function Newsletter() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<NewsletterForm>();

  const onSubmit = async (data: NewsletterForm) => {
    try {
      // Implement newsletter subscription logic here
      toast.success('Successfully subscribed to newsletter!');
      reset();
    } catch (error) {
      toast.error('Failed to subscribe. Please try again.');
    }
  };

  return (
    <div className="bg-gray-50 p-8 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
      <p className="text-gray-600 mb-6">
        Get the latest insights on AI and data analytics delivered to your inbox.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-black focus:ring-black"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
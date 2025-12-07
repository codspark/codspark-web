import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../Components/PageHeader';

function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }
  };

  return (
    <div>
      <PageHeader title = {"Contact Us"} />
      <div className='container mx-auto p-5 py-10'>
        <p className='text-xs mb-6 text-center text-red-500 '>Currently our contact form is not working, sorry for the inconvenience.</p>
        <h1 className='text-3xl mb-6 text-center font-bold '>Let's Get Connected</h1>
        <div className="flex justify-center mb-8">
            <div className="bg-accent w-40 h-1"></div>
        </div>
        <form onSubmit={handleSubmit} className='max-w-lg mx-auto bg-white shadow-lg border border-gray-100 rounded-lg p-6'>
          <div className='mb-4'>
            <label className='block text-gray-700'>Name</label>
            <input type='text' name='name' value={formData.name} onChange={handleChange} className='w-full p-2 border rounded-lg' />
            {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Email</label>
            <input type='email' name='email' value={formData.email} onChange={handleChange} className='w-full p-2 border rounded-lg' />
            {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Phone</label>
            <input type='text' name='phone' value={formData.phone} onChange={handleChange} className='w-full p-2 border rounded-lg' />
            {errors.phone && <p className='text-red-500 text-sm'>{errors.phone}</p>}
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Message</label>
            <textarea name='message' value={formData.message} onChange={handleChange} className='w-full p-2 border rounded-lg'></textarea>
            {errors.message && <p className='text-red-500 text-sm'>{errors.message}</p>}
          </div>
          <button disabled type='submit' className='cursor-not-allowed bg-accent text-white px-4 py-2 rounded-lg w-full'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;

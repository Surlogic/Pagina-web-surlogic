'use client';

import { useState } from 'react';
import Link from 'next/link';

type FormStrings = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  serviceSelect: string;
  serviceCustom: string;
  serviceAutomation: string;
  serviceIntegration: string;
  serviceApp: string;
  serviceConsulting: string;
  message: string;
  submit: string;
  sending: string;
  success: string;
  error: string;
  whatsapp: string;
  whatsappMessage: string;
};

type ContactFormProps = {
  strings: FormStrings;
};

export function ContactForm({ strings }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const whatsappLink = `https://wa.me/59891488400?text=${encodeURIComponent(strings.whatsappMessage)}`;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label={strings.name}
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          label={strings.email}
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label={strings.company}
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
        />
        <Input
          label={strings.phone}
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">{strings.service}</label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
        >
          <option value="">{strings.serviceSelect}</option>
          <option value="custom">{strings.serviceCustom}</option>
          <option value="automation">{strings.serviceAutomation}</option>
          <option value="integration">{strings.serviceIntegration}</option>
          <option value="app">{strings.serviceApp}</option>
          <option value="consulting">{strings.serviceConsulting}</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">{strings.message}</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          required
          className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="btn-sheen inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-semibold shadow-lg shadow-blue-700/30 hover:translate-y-[-1px] transition-all disabled:opacity-60"
        >
          {status === 'sending' ? strings.sending : strings.submit}
        </button>
        <Link
          href={whatsappLink}
          target="_blank"
          className="inline-flex items-center justify-center px-6 py-4 rounded-xl border border-blue-400/50 text-blue-200 hover:bg-blue-500/10 transition-colors"
        >
          {strings.whatsapp}
        </Link>
      </div>

      {status === 'success' && <p className="text-emerald-300 text-sm">{strings.success}</p>}
      {status === 'error' && <p className="text-red-300 text-sm">{strings.error}</p>}
    </form>
  );
}

type InputProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
};

function Input({ label, name, value, onChange, type = 'text', required }: InputProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
      />
    </div>
  );
}

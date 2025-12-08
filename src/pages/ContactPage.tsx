import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { profile } from '../data/profile';

const ContactPage: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const mailto = `mailto:${profile.email}?subject=Portfolio%20contact%20from%20${encodeURIComponent(
      form.name || 'visitor',
    )}&body=${encodeURIComponent(form.message)}`;
    window.location.href = mailto;
  };

  return (
    <div className="section space-y-8">
      <SectionHeader
        eyebrow="Contact"
        title="Get in touch"
        description="Reach out for opportunities, collaborations, or just to say hello."
      />

      <div className="grid gap-8 md:grid-cols-2">
        <div className="card space-y-4">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Direct links</h3>
          <ul className="space-y-2 text-slate-700 dark:text-slate-200">
            <li>
              <strong>Email:</strong> <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <strong>GitHub:</strong> <a href={profile.social.github}>{profile.social.github}</a>
            </li>
            <li>
              <strong>LinkedIn:</strong> <a href={profile.social.linkedin}>{profile.social.linkedin}</a>
            </li>
          </ul>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            The form on the right opens your email client. Swap it with a form service (e.g., Formspree or Netlify Forms) when
            you are ready.
          </p>
        </div>
        <form className="card space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-800 dark:text-slate-200" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 dark:border-slate-800 dark:bg-slate-900"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-800 dark:text-slate-200" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 dark:border-slate-800 dark:bg-slate-900"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-800 dark:text-slate-200" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 dark:border-slate-800 dark:bg-slate-900"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

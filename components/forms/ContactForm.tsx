'use client';

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormErrors {
  [key: string]: string;
}

const projectTypes = [
  'Interior Fit-Out',
  'Furniture',
  'Civil & MEP',
  'Retail',
  'Aviation',
  'Warehouse',
  'Fulfilment Centre',
  'Maintenance',
  'Specialized Project',
  'Other',
];

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<FormErrors>({});
  const prefersReduced = useReducedMotion();

  const validate = (data: Record<string, string>): FormErrors => {
    const errs: FormErrors = {};
    if (!data.name || data.name.trim().length < 2) {
      errs.name = 'Please enter your name';
    }
    if (!data.phone || data.phone.trim().length < 7) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!data.message || data.message.trim().length < 10) {
      errs.message = 'Please tell us about your project (at least 10 characters)';
    }
    return errs;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString().trim();
    });

    const validationErrors = validate(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus('loading');

    try {
      const response = await fetch('/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass = (field: string) =>
    `w-full rounded-sm border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
      errors[field] ? 'border-destructive' : 'border-border'
    }`;

  if (status === 'success') {
    return (
      <motion.div
        initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center rounded-sm border border-border bg-white p-10 text-center lg:p-16"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
          <CheckCircle2 className="h-8 w-8 text-blue-600" />
        </div>
        <h3 className="mt-6 font-heading text-2xl font-bold text-foreground">
          Thank You
        </h3>
        <p className="mt-3 max-w-md text-base text-muted-foreground">
          Your enquiry has been sent successfully. We&apos;ll get back to you shortly.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-medium text-blue-600 hover:text-blue-500"
        >
          Send another enquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-sm border border-border bg-white p-6 lg:p-8"
    >
      <AnimatePresence>
        {status === 'error' && (
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-6 flex items-center gap-3 rounded-sm border border-destructive/30 bg-destructive/5 px-4 py-3"
          >
            <AlertCircle className="h-5 w-5 flex-shrink-0 text-destructive" />
            <p className="text-sm text-destructive">
              Something went wrong. Please try again or call us directly.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
            Name <span className="text-destructive">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className={inputClass('name')}
            placeholder="Your full name"
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-foreground">
            Company Name
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className={inputClass('company')}
            placeholder="Your company"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
            Phone <span className="text-destructive">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass('phone')}
            placeholder="Your phone number"
            aria-invalid={!!errors.phone}
          />
          {errors.phone && (
            <p className="mt-1.5 text-xs text-destructive">{errors.phone}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={inputClass('email')}
            placeholder="your@email.com"
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="projectType" className="mb-2 block text-sm font-medium text-foreground">
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            className={inputClass('projectType')}
            defaultValue=""
          >
            <option value="" disabled>
              Select a project type
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="location" className="mb-2 block text-sm font-medium text-foreground">
            Location
          </label>
          <input
            id="location"
            name="location"
            type="text"
            className={inputClass('location')}
            placeholder="Project location"
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
          Message <span className="text-destructive">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`${inputClass('message')} resize-none`}
          placeholder="Tell us about your project requirements, scope, timeline, etc."
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-6 py-4 font-heading text-base font-semibold text-white transition-all hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Submit Enquiry
          </>
        )}
      </button>
    </form>
  );
}

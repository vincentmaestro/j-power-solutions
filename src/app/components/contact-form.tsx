'use client';

import Script from 'next/script';
import { useActionState, useTransition } from 'react';
import { submitContactForm, type ContactFormState } from '@/actions/send-mail';

const CATEGORIES = [
  {
    value: 'residential',
    label: 'Residential',
    note: 'Electrical works, wiring & solar installations for home installations.',
  },
  {
    value: 'commercial',
    label: 'Commercial',
    note: 'Electrical works, wiring & solar installations for shops, business places, hotels, schools, and more.',
  },
  {
    value: 'community',
    label: 'Community Scale',
    note: 'Community development projects \u2014 e.g. Mini-grids for communities, solar-powered boreholes, etc.',
  },
];

const initialState: ContactFormState = { success: false, message: '' };

function Field({
  label,
  name,
  type = 'text',
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-black/60">
        {label}
        {required && <span className="text-jp-green"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="border border-black/15 px-3 py-2.5 font-body text-[14px] focus:outline-none focus:border-jp-green transition-colors"
      />
    </label>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const [pending, startTransition] = useTransition();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const token = await grecaptcha.execute(
          '6Lf8PX0sAAAAANA9RKDXTwn3yVeur6OezDpPra4g',
          { action: 'submit' }
        );

        form.set('token', token);
        
        startTransition(() => {
          formAction(form);
          e.currentTarget.reset();
        });
    }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <Script
      src='https://www.google.com/recaptcha/api.js?render=6Lf8PX0sAAAAANA9RKDXTwn3yVeur6OezDpPra4g'
      strategy='lazyOnload'
      />

      <fieldset>
        <legend className="font-mono text-[11px] tracking-[0.2em] uppercase text-jp-green mb-3">
          Which best describes you? <span className="text-jp-green">*</span>
        </legend>
        <div className="grid sm:grid-cols-3 gap-3">
          {CATEGORIES.map((c) => (
            <label
              key={c.value}
              className="group cursor-pointer border border-black/15 p-4 has-checked:border-jp-green has-checked:bg-jp-green-tint transition-colors"
            >
              <input type="radio" name="category" value={c.value} required className="sr-only" />
              <span className="font-display font-bold text-black text-[14px]">{c.label}</span>
              <p className="font-body text-black/55 text-[12.5px] leading-relaxed mt-1.5">{c.note}</p>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
        <Field label="Location" name="location" placeholder="e.g. Lagos" />
      </div>

      <label className="flex flex-col gap-2">
        <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-black/60">
          Message <span className="text-jp-green">*</span>
        </span>
        <textarea
          name="message"
          required
          rows={5}
          className="border border-black/15 px-3 py-2.5 font-body text-[14px] focus:outline-none focus:border-jp-green transition-colors resize-none"
        />
      </label>

      {state.message && (
        <p
          role="status"
          className={`font-mono text-[13px] px-4 py-3 border ${
            state.success
              ? 'border-jp-green text-jp-green-dim bg-jp-green-tint'
              : 'border-jp-amber text-black bg-jp-amber/10'
          }`}
        >
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="self-start bg-jp-green text-white font-mono text-[13px] tracking-[0.08em] uppercase px-7 py-3.5 hover:bg-jp-green-dim transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {pending ? 'Sending\u2026' : 'Send Message'}
      </button>
    </form>
  );
}

import { Mail, Phone, Clock } from 'lucide-react';
import ContactForm from '../components/contact-form';

export const metadata = {
  title: 'Contact \u2014 J Power Solutions',
  description:
    'Get in touch for solar, electrical, and mini-grid projects \u2014 residential, commercial, or community scale.',
};

export default function ContactPage() {
  return (
    <main className="pt-32 pb-24 max-w-6xl mx-auto px-6">
      <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-jp-green">Get in touch</span>
      <h1 className="font-display font-black text-black text-[40px] md:text-[56px] leading-tight mt-4">Contact.</h1>
      <p className="font-body text-black/60 text-[16px] max-w-lg mt-4 leading-relaxed">
        Tell us about your site and we&rsquo;ll get back to you with next steps.
      </p>

      <div className="grid lg:grid-cols-[1fr_320px] gap-14 mt-16">
        <ContactForm />

        <aside className="lg:border-l lg:border-black/10 lg:pl-14 flex flex-col gap-8">
          <div>
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-black/50">Direct</span>
            <div className="flex flex-col gap-3 mt-4">
              <a
                href="mailto:hello@jpowersolutions.com"
                className="flex items-center gap-2 font-body text-[14px] text-black/75 hover:text-jp-green transition-colors"
              >
                <Mail size={15} /> hello@jpowersolutions.com
              </a>
              <a
                href="tel:+2340000000000"
                className="flex items-center gap-2 font-body text-[14px] text-black/75 hover:text-jp-green transition-colors"
              >
                <Phone size={15} /> +234 705 338 1489
              </a>
              <a
                href="tel:+2340000000000"
                className="flex items-center gap-2 font-body text-[14px] text-black/75 hover:text-jp-green transition-colors"
              >
                <Phone size={15} /> +234 810 295 6246
              </a>
            </div>
          </div>

          <div>
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-black/50">Response time</span>
            <p className="flex items-center gap-2 font-body text-[14px] text-black/75 mt-4">
              <Clock size={14} className="text-jp-green shrink-0" /> Usually within one business day
            </p>
          </div>
        </aside>
      </div>
      <p className='mt-10 font-mono text-center text-sm'>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
    </main>
  );
}

'use server';
import { Resend } from 'resend';

export type ContactFormState = {
  success: boolean;
  message: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const resend = new Resend(process.env.RESEND_API_KEY!);
const CATEGORY_LABELS: Record<string, string> = {
  residential: 'Residential',
  commercial: 'Commercial',
  community: 'Community Scale',
};


export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const token = String(formData.get('token'));
  const category = formData.get('category')?.toString() ?? '';
  const name = formData.get('name')?.toString().trim() ?? '';
  const email = formData.get('email')?.toString().trim() ?? '';
  const phone = formData.get('phone')?.toString().trim() ?? '';
  const location = formData.get('location')?.toString().trim() ?? '';
  const message = formData.get('message')?.toString().trim() ?? '';

  if (!category) {
    return { success: false, message: 'Please choose which best describes you before sending.' };
  }
  if (!name || !email || !message) {
    return { success: false, message: 'Please fill in your name, email, and a short message before sending.' };
  }
  if (!EMAIL_PATTERN.test(email)) {
    return { success: false, message: 'That email address doesn\u2019t look right \u2014 mind double-checking it?' };
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.RECAPCHA_SERVER_KEY!}&response=${token}`
    });
    const {success, score} = await response.json();

    if(!success || score < 0.6)
      return { success: false, message: 'Failed to send. Please try again.' }

    const { error } = await resend.emails.send({
    from: 'J Power Solutions <contact@jpowersolutions.com>',
    to: ['hello@jpowersolutions.com'],
    replyTo: email,
    subject: `New enquiry \u2014 ${CATEGORY_LABELS[category] ?? 'General'} \u2014 ${name}`,
    text: [
      `Category: ${CATEGORY_LABELS[category] ?? 'Not specified'}`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || 'Not provided'}`,
      `Location: ${location || 'Not provided'}`,
      '',
      'Message:',
      message,
    ].join('\n'),
  });

  if (error) {
    console.error('Resend send failed:', error);
    return { success: false, message: 'Something went wrong sending that \u2014 please try again, or email us directly.' };
  }

  return { success: true, message: 'Thanks \u2014 your message is in. We usually reply within one business day.' };
  }
  catch (error) {
    console.error('An error occured:', error);
    return { success: false, message: 'Something went wrong. please try again, or email us directly.' };
  }
}
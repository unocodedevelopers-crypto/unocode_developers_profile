'use client';

import { useRef, useState } from 'react';
import { submitContactForm } from '@/actions/contact';

export default function ClientContactForm({ children }: { children?: React.ReactNode }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    const result = await submitContactForm(formData);
    setIsSubmitting(false);
    if (result.success) {
      setSubmitStatus("success");
      formRef.current?.reset();
    } else {
      setSubmitStatus("error");
    }
  };

  return (
    <form ref={formRef} action={handleSubmit} className="flex w-full max-w-xl flex-col gap-6 2xl:max-w-2xl 2xl:gap-7">
      {children}
      <div className="flex flex-col gap-2 2xl:gap-3 false">
        <label className="text-sm font-semibold tracking-wide 2xl:text-base" htmlFor="name">Name</label>
        <input className="rounded-xl border border-gray-300 bg-transparent p-2 pl-5 text-sm tracking-wide transition-colors placeholder:tracking-wide placeholder:text-gray-600 2xl:text-base" type="text" name="name" id="name" placeholder="Your name" maxLength={100} tabIndex={0} required />
      </div>
      <div className="flex flex-col gap-2 2xl:gap-3 false">
        <label className="text-sm font-semibold tracking-wide 2xl:text-base" htmlFor="email">Email</label>
        <input className="rounded-xl border border-gray-300 bg-transparent p-2 pl-5 text-sm tracking-wide transition-colors placeholder:tracking-wide placeholder:text-gray-600 2xl:text-base" type="email" name="email" id="email" placeholder="Your email address" required maxLength={100} tabIndex={0} />
      </div>
      <div className="flex flex-col gap-2 2xl:gap-3 false">
        <label className="text-sm font-semibold tracking-wide 2xl:text-base" htmlFor="phone">Phone</label>
        <input className="rounded-xl border border-gray-300 bg-transparent p-2 pl-5 text-sm tracking-wide transition-colors placeholder:tracking-wide placeholder:text-gray-600 2xl:text-base" type="tel" name="phone" id="phone" placeholder="Your phone" maxLength={100} tabIndex={0} />
      </div>
      <div className="flex flex-col gap-2 2xl:gap-3 absolute left-0 top-0 -z-10 h-0 w-0 opacity-0">
        <label className="text-sm font-semibold tracking-wide 2xl:text-base" htmlFor="website">Your website</label>
        <input className="rounded-xl border border-gray-300 bg-transparent p-2 pl-5 text-sm tracking-wide transition-colors placeholder:tracking-wide placeholder:text-gray-600 2xl:text-base" type="text" name="website" id="website" placeholder="Your website" maxLength={100} tabIndex={-1} />
      </div>
      <div className="flex flex-col gap-2 2xl:gap-3 false">
        <label className="text-sm font-semibold tracking-wide 2xl:text-base" htmlFor="message">Message</label>
        <textarea className="h-36 resize-none rounded-xl border border-gray-300 bg-transparent p-2 pl-5 text-sm tracking-wide transition-colors placeholder:tracking-wide placeholder:text-gray-600 2xl:h-44 2xl:text-base" name="message" id="message" placeholder="What would you like to achieve and what are your goals?" maxLength={10000} required></textarea>
      </div>
      <p className="text-xs">I use your details to answer your request. Further information can be found in the <a className="underline underline-offset-2 transition-colors hover:text-gray-200" href="/privacy-policy" target="_blank" rel="noopener noreferrer">privacy policy</a>.</p>
      <div className="flex w-full flex-col items-center gap-4 lg:gap-5">
        <button id="submit-button" className="rounded-xl justify-center duration-500 flex gap-2.5 tracking-wide items-center px-8 py-3 bg-gray-50 hover:shadow-none uppercase shadow-button-glow transition-[box-shadow,background-color] text-black font-semibold text-sm w-full max-w-full z-10 h-11 shadow-none hover:bg-gray-50 disabled:opacity-50" type="submit" disabled={isSubmitting}>
          <span id="submit-button-text">{isSubmitting ? "Sending..." : "Send message"}</span>
        </button>
        <div className={`flex min-h-16 items-start justify-center transition-opacity duration-300 ${submitStatus === 'success' ? 'opacity-100' : 'opacity-0'}`} id="submission-result">
          <p className="text-center text-sm tracking-wide text-green-400">Thank you for reaching out! I appreciate your message and will get back to you shortly.</p>
        </div>
        {submitStatus === 'error' && (
          <div className="flex min-h-16 items-start justify-center">
            <p className="text-center text-sm tracking-wide text-red-400">There was an error sending your message. Please try again.</p>
          </div>
        )}
      </div>
    </form>
  );
}

'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { BreadcrumbHeader } from '@/components/breadcrumb-header';
import { Heart, ShieldCheck, CheckCircle2, Send, Info } from 'lucide-react';

export default function DonatePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call to register donor information
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <>
      <Navigation />
      
      <BreadcrumbHeader 
        title="SUPPORT OUR MISSION" 
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Donate', href: '/donate' }
        ]}
      />

      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Side: Uncropped Image with all Bank & Momo Details (7 cols on lg) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-white p-2 rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <img
                  src="/images/donate.jpeg"
                  alt="RYGN Donation Details (Bank Accounts and Momo Pay)"
                  className="w-full h-auto rounded-2xl block object-contain"
                />
              </div>
              
              <div className="flex gap-3 p-4 bg-[#1a3a52]/5 rounded-2xl text-sm text-[#1a3a52] border border-[#1a3a52]/10">
                <Info className="w-5 h-5 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  The image above details our active <strong>Bank Accounts</strong> and <strong>Momo Pay</strong> options. Please use these details to process your transfer directly.
                </p>
              </div>
            </div>

            {/* Right Side: Donor Contact Form (5 cols on lg) */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-[#1a3a52] mb-2">Let Us Know You Donated</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        After transferring your donation via the details provided in the image, please enter your contact information below so we can acknowledge your support and issue an official receipt.
                      </p>
                    </div>

                    <div className="space-y-4">
                      {/* Name Input */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          placeholder={isAnonymous ? "Anonymous Donor" : "John Doe"}
                          value={isAnonymous ? "" : name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2d9c4a]/30 focus:border-[#2d9c4a] transition-all text-sm disabled:bg-gray-50 disabled:text-gray-400"
                          required={!isAnonymous}
                          disabled={isAnonymous}
                        />
                      </div>

                      {/* Email Input */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="johndoe@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2d9c4a]/30 focus:border-[#2d9c4a] transition-all text-sm"
                          required
                        />
                      </div>

                      {/* Anonymous Checkbox */}
                      <label className="flex items-center gap-3 cursor-pointer select-none pt-2">
                        <input
                          type="checkbox"
                          checked={isAnonymous}
                          onChange={(e) => {
                            setIsAnonymous(e.target.checked);
                            if (e.target.checked) setName('Anonymous');
                            else setName('');
                          }}
                          className="w-4 h-4 rounded border-gray-300 text-[#2d9c4a] focus:ring-[#2d9c4a]"
                        />
                        <span className="text-sm text-gray-600 font-medium">I prefer to record this donation anonymously</span>
                      </label>
                    </div>

                    <hr className="border-gray-100" />

                    <div className="space-y-4">
                      <div className="flex gap-3 items-start text-xs text-gray-500">
                        <ShieldCheck className="w-4 h-4 text-[#2d9c4a] shrink-0 mt-0.5" />
                        <p>We respect your privacy. Your information is securely processed and is used solely to issue official receipts and updates.</p>
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-[#2d9c4a] text-white py-4 rounded-xl font-bold text-base hover:bg-[#239a41] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {isLoading ? (
                          <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        ) : (
                          <>
                            <span>Register My Donation</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                ) : (
                  /* Success Notification */
                  <div className="py-10 text-center space-y-6 animate-fade-in">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#2d9c4a]/10 text-[#2d9c4a] mb-2">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-[#1a3a52]">Thank You!</h3>
                      <p className="text-sm text-[#2d9c4a] font-semibold">Your donation details have been submitted.</p>
                    </div>

                    <p className="text-sm text-gray-600 max-w-xs mx-auto leading-relaxed">
                      We will verify your transfer and email your receipt to <strong className="text-gray-800">{email}</strong> soon. Your generosity plays a huge role in supporting youth education in Rwanda.
                    </p>

                    <div className="pt-2">
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setName('');
                          setEmail('');
                          setIsAnonymous(false);
                        }}
                        className="bg-[#1a3a52]/10 text-[#1a3a52] px-6 py-2.5 rounded-xl hover:bg-[#1a3a52]/20 transition-all text-sm font-semibold cursor-pointer"
                      >
                        Submit Another Form
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

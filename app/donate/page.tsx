'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { BreadcrumbHeader } from '@/components/breadcrumb-header';
import { Heart, Gift, ShieldCheck, CheckCircle2, DollarSign, Send } from 'lucide-react';

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(50);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'momo' | 'card' | 'paypal'>('momo');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const donationTiers = [
    { amount: 15, label: '$15', description: 'Supports 1 student attending our nuclear science workshop' },
    { amount: 30, label: '$30', description: 'Funds 1 student learning kit and educational materials' },
    { amount: 50, label: '$50', description: 'Sponsors 1 youth delegate to attend the local science forum' },
    { amount: 100, label: '$100', description: 'Contributes to youth-led research projects and field visits' },
  ];

  const getFinalAmount = () => {
    if (selectedAmount === 'custom') {
      return customAmount ? parseFloat(customAmount) : 0;
    }
    return selectedAmount;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (getFinalAmount() <= 0) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1200);
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
            
            {/* Left Side: Information and Story (5 cols on lg) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="relative h-[320px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white group">
                <Image
                  src="/images/donate.jpeg"
                  alt="Support RYGN Mission"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                  <p className="text-white text-sm italic font-medium">
                    &ldquo;Investing in the youth is investing in our sustainable future.&rdquo;
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a52]">
                  Why Your Donation Matters
                </h2>
                
                <p className="text-gray-700 leading-relaxed text-base">
                  Rwandan Youth Generation in Nuclear (RYGN) is dedicated to empowering and educating the youth in Rwanda about nuclear science and its peaceful, beneficial applications. Your contribution helps us organize outreach campaigns, research projects, and specialized workshops.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-[#2d9c4a]/10 rounded-xl text-[#2d9c4a] mt-1 shrink-0">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a3a52] text-md">Fostering Innovation</h4>
                      <p className="text-gray-600 text-sm">We provide training and resources that spark technical interest in safe nuclear sciences and green technologies.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-[#1a3a52]/10 rounded-xl text-[#1a3a52] mt-1 shrink-0">
                      <Gift className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a3a52] text-md">Sponsoring Education</h4>
                      <p className="text-gray-600 text-sm">Directly supports school outreach programmes and ensures high-quality scientific learning materials are free.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-[#2d9c4a]/10 rounded-xl text-[#2d9c4a] mt-1 shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a3a52] text-md">Accountable & Transparent</h4>
                      <p className="text-gray-600 text-sm">100% of public donations go directly into funding educational program activities and student support.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Interactive Form (7 cols on lg) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100 transition-all duration-300">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-[#1a3a52] mb-1">Make a Contribution</h3>
                      <p className="text-gray-500 text-sm">Select an amount or enter your own to make a difference today.</p>
                    </div>

                    {/* Donation Tiers Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {donationTiers.map((tier) => (
                        <button
                          key={tier.amount}
                          type="button"
                          onClick={() => {
                            setSelectedAmount(tier.amount);
                            setCustomAmount('');
                          }}
                          className={`p-4 rounded-xl text-center border-2 transition-all cursor-pointer flex flex-col items-center justify-center ${
                            selectedAmount === tier.amount
                              ? 'border-[#2d9c4a] bg-[#2d9c4a]/5 text-[#2d9c4a] font-bold shadow-md'
                              : 'border-gray-200 text-gray-700 hover:border-[#1a3a52]/40 hover:bg-gray-50'
                          }`}
                        >
                          <span className="text-xl font-bold">{tier.label}</span>
                          <span className="text-[10px] text-gray-500 mt-1 line-clamp-2 leading-tight">
                            {tier.amount === 15 ? 'Outreach' : tier.amount === 30 ? 'Kit' : tier.amount === 50 ? 'Forum' : 'Research'}
                          </span>
                        </button>
                      ))}
                    </div>

                    {/* Custom Amount Option */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedAmount('custom')}
                        className={`px-6 py-3 rounded-xl border-2 font-bold cursor-pointer text-center sm:text-left shrink-0 transition-all ${
                          selectedAmount === 'custom'
                            ? 'border-[#2d9c4a] bg-[#2d9c4a]/5 text-[#2d9c4a] shadow-md'
                            : 'border-gray-200 text-gray-700 hover:border-[#1a3a52]/40 hover:bg-gray-50'
                        }`}
                      >
                        Custom Amount
                      </button>

                      {selectedAmount === 'custom' && (
                        <div className="relative w-full">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">$</span>
                          <input
                            type="number"
                            min="1"
                            placeholder="Enter amount"
                            value={customAmount}
                            onChange={(e) => setCustomAmount(e.target.value)}
                            className="w-full pl-8 pr-4 py-3 rounded-xl border-2 border-[#2d9c4a] focus:outline-none focus:ring-2 focus:ring-[#2d9c4a]/30 transition-all text-[#1a3a52] font-semibold"
                            required
                          />
                        </div>
                      )}
                    </div>

                    {/* Tier Description Alert */}
                    {selectedAmount !== 'custom' && (
                      <div className="p-4 bg-gray-50 border-l-4 border-[#2d9c4a] rounded-r-xl">
                        <p className="text-sm text-gray-700 font-medium">
                          {donationTiers.find((t) => t.amount === selectedAmount)?.description}
                        </p>
                      </div>
                    )}

                    <hr className="border-gray-100 my-4" />

                    {/* Donor Info */}
                    <div className="space-y-4">
                      <h4 className="font-bold text-[#1a3a52] text-lg">Donor Information</h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                          <input
                            type="text"
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2d9c4a]/30 focus:border-[#2d9c4a] transition-all text-sm"
                            required={!isAnonymous}
                            disabled={isAnonymous}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                          <input
                            type="email"
                            placeholder="johndoe@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2d9c4a]/30 focus:border-[#2d9c4a] transition-all text-sm"
                            required
                          />
                        </div>
                      </div>

                      <label className="flex items-center gap-3 cursor-pointer select-none">
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
                        <span className="text-sm text-gray-600 font-medium">Make this contribution anonymously</span>
                      </label>
                    </div>

                    <hr className="border-gray-100 my-4" />

                    {/* Payment Method Selector */}
                    <div className="space-y-3">
                      <h4 className="font-bold text-[#1a3a52] text-lg">Select Payment Method</h4>
                      
                      <div className="grid grid-cols-3 gap-3">
                        <button
                          type="button"
                          onClick={() => setPaymentMethod('momo')}
                          className={`p-3 rounded-xl text-center border-2 transition-all cursor-pointer flex flex-col items-center justify-center ${
                            paymentMethod === 'momo'
                              ? 'border-[#2d9c4a] bg-[#2d9c4a]/5 text-[#2d9c4a] font-bold'
                              : 'border-gray-200 text-gray-700 hover:border-[#1a3a52]/40 hover:bg-gray-50'
                          }`}
                        >
                          <span className="text-sm font-bold">Mobile Money</span>
                          <span className="text-[10px] text-gray-500 mt-0.5">MTN / Airtel</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setPaymentMethod('card')}
                          className={`p-3 rounded-xl text-center border-2 transition-all cursor-pointer flex flex-col items-center justify-center ${
                            paymentMethod === 'card'
                              ? 'border-[#2d9c4a] bg-[#2d9c4a]/5 text-[#2d9c4a] font-bold'
                              : 'border-gray-200 text-gray-700 hover:border-[#1a3a52]/40 hover:bg-gray-50'
                          }`}
                        >
                          <span className="text-sm font-bold">Credit Card</span>
                          <span className="text-[10px] text-gray-500 mt-0.5">Visa / MasterCard</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setPaymentMethod('paypal')}
                          className={`p-3 rounded-xl text-center border-2 transition-all cursor-pointer flex flex-col items-center justify-center ${
                            paymentMethod === 'paypal'
                              ? 'border-[#2d9c4a] bg-[#2d9c4a]/5 text-[#2d9c4a] font-bold'
                              : 'border-gray-200 text-gray-700 hover:border-[#1a3a52]/40 hover:bg-gray-50'
                          }`}
                        >
                          <span className="text-sm font-bold">PayPal</span>
                          <span className="text-[10px] text-gray-500 mt-0.5">International</span>
                        </button>
                      </div>

                      {paymentMethod === 'momo' && (
                        <div className="p-4 bg-yellow-50/70 border border-yellow-200 rounded-xl space-y-2 mt-2">
                          <p className="text-xs text-yellow-800 font-medium">
                            Enter your mobile phone number below to receive a secure MTN MoMo or Airtel Money prompt.
                          </p>
                          <input
                            type="tel"
                            placeholder="e.g. +250 788 123 456"
                            className="w-full px-4 py-2 rounded-lg border border-yellow-200 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                            required={paymentMethod === 'momo'}
                          />
                        </div>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading || getFinalAmount() <= 0}
                      className="w-full bg-[#2d9c4a] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#239a41] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isLoading ? (
                        <span className="inline-block w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></span>
                      ) : (
                        <>
                          <span>Donate ${getFinalAmount()}</span>
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  /* Success State */
                  <div className="py-12 px-4 text-center space-y-6 animate-fade-in">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#2d9c4a]/10 text-[#2d9c4a] mb-2 animate-bounce">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-3xl font-extrabold text-[#1a3a52]">Thank You, {isAnonymous ? 'Anonymous Donor' : name}!</h3>
                      <p className="text-lg text-[#2d9c4a] font-semibold">Your donation of ${getFinalAmount()} was received successfully!</p>
                    </div>

                    <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
                      Your generous support will immediately go toward educational resources and outreach programs to empower youth in Rwanda through nuclear science. An email confirmation has been sent to <strong className="text-gray-800">{email}</strong>.
                    </p>

                    <div className="pt-4">
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setName('');
                          setEmail('');
                          setCustomAmount('');
                          setSelectedAmount(50);
                        }}
                        className="bg-[#1a3a52] text-white px-8 py-3 rounded-xl hover:bg-[#0f2847] transition-all font-semibold shadow-md cursor-pointer"
                      >
                        Make Another Donation
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

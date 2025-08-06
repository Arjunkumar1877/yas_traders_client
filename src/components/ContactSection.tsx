'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

const ContactSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-cream-50 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #8b6b5c 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brown-800 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-golden-400 mx-auto mb-6"></div>
          <p className="text-lg text-brown-700 max-w-3xl mx-auto leading-relaxed">
            Have questions about our products or want to place a bulk order? Reach out to us and we&apos;ll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Form and Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white border border-cream-300 rounded-lg p-8 shadow-sm">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-brown-800 font-medium text-sm">Name</Label>
                <Input 
                  id="name" 
                  placeholder="Your Name" 
                  className="border-cream-300 bg-white text-brown-800 placeholder:text-brown-500 focus:border-brown-400 focus:ring-brown-400 h-12" 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-brown-800 font-medium text-sm">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Your Email" 
                  className="border-cream-300 bg-white text-brown-800 placeholder:text-brown-500 focus:border-brown-400 focus:ring-brown-400 h-12" 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="inquiry-type" className="text-brown-800 font-medium text-sm">Inquiry Type</Label>
                <Select defaultValue="retail">
                  <SelectTrigger className="border-cream-300 bg-white text-brown-800 focus:border-brown-400 focus:ring-brown-400 h-12">
                    <SelectValue placeholder="Select inquiry type" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-cream-300">
                    <SelectItem value="retail">Retail Order</SelectItem>
                    <SelectItem value="wholesale">Wholesale Order</SelectItem>
                    <SelectItem value="distribution">Distribution Partnership</SelectItem>
                    <SelectItem value="franchise">Franchise Opportunity</SelectItem>
                    <SelectItem value="export">Export/B2B Partnership</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-brown-800 font-medium text-sm">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Your Message" 
                  className="border-cream-300 bg-white text-brown-800 placeholder:text-brown-500 focus:border-brown-400 focus:ring-brown-400 min-h-[120px] resize-none" 
                />
              </div>
              
              <Button 
                className="w-full font-medium py-3 rounded-md h-12 border-0 shadow-sm"
                style={{
                  backgroundColor: '#fbbf24',
                  color: 'white'
                }}
              >
                Send Message
              </Button>
              
              <p className="text-xs text-brown-600 text-center">
                This is a demo contact form
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-white border border-cream-300 rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brown-800 mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-brown-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-brown-800 font-medium">YAS TRADERS</p>
                    <p className="text-brown-700">Vallakkadavu, Trivandrum 695008</p>
                    <p className="text-brown-700">Kerala, India</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-brown-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-brown-800">+91 9633286793</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-brown-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-brown-800">yastradersco.in</span>
                </div>
              </div>
            </div>

            {/* Delivery Information */}
            <div className="bg-white border border-cream-300 rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brown-800 mb-6">Delivery Information</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-brown-800 font-bold mb-4">Delivery Timeframes:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <svg className="w-4 h-4 text-golden-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-brown-800">Kerala, Tamil Nadu, Bangalore: 2-3 days</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-4 h-4 text-golden-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-brown-800">Rest of South India: 3-5 days</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-4 h-4 text-golden-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-brown-800">North India: 5-7 days</span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-cream-300">
                  <p className="text-sm text-brown-800 font-medium">
                    Free delivery on orders above ₹1000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 
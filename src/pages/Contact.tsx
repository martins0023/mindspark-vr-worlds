
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Contact = () => {
  const contactMethods = [
    {
      icon: "📧",
      title: "Email Support",
      description: "Get help from our support team",
      contact: "support@cognivr.com",
      response: "24-48 hours"
    },
    {
      icon: "💬",
      title: "Live Chat",
      description: "Chat with us in real-time",
      contact: "Available 9 AM - 6 PM PST",
      response: "Immediate"
    },
    {
      icon: "📞",
      title: "Phone Support",
      description: "Speak directly with our team",
      contact: "+1 (555) 123-4567",
      response: "During business hours"
    },
    {
      icon: "🏢",
      title: "Enterprise Sales",
      description: "For institutional inquiries",
      contact: "enterprise@cognivr.com",
      response: "Same day"
    }
  ];

  const offices = [
    {
      city: "San Francisco, CA",
      address: "123 Innovation Drive, Suite 400",
      phone: "+1 (555) 123-4567",
      email: "sf@cognivr.com"
    },
    {
      city: "Austin, TX",
      address: "456 Tech Boulevard, Floor 2",
      phone: "+1 (555) 234-5678",
      email: "austin@cognivr.com"
    },
    {
      city: "London, UK",
      address: "789 Future Street, Building C",
      phone: "+44 20 1234 5678",
      email: "london@cognivr.com"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-[#2C2C2E] mb-6">
              Get in <span className="text-[#1E88E5]">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about CogniVR? We're here to help you unlock your cognitive potential. 
              Reach out to our team for support, sales inquiries, or partnership opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#2C2C2E] text-center mb-12">
            How Can We Help You?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold text-[#2C2C2E] mb-3">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <div className="text-[#1E88E5] font-semibold mb-2">{method.contact}</div>
                <div className="text-sm text-gray-500">Response: {method.response}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold text-[#2C2C2E] text-center mb-8">
              Send Us a Message
            </h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E88E5] focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E88E5] focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E88E5] focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E88E5] focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E88E5] focus:border-transparent">
                  <option>General Inquiry</option>
                  <option>Technical Support</option>
                  <option>Sales & Pricing</option>
                  <option>Enterprise Solutions</option>
                  <option>Partnership Opportunities</option>
                  <option>Media & Press</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E88E5] focus:border-transparent"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>
              
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4 text-[#1E88E5] border-gray-300 rounded focus:ring-[#1E88E5]"
                />
                <label className="text-sm text-gray-600">
                  I agree to receive communications from CogniVR and understand that I can 
                  unsubscribe at any time. View our <a href="#" className="text-[#1E88E5] hover:underline">Privacy Policy</a>.
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#1E88E5] text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#2C2C2E] text-center mb-12">
            Our Offices
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl text-center">
                <h3 className="text-2xl font-bold text-[#2C2C2E] mb-4">{office.city}</h3>
                <div className="space-y-3 text-gray-600">
                  <p className="flex items-center justify-center space-x-2">
                    <span>📍</span>
                    <span>{office.address}</span>
                  </p>
                  <p className="flex items-center justify-center space-x-2">
                    <span>📞</span>
                    <span>{office.phone}</span>
                  </p>
                  <p className="flex items-center justify-center space-x-2">
                    <span>📧</span>
                    <span>{office.email}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#2C2C2E] text-center mb-12">
            Quick Answers
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#2C2C2E] mb-3">
                How quickly can I get started?
              </h3>
              <p className="text-gray-600">
                You can start using CogniVR immediately after signing up. Our free plan 
                gives you instant access to basic VR environments and cognitive exercises.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#2C2C2E] mb-3">
                Do you offer technical support for VR setup?
              </h3>
              <p className="text-gray-600">
                Yes! Our support team can help you set up your VR headset and optimize 
                your CogniVR experience. We offer live chat, email, and video call support.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#2C2C2E] mb-3">
                Can I schedule a demo for my organization?
              </h3>
              <p className="text-gray-600">
                Absolutely! Contact our enterprise team to schedule a personalized demo 
                for your organization. We'll show you how CogniVR can benefit your specific use case.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#1E88E5] to-[#FFD600]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Don't wait to enhance your cognitive abilities. Get started with CogniVR today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/pricing"
              className="bg-white text-[#1E88E5] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Pricing Plans
            </Link>
            <Link
              to="/features"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

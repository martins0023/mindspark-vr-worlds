
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      period: "Forever",
      description: "Perfect for getting started with cognitive training",
      features: [
        "3 VR environments",
        "Basic performance tracking",
        "Daily 15-minute sessions",
        "Mobile app access",
        "Community support"
      ],
      limitations: [
        "Limited to 3 exercise types",
        "Basic analytics only",
        "No biometric integration"
      ],
      cta: "Start Free",
      popular: false,
      color: "border-gray-200"
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      description: "Advanced features for serious cognitive enhancement",
      features: [
        "Unlimited VR environments",
        "Advanced analytics dashboard",
        "Unlimited session time",
        "Biofeedback integration",
        "Priority support",
        "Custom difficulty settings",
        "Progress export"
      ],
      limitations: [],
      cta: "Start Pro Trial",
      popular: true,
      color: "border-[#1E88E5]"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "Contact us",
      description: "Institutional licensing for organizations",
      features: [
        "Bulk user management",
        "Custom VR scenarios",
        "Advanced reporting",
        "API access",
        "Dedicated support",
        "Training programs",
        "Clinical trial modules",
        "HIPAA compliance"
      ],
      limitations: [],
      cta: "Contact Sales",
      popular: false,
      color: "border-[#FFD600]"
    }
  ];

  const premiumPacks = [
    {
      name: "Language Learning VR",
      price: "$9.99",
      description: "Immersive language learning scenarios",
      features: ["10 language environments", "Speech recognition", "Cultural contexts"]
    },
    {
      name: "Professional Simulations",
      price: "$14.99",
      description: "Career-specific cognitive challenges",
      features: ["Medical scenarios", "Financial decision-making", "Engineering problems"]
    },
    {
      name: "Senior Care Package",
      price: "$7.99",
      description: "Gentle cognitive maintenance for seniors",
      features: ["Low-impact exercises", "Large UI elements", "Simplified navigation"]
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
              Choose Your <span className="text-[#1E88E5]">Cognitive Journey</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the perfect plan to unlock your mind's potential with our 
              revolutionary VR cognitive enhancement platform.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`relative bg-white border-2 ${plan.color} rounded-3xl p-8 ${plan.popular ? 'shadow-2xl scale-105' : 'shadow-lg'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#1E88E5] text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[#2C2C2E] mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-[#1E88E5]">{plan.price}</span>
                    {plan.period !== "Contact us" && (
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-[#2C2C2E]">Features included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <span className="text-green-500 mt-1">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {plan.limitations.length > 0 && (
                    <div className="pt-4 border-t border-gray-200">
                      <h4 className="font-semibold text-gray-500 mb-2">Limitations:</h4>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <span className="text-gray-400 mt-1">•</span>
                            <span className="text-gray-500 text-sm">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <button className={`w-full py-4 rounded-xl font-semibold text-lg transition-colors ${
                  plan.popular 
                    ? 'bg-[#1E88E5] text-white hover:bg-blue-600' 
                    : 'bg-gray-100 text-[#2C2C2E] hover:bg-gray-200'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Packs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2C2C2E] mb-4">
              Premium Domain Packs
            </h2>
            <p className="text-xl text-gray-600">
              Specialized VR modules for targeted cognitive enhancement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {premiumPacks.map((pack, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-[#2C2C2E] mb-2">{pack.name}</h3>
                  <div className="text-2xl font-bold text-[#FFD600] mb-2">{pack.price}</div>
                  <p className="text-gray-600 text-sm">{pack.description}</p>
                </div>

                <ul className="space-y-2 mb-6">
                  {pack.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-[#FFD600] mt-1">•</span>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-[#FFD600] text-[#2C2C2E] py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                  Add to Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Licensing */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#1E88E5] to-[#FFD600] rounded-3xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <h2 className="text-4xl font-bold mb-6">Institutional Licensing</h2>
                <p className="text-xl mb-6">
                  Bulk deployments for schools, aged-care facilities, and corporate training programs.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <span className="text-2xl">🏫</span>
                    <span>Educational institutions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-2xl">🏥</span>
                    <span>Healthcare facilities</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-2xl">🏢</span>
                    <span>Corporate wellness programs</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-2xl">🔬</span>
                    <span>Research institutions</span>
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="bg-white text-[#1E88E5] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
                >
                  Contact Sales Team
                </Link>
              </div>
              
              <div className="bg-white/20 p-6 rounded-2xl backdrop-blur">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise Benefits</h3>
                <ul className="space-y-3 text-white">
                  <li>• Custom deployment options</li>
                  <li>• Dedicated account management</li>
                  <li>• Training and onboarding</li>
                  <li>• Advanced analytics and reporting</li>
                  <li>• Integration with existing systems</li>
                  <li>• Compliance and security certifications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#2C2C2E] text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#2C2C2E] mb-3">
                What VR headsets are supported?
              </h3>
              <p className="text-gray-600">
                CogniVR supports Oculus Quest, Quest 2, Quest Pro, and any WebXR-enabled device. 
                We also offer browser-based experiences for users without VR headsets.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#2C2C2E] mb-3">
                Can I cancel my subscription anytime?
              </h3>
              <p className="text-gray-600">
                Yes, you can cancel your subscription at any time. Your access will continue until 
                the end of your current billing period, and we offer a 30-day money-back guarantee.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#2C2C2E] mb-3">
                Is my data secure and private?
              </h3>
              <p className="text-gray-600">
                Absolutely. We use enterprise-grade encryption and comply with GDPR, CCPA, and other 
                privacy regulations. You have full control over your data and can delete it at any time.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#2C2C2E] mb-3">
                How long does it take to see results?
              </h3>
              <p className="text-gray-600">
                Most users report noticeable improvements in focus and memory within 2-3 weeks of 
                regular use. Our adaptive AI ensures you're always challenged at the right level 
                for optimal cognitive growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2C2C2E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Enhance Your Mind?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of users already improving their cognitive abilities with CogniVR.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#1E88E5] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors">
              Start Free Trial
            </button>
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

export default Pricing;

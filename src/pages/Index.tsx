
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowDown } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-[#2C2C2E] leading-tight">
                  Step into the
                  <span className="text-[#1E88E5]"> Future</span> of
                  <span className="text-[#FFD600]"> Cognitive</span> Fitness
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl">
                  CogniVR harnesses virtual reality to deliver adaptive cognitive challenges in immersive, 
                  gamified environments that enhance memory, executive function, and problem-solving skills.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/features"
                  className="bg-[#1E88E5] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Explore Features
                </Link>
                <Link
                  to="/analytics"
                  className="bg-white text-[#1E88E5] border-2 border-[#1E88E5] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-300 text-center"
                >
                  View Analytics
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-[#1E88E5] to-[#FFD600] p-8 rounded-3xl shadow-2xl">
                <div className="bg-white rounded-2xl p-6 space-y-4">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-yellow-100 rounded-xl flex items-center justify-center">
                    <div className="text-6xl">🥽</div>
                  </div>
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-bold text-[#2C2C2E]">VR Environment Ready</h3>
                    <p className="text-gray-600">Immersive cognitive training</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2C2C2E] mb-4">
              Revolutionary Cognitive Enhancement
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience cutting-edge VR technology designed to boost your mental agility through immersive, adaptive training environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/features" className="group bg-blue-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-[#1E88E5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <span className="text-2xl text-white">🧠</span>
              </div>
              <h3 className="text-2xl font-bold text-[#2C2C2E] mb-4">Adaptive Engine</h3>
              <p className="text-gray-600">
                AI-powered environment generation that adjusts complexity based on your performance in real-time.
              </p>
              <div className="mt-4 flex items-center text-[#1E88E5] font-semibold">
                Learn more <ArrowDown className="ml-2 w-4 h-4 rotate-[-90deg]" />
              </div>
            </Link>

            <Link to="/analytics" className="group bg-yellow-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-[#FFD600] rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors">
                <span className="text-2xl text-white">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-[#2C2C2E] mb-4">Performance Analytics</h3>
              <p className="text-gray-600">
                Comprehensive tracking of reaction time, error rates, and cognitive load with detailed progress visualization.
              </p>
              <div className="mt-4 flex items-center text-[#FFD600] font-semibold">
                View Dashboard <ArrowDown className="ml-2 w-4 h-4 rotate-[-90deg]" />
              </div>
            </Link>

            <Link to="/technology" className="group bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-[#2C2C2E] rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-800 transition-colors">
                <span className="text-2xl text-white">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-[#2C2C2E] mb-4">Advanced Technology</h3>
              <p className="text-gray-600">
                Built with Unity/WebXR, Node.js microservices, and AI/ML for seamless VR experiences.
              </p>
              <div className="mt-4 flex items-center text-[#2C2C2E] font-semibold">
                Explore Tech <ArrowDown className="ml-2 w-4 h-4 rotate-[-90deg]" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#1E88E5] to-[#FFD600]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Mind?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already enhancing their cognitive abilities with CogniVR.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/pricing"
              className="bg-white text-[#1E88E5] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Pricing
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

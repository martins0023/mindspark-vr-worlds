
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Features = () => {
  const features = [
    {
      title: "Adaptive Environment Engine",
      description: "Generates VR scenes whose complexity adjusts to your performance in real-time",
      details: [
        "Dynamic maze generation based on spatial navigation skills",
        "Simulated daily tasks that adapt to cognitive load",
        "Real-time difficulty scaling using ML algorithms",
        "Contextual environment changes based on user progress"
      ],
      icon: "🌐",
      color: "bg-blue-50 border-[#1E88E5]"
    },
    {
      title: "Multi-Domain Cognitive Tasks",
      description: "Comprehensive cognitive exercises across multiple domains",
      details: [
        "Memory recall exercises in virtual grocery stores",
        "Divided attention drills with multiple virtual agents",
        "Rapid decision-making under time constraints",
        "Executive function challenges in realistic scenarios"
      ],
      icon: "🎯",
      color: "bg-yellow-50 border-[#FFD600]"
    },
    {
      title: "Performance Analytics Dashboard",
      description: "Comprehensive tracking and visualization of cognitive metrics",
      details: [
        "Reaction time measurement and analysis",
        "Error rate tracking across different task types",
        "Cognitive load assessment and optimization",
        "Progress trend visualization over time"
      ],
      icon: "📈",
      color: "bg-green-50 border-green-500"
    },
    {
      title: "Biofeedback Integration",
      description: "Syncs with biometric devices to optimize training sessions",
      details: [
        "Heart rate monitoring for stress detection",
        "EEG integration for cognitive state assessment",
        "Automatic difficulty modulation based on fatigue",
        "Real-time physiological feedback incorporation"
      ],
      icon: "💓",
      color: "bg-purple-50 border-purple-500"
    },
    {
      title: "Social VR Brain Battles",
      description: "Peer-to-peer challenges in shared virtual environments",
      details: [
        "Multiplayer cognitive challenges in shared arenas",
        "Collaborative problem-solving scenarios",
        "Competitive leaderboards and achievements",
        "Real-time communication during challenges"
      ],
      icon: "⚔️",
      color: "bg-red-50 border-red-500"
    },
    {
      title: "Accessibility Features",
      description: "Inclusive design ensuring accessibility for all users",
      details: [
        "Adjustable movement speeds for comfort",
        "Subtitle support for audio cues",
        "Comfort mode reducing rapid camera motion",
        "Customizable avatars and scenarios"
      ],
      icon: "♿",
      color: "bg-indigo-50 border-indigo-500"
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
              Cutting-Edge <span className="text-[#1E88E5]">Features</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the revolutionary features that make CogniVR the most advanced 
              cognitive enhancement platform available today.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`${feature.color} border-2 p-8 rounded-2xl hover:shadow-lg transition-all duration-300`}>
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{feature.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#2C2C2E] mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-[#1E88E5] mt-1">•</span>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2C2C2E] mb-4">
              Seamless Integration
            </h2>
            <p className="text-xl text-gray-600">
              CogniVR works with leading VR platforms and biometric devices
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["Oculus Quest", "WebXR", "Heart Rate Monitors", "EEG Headsets"].map((platform, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">
                  {index === 0 && "🥽"}
                  {index === 1 && "🌐"}
                  {index === 2 && "💓"}
                  {index === 3 && "🧠"}
                </div>
                <h4 className="font-semibold text-[#2C2C2E]">{platform}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1E88E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Experience These Features Today
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Ready to enhance your cognitive abilities with cutting-edge VR technology?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/pricing"
              className="bg-white text-[#1E88E5] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Now
            </Link>
            <Link
              to="/analytics"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View Analytics Demo
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;

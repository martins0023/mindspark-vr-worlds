
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const About = () => {
  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      expertise: "Neuroscience & VR Systems",
      description: "Leading expert in cognitive enhancement technologies with 15+ years in neurotechnology research."
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of AI/ML",
      expertise: "Machine Learning & Adaptive Systems",
      description: "Former Google Research scientist specializing in reinforcement learning and cognitive modeling."
    },
    {
      name: "Emily Watson",
      role: "UX Design Director",
      expertise: "Human-Computer Interaction",
      description: "Award-winning designer focused on accessible VR experiences and cognitive interface design."
    },
    {
      name: "Dr. James Park",
      role: "Clinical Research Lead",
      expertise: "Cognitive Psychology",
      description: "Clinical psychologist with expertise in cognitive assessment and therapeutic VR applications."
    }
  ];

  const values = [
    {
      icon: "🧠",
      title: "Scientific Excellence",
      description: "Every feature is backed by peer-reviewed research and rigorous testing to ensure cognitive benefits."
    },
    {
      icon: "🌍",
      title: "Accessibility First",
      description: "Designing inclusive experiences that work for users of all abilities, ages, and backgrounds."
    },
    {
      icon: "🔒",
      title: "Privacy & Ethics",
      description: "Protecting user data with enterprise-grade security while maintaining transparent ethical practices."
    },
    {
      icon: "🚀",
      title: "Innovation",
      description: "Pushing the boundaries of what's possible in cognitive enhancement through cutting-edge technology."
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
              About <span className="text-[#1E88E5]">CogniVR</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're pioneering the future of cognitive enhancement through immersive 
              virtual reality experiences that make mental fitness engaging, effective, and accessible.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#2C2C2E] mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To revolutionize cognitive training by creating immersive VR environments that 
                enhance memory retention, executive function, and problem-solving skills that 
                translate to real-world benefits.
              </p>
              <p className="text-lg text-gray-600">
                We believe that cognitive fitness should be as accessible and engaging as 
                physical fitness, and our technology makes that vision a reality.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#1E88E5] to-[#FFD600] p-8 rounded-3xl text-white">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg mb-6">
                A world where everyone has access to personalized, scientifically-backed 
                cognitive enhancement tools that adapt to their unique needs and goals.
              </p>
              <div className="bg-white/20 p-4 rounded-xl">
                <p className="text-sm font-medium">
                  "The future of human potential lies at the intersection of 
                  neuroscience, technology, and immersive experiences."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#2C2C2E] text-center mb-12">
            The Problem We're Solving
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4 text-center">📱</div>
              <h3 className="text-xl font-bold text-[#2C2C2E] mb-4 text-center">Limited Engagement</h3>
              <p className="text-gray-600 text-center">
                Traditional cognitive training tools are screen-based and lack immersive, 
                context-rich stimuli, reducing user engagement and motivation.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4 text-center">🔄</div>
              <h3 className="text-xl font-bold text-[#2C2C2E] mb-4 text-center">Poor Transfer</h3>
              <p className="text-gray-600 text-center">
                Most cognitive exercises don't translate well to real-world scenarios, 
                limiting the practical benefits of training sessions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4 text-center">⚙️</div>
              <h3 className="text-xl font-bold text-[#2C2C2E] mb-4 text-center">One-Size-Fits-All</h3>
              <p className="text-gray-600 text-center">
                Existing solutions lack adaptive difficulty and personalization, 
                failing to optimize training for individual cognitive profiles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#2C2C2E] text-center mb-12">
            Our Revolutionary Solution
          </h2>
          
          <div className="bg-gradient-to-br from-blue-50 to-yellow-50 p-8 lg:p-12 rounded-3xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-[#2C2C2E] mb-6">
                  Immersive VR Cognitive Training
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#1E88E5] rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2C2C2E]">Context-Rich Environments</h4>
                      <p className="text-gray-600">Training in realistic VR scenarios that mirror real-world challenges</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#FFD600] rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2C2C2E]">Adaptive AI Difficulty</h4>
                      <p className="text-gray-600">Real-time adjustment based on performance and biometric feedback</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2C2C2E]">Social Engagement</h4>
                      <p className="text-gray-600">Multiplayer challenges and collaborative problem-solving scenarios</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-center space-y-4">
                  <div className="text-6xl">🥽</div>
                  <h4 className="text-xl font-bold text-[#2C2C2E]">VR Training Environment</h4>
                  <p className="text-gray-600">
                    Experience cognitive challenges in immersive 3D environments 
                    that adapt to your unique cognitive profile.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[#2C2C2E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#2C2C2E] text-center mb-12">
            Meet Our Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#1E88E5] to-[#FFD600] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-white">👨‍💼</span>
                </div>
                <h3 className="text-xl font-bold text-[#2C2C2E] mb-2">{member.name}</h3>
                <h4 className="text-[#1E88E5] font-semibold mb-2">{member.role}</h4>
                <p className="text-sm text-gray-600 mb-3">{member.expertise}</p>
                <p className="text-xs text-gray-500">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#1E88E5] to-[#FFD600]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Us in Shaping the Future
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Be part of the cognitive enhancement revolution and unlock your mind's true potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/pricing"
              className="bg-white text-[#1E88E5] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

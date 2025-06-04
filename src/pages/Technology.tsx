
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Technology = () => {
  const techStack = [
    {
      category: "Frontend & VR",
      technologies: [
        { name: "Unity/WebXR", description: "VR client development for immersive experiences" },
        { name: "C#", description: "Core Unity scripting for VR interactions" },
        { name: "React", description: "Web analytics portal interface" },
        { name: "TypeScript", description: "Type-safe frontend development" }
      ],
      color: "bg-blue-50 border-[#1E88E5]"
    },
    {
      category: "Backend Services",
      technologies: [
        { name: "Node.js", description: "Microservices architecture" },
        { name: "WebSockets", description: "Real-time communication for social battles" },
        { name: "Express.js", description: "RESTful API development" },
        { name: "JWT", description: "Secure authentication system" }
      ],
      color: "bg-green-50 border-green-500"
    },
    {
      category: "Database & Storage",
      technologies: [
        { name: "MongoDB", description: "User profiles and session data storage" },
        { name: "InfluxDB", description: "Time-series performance metrics" },
        { name: "Redis", description: "Caching and session management" },
        { name: "CDN", description: "Asset distribution and streaming" }
      ],
      color: "bg-purple-50 border-purple-500"
    },
    {
      category: "AI & Machine Learning",
      technologies: [
        { name: "Python", description: "ML microservices development" },
        { name: "TensorFlow", description: "Reinforcement learning for task difficulty" },
        { name: "Scikit-learn", description: "Performance analysis algorithms" },
        { name: "TensorFlow Serving", description: "ML model deployment" }
      ],
      color: "bg-yellow-50 border-[#FFD600]"
    }
  ];

  const architecture = [
    {
      layer: "Client Layer",
      components: ["Unity VR Client", "React Web Portal", "Mobile Companion App"],
      description: "User-facing applications across multiple platforms"
    },
    {
      layer: "API Gateway",
      components: ["Load Balancer", "Rate Limiting", "Authentication", "Routing"],
      description: "Request management and security enforcement"
    },
    {
      layer: "Microservices",
      components: ["User Service", "Analytics Service", "Session Service", "ML Service"],
      description: "Scalable, independent service components"
    },
    {
      layer: "Data Layer",
      components: ["MongoDB Cluster", "InfluxDB", "Redis Cache", "File Storage"],
      description: "Distributed data storage and management"
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
              Advanced <span className="text-[#1E88E5]">Technology</span> Stack
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on cutting-edge technologies to deliver seamless, scalable, 
              and intelligent VR cognitive enhancement experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#2C2C2E] text-center mb-12">
            Our Technology Stack
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techStack.map((category, index) => (
              <div key={index} className={`${category.color} border-2 p-8 rounded-2xl`}>
                <h3 className="text-2xl font-bold text-[#2C2C2E] mb-6">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.technologies.map((tech, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl shadow-sm">
                      <h4 className="font-semibold text-[#2C2C2E] mb-2">{tech.name}</h4>
                      <p className="text-gray-600 text-sm">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#2C2C2E] text-center mb-12">
            System Architecture
          </h2>
          
          <div className="space-y-6">
            {architecture.map((layer, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#1E88E5]">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-[#2C2C2E] mb-2">
                      {layer.layer}
                    </h3>
                    <p className="text-gray-600">{layer.description}</p>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {layer.components.map((component, idx) => (
                        <div key={idx} className="bg-blue-50 p-3 rounded-lg text-center border border-[#1E88E5]/20">
                          <span className="text-sm font-medium text-[#2C2C2E]">{component}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance & Scalability */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#2C2C2E] text-center mb-12">
            Performance & Scalability
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-[#2C2C2E] mb-4">High Performance</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Asset streaming & occlusion culling</li>
                <li>Edge caching of environment prefabs</li>
                <li>Optimized VR rendering pipeline</li>
                <li>Low-latency real-time processing</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-[#2C2C2E] mb-4">Auto-Scaling</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Kubernetes horizontal pod autoscaler</li>
                <li>CPU and memory-based scaling</li>
                <li>Load balancing across regions</li>
                <li>Circuit breakers for resilience</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold text-[#2C2C2E] mb-4">DevOps Excellence</h3>
              <ul className="text-gray-600 space-y-2">
                <li>GitHub Actions CI/CD pipeline</li>
                <li>Automated Unity builds & tests</li>
                <li>Helm chart deployments</li>
                <li>Container orchestration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-16 bg-[#2C2C2E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Cloud Infrastructure
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">☁️</div>
              <h4 className="font-bold mb-2">Azure Kubernetes</h4>
              <p className="text-white/80 text-sm">Container orchestration</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">🌐</div>
              <h4 className="font-bold mb-2">Global CDN</h4>
              <p className="text-white/80 text-sm">Asset distribution</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">🔒</div>
              <h4 className="font-bold mb-2">Security</h4>
              <p className="text-white/80 text-sm">End-to-end encryption</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="font-bold mb-2">Monitoring</h4>
              <p className="text-white/80 text-sm">Real-time analytics</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#1E88E5] to-[#FFD600]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Experience Our Technology
          </h2>
          <p className="text-xl text-white/90 mb-8">
            See how our advanced technology stack delivers unparalleled VR experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/features"
              className="bg-white text-[#1E88E5] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Features
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Technical Questions
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Technology;

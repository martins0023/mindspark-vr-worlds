
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Analytics = () => {
  const metrics = [
    { label: "Reaction Time", value: "245ms", change: "-12%", trend: "down" },
    { label: "Error Rate", value: "3.2%", change: "-8%", trend: "down" },
    { label: "Cognitive Load", value: "72%", change: "+5%", trend: "up" },
    { label: "Session Duration", value: "18min", change: "+15%", trend: "up" },
  ];

  const performanceData = [
    { week: "Week 1", memory: 65, attention: 70, reasoning: 60 },
    { week: "Week 2", memory: 72, attention: 75, reasoning: 68 },
    { week: "Week 3", memory: 78, attention: 82, reasoning: 75 },
    { week: "Week 4", memory: 85, attention: 88, reasoning: 82 },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-[#2C2C2E] mb-6">
              Performance <span className="text-[#1E88E5]">Analytics</span> Dashboard
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tracking and visualization of your cognitive performance metrics 
              across all training domains with real-time insights.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2C2C2E] mb-8">Current Performance Metrics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-600">{metric.label}</h3>
                  <span className={`text-sm font-medium ${
                    metric.trend === 'down' ? 'text-green-600' : 'text-blue-600'
                  }`}>
                    {metric.change}
                  </span>
                </div>
                <div className="text-3xl font-bold text-[#2C2C2E]">{metric.value}</div>
                <div className="mt-2">
                  <div className={`h-2 rounded-full ${
                    metric.trend === 'down' ? 'bg-green-100' : 'bg-blue-100'
                  }`}>
                    <div className={`h-2 rounded-full w-3/4 ${
                      metric.trend === 'down' ? 'bg-green-500' : 'bg-blue-500'
                    }`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Performance Chart */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-[#2C2C2E] mb-6">Performance Trends</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-4">Weekly Progress</h4>
                <div className="space-y-4">
                  {performanceData.map((data, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-600">{data.week}</span>
                        <span className="text-sm text-gray-500">Avg: {Math.round((data.memory + data.attention + data.reasoning) / 3)}%</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-blue-100 rounded">
                          <div 
                            className="bg-[#1E88E5] h-2 rounded text-xs text-center text-white leading-none"
                            style={{ width: `${data.memory}%` }}
                          ></div>
                          <span className="text-xs text-gray-600">Memory</span>
                        </div>
                        <div className="bg-yellow-100 rounded">
                          <div 
                            className="bg-[#FFD600] h-2 rounded text-xs text-center text-white leading-none"
                            style={{ width: `${data.attention}%` }}
                          ></div>
                          <span className="text-xs text-gray-600">Attention</span>
                        </div>
                        <div className="bg-green-100 rounded">
                          <div 
                            className="bg-green-500 h-2 rounded text-xs text-center text-white leading-none"
                            style={{ width: `${data.reasoning}%` }}
                          ></div>
                          <span className="text-xs text-gray-600">Reasoning</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-[#2C2C2E] mb-2">Memory Performance</h4>
                  <div className="text-3xl font-bold text-[#1E88E5] mb-2">85%</div>
                  <p className="text-gray-600 text-sm">+20% improvement this month</p>
                </div>
                
                <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-[#2C2C2E] mb-2">Attention Span</h4>
                  <div className="text-3xl font-bold text-[#FFD600] mb-2">88%</div>
                  <p className="text-gray-600 text-sm">+18% improvement this month</p>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-[#2C2C2E] mb-2">Reasoning</h4>
                  <div className="text-3xl font-bold text-green-600 mb-2">82%</div>
                  <p className="text-gray-600 text-sm">+22% improvement this month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Analytics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2C2C2E] mb-8 text-center">Detailed Analytics</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-[#2C2C2E] mb-4">Session Analysis</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-[#2C2C2E]">Spatial Navigation</h4>
                      <p className="text-gray-600 text-sm">Last completed: 2 hours ago</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-[#1E88E5]">94%</div>
                      <div className="text-sm text-gray-600">Accuracy</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-yellow-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-[#2C2C2E]">Memory Recall</h4>
                      <p className="text-gray-600 text-sm">Last completed: 5 hours ago</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-[#FFD600]">87%</div>
                      <div className="text-sm text-gray-600">Accuracy</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-[#2C2C2E]">Multitasking</h4>
                      <p className="text-gray-600 text-sm">Last completed: 1 day ago</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">79%</div>
                      <div className="text-sm text-gray-600">Accuracy</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-[#2C2C2E] mb-4">Biometric Integration</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-2xl mb-2">💓</div>
                    <div className="text-lg font-bold text-red-600">72 BPM</div>
                    <div className="text-sm text-gray-600">Avg Heart Rate</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl mb-2">🧠</div>
                    <div className="text-lg font-bold text-purple-600">Beta+</div>
                    <div className="text-sm text-gray-600">Brain State</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-[#2C2C2E] mb-4">Achievements</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">🏆</div>
                    <div>
                      <div className="font-semibold text-[#2C2C2E]">Speed Demon</div>
                      <div className="text-sm text-gray-600">Sub-200ms reactions</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">🎯</div>
                    <div>
                      <div className="font-semibold text-[#2C2C2E]">Perfect Memory</div>
                      <div className="text-sm text-gray-600">100% recall accuracy</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">⚡</div>
                    <div>
                      <div className="font-semibold text-[#2C2C2E]">Multitask Master</div>
                      <div className="text-sm text-gray-600">5 tasks simultaneously</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-[#2C2C2E] mb-4">Recommendations</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="font-semibold text-[#1E88E5] text-sm">Focus Area</div>
                    <div className="text-sm text-gray-700">Working memory exercises</div>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded-lg">
                    <div className="font-semibold text-[#FFD600] text-sm">Next Challenge</div>
                    <div className="text-sm text-gray-700">Advanced spatial reasoning</div>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="font-semibold text-green-600 text-sm">Optimal Time</div>
                    <div className="text-sm text-gray-700">Morning sessions (9-11 AM)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1E88E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Improve Your Performance?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Use these insights to optimize your cognitive training and reach new levels of mental agility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/features"
              className="bg-white text-[#1E88E5] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Training
            </Link>
            <Link
              to="/pricing"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Upgrade Analytics
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Analytics;

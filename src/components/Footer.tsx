
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#2C2C2E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-[#1E88E5] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">VR</span>
              </div>
              <span className="text-2xl font-bold">CogniVR</span>
            </div>
            <p className="text-gray-300 max-w-md">
              Step into tailored virtual worlds that sharpen your mind and boost mental agility. 
              Experience the future of cognitive enhancement.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-gray-300 hover:text-[#FFD600] transition-colors">Features</Link></li>
              <li><Link to="/technology" className="text-gray-300 hover:text-[#FFD600] transition-colors">Technology</Link></li>
              <li><Link to="/analytics" className="text-gray-300 hover:text-[#FFD600] transition-colors">Analytics</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-[#FFD600] transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-[#FFD600] transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#FFD600] transition-colors">Contact</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-[#FFD600] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#FFD600] transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">&copy; 2024 CogniVR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

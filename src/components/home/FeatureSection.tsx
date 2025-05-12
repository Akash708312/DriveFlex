
import { 
  MessageCircle, 
  Camera, 
  Globe, 
  Brain, 
  CalendarClock, 
  FileText, 
  Globe as GlobeIcon, 
  BellRing 
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <MessageCircle size={32} />,
    title: "Live Chat Support",
    description: "Connect with our support team instantly for any queries or assistance"
  },
  {
    icon: <Camera size={32} />,
    title: "Damage Reporting",
    description: "Upload pre/post rental photos to document vehicle condition"
  },
  {
    icon: <Globe size={32} />,
    title: "Multilingual Support",
    description: "Use our platform in multiple languages with multi-currency options"
  },
  {
    icon: <Brain size={32} />,
    title: "AI Car Recommendations",
    description: "Get personalized car suggestions based on your preferences and history"
  },
  {
    icon: <CalendarClock size={32} />,
    title: "Real-Time Availability",
    description: "Check vehicle availability with live updates and instant confirmation"
  },
  {
    icon: <FileText size={32} />,
    title: "Document Upload",
    description: "Securely upload license, ID proof, and other required documents"
  },
  {
    icon: <GlobeIcon size={32} />,
    title: "Vehicle Tracking",
    description: "Track your rented vehicle in real-time with GPS integration"
  },
  {
    icon: <BellRing size={32} />,
    title: "Push Notifications",
    description: "Receive timely updates about your booking, offers and more"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const FeatureSection = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Features</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience premium car rental with our cutting-edge features designed to make your journey seamless and enjoyable.
          </p>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors duration-300 border border-gray-700"
            >
              <div className="text-brand-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;

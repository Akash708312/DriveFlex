
import { MessageSquare, Camera, Globe, Lightbulb, RefreshCw, FileText, MapPin, Bell } from "lucide-react";

const AdvancedFeatures = () => {
  const features = [
    {
      icon: <MessageSquare className="w-6 h-6 text-brand-400" />,
      title: "Live Chat Support",
      description: "Get instant assistance with our 24/7 live chat support from our customer service representatives."
    },
    {
      icon: <Camera className="w-6 h-6 text-brand-400" />,
      title: "Damage Reporting",
      description: "Easily document pre/post rental vehicle condition with our in-app photo upload system."
    },
    {
      icon: <Globe className="w-6 h-6 text-brand-400" />,
      title: "Multilingual Support",
      description: "Browse and book in multiple languages and currencies for a seamless global experience."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-brand-400" />,
      title: "AI Recommendations",
      description: "Receive personalized vehicle suggestions based on your preferences and driving history."
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-brand-400" />,
      title: "Real-Time Updates",
      description: "Access live vehicle availability data and get instant booking confirmations."
    },
    {
      icon: <FileText className="w-6 h-6 text-brand-400" />,
      title: "Document Upload",
      description: "Securely submit driver's license and ID verification directly through our platform."
    },
    {
      icon: <MapPin className="w-6 h-6 text-brand-400" />,
      title: "Vehicle Tracking",
      description: "Follow your rental's location in real-time with our integrated GPS tracking system."
    },
    {
      icon: <Bell className="w-6 h-6 text-brand-400" />,
      title: "Push Notifications",
      description: "Receive timely alerts about booking status, special offers, and upcoming reservations."
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Advanced <span className="text-brand-400">Features</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Experience the future of car rental with our innovative technology and customer-focused solutions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-800 border border-gray-700 rounded-xl p-6 transition-all duration-300 hover:bg-gray-800/70 hover:border-brand-500/50 hover:-translate-y-1"
            >
              <div className="bg-gray-900/80 rounded-full p-3 inline-flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvancedFeatures;

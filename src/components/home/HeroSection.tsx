
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLeadForm } from "@/hooks/use-lead-form";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const { submitLead, isLoading } = useLeadForm("hero");
  const [showForm, setShowForm] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      const success = await submitLead({ email });
      if (success) {
        setEmail("");
        setShowForm(false);
      }
    }
  };
  
  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 min-h-[92vh] flex items-center">
      {/* Background overlay with pattern */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "30px 30px",
        }}
      ></div>
      
      <div className="container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center">
        {/* Hero Text Content */}
        <div className="w-full lg:w-1/2 text-white mb-10 lg:mb-0 animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Drive Your <span className="text-brand-400">Dream Car</span> Today
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
            Choose from our premium selection of vehicles, from luxury sports 
            cars to reliable SUVs, and hit the road with confidence.
          </p>
          
          {showForm ? (
            <form onSubmit={handleSubmit} className="mb-6 bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm border border-gray-700">
              <div className="mb-4">
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                />
              </div>
              <div className="flex gap-2">
                <Button 
                  type="submit" 
                  disabled={isLoading} 
                  className="bg-brand-600 hover:bg-brand-500 text-white"
                >
                  {isLoading ? "Sending..." : "Get Updates"}
                </Button>
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => setShowForm(false)}
                  className="border-gray-600 text-gray-300 hover:bg-gray-700"
                >
                  Cancel
                </Button>
              </div>
            </form>
          ) : (
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link to="/explore">
                <Button 
                  variant="outline"
                  className="border-brand-300 text-brand-400 hover:bg-brand-900/50 px-8 py-6 rounded-md text-lg font-medium"
                >
                  Browse Cars
                </Button>
              </Link>
              <Link to="/about">
                <Button 
                  variant="outline" 
                  className="border-brand-300 text-brand-400 hover:bg-brand-900/50 px-8 py-6 rounded-md text-lg font-medium"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          )}
          
          <Button 
            onClick={() => setShowForm(true)} 
            variant="link" 
            className="text-brand-300 hover:text-brand-200 pl-0"
            disabled={showForm}
          >
            Get email updates on new models →
          </Button>
        </div>
        
        {/* Hero Car Image */}
        <div className="w-full lg:w-1/2 animate-fade-in">
          <div className="relative">
            <div className="relative z-10 transform translate-y-0 hover:-translate-y-2 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1024" 
                alt="Luxury Car" 
                className="w-full h-auto rounded-lg shadow-2xl object-cover"
              />
            </div>
            <div className="absolute bottom-[-10px] inset-x-0 h-10 bg-gradient-to-t from-gray-900 to-transparent z-0"></div>
          </div>
        </div>
      </div>
      
      {/* Hero Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
          <path
            fill="#111827"
            fillOpacity="1"
            d="M0,96L48,85.3C96,75,192,53,288,64C384,75,480,117,576,117.3C672,117,768,75,864,64C960,53,1056,75,1152,90.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;

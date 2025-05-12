
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-brand-800 to-brand-600 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-[25%] -right-[10%] w-[40%] aspect-square rounded-full bg-brand-500/20 blur-3xl"></div>
        <div className="absolute -bottom-[25%] -left-[10%] w-[40%] aspect-square rounded-full bg-brand-400/20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-2/3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Ready to Experience <br className="hidden md:block" /> the Ultimate Driving Experience?
            </h2>
            <p className="text-xl text-brand-100 mb-8 max-w-2xl">
              Join thousands of satisfied customers who choose DriveFlex for quality vehicles, transparent pricing, and exceptional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/explore">
                <Button
                  size="lg"
                  className="bg-white text-brand-700 hover:bg-gray-100 px-8"
                >
                  Browse Vehicles
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/20 hover:text-white px-8"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="flex items-center">
                <div className="mr-3 bg-white/20 rounded-full p-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                </div>
                <span className="text-sm">100% Insured</span>
              </div>
              <div className="flex items-center">
                <div className="mr-3 bg-white/20 rounded-full p-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <span className="text-sm">24/7 Support</span>
              </div>
              <div className="flex items-center">
                <div className="mr-3 bg-white/20 rounded-full p-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                    ></path>
                  </svg>
                </div>
                <span className="text-sm">No Hidden Fees</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block lg:w-1/3 relative">
            <img
              src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=512&h=512&q=80"
              alt="Luxury Vehicle"
              className="w-full h-auto rounded-lg shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300"
            />
            <div className="absolute -bottom-4 -right-4 bg-white text-brand-700 rounded-lg p-4 shadow-lg transform rotate-3 hover:scale-105 transition-transform duration-300">
              <div className="text-sm font-semibold">Book Today</div>
              <div className="font-bold text-2xl">Save 15%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;


import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Sample car data
const sampleCars = [
  {
    id: 1,
    name: "Tesla Model 3",
    category: "Electric",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1024",
    price: 89,
    rating: 4.8,
    seats: 5,
    transmission: "Automatic",
    fuelType: "Electric",
  },
  {
    id: 2,
    name: "BMW X5",
    category: "SUV",
    image: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1024",
    price: 120,
    rating: 4.7,
    seats: 7,
    transmission: "Automatic",
    fuelType: "Hybrid",
  },
  {
    id: 3,
    name: "Mercedes C-Class",
    category: "Sedan",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1024",
    price: 110,
    rating: 4.9,
    seats: 5,
    transmission: "Automatic",
    fuelType: "Gasoline",
  },
  {
    id: 4,
    name: "Ford Mustang",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1581650107963-3e8c1f48241b?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1024",
    price: 150,
    rating: 4.9,
    seats: 4,
    transmission: "Manual",
    fuelType: "Gasoline",
  },
];

// Categories for filtering
const categories = ["All", "Electric", "SUV", "Sedan", "Sports"];

const FeaturedCars = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredCars, setFilteredCars] = useState(sampleCars);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Filter cars based on active category
    if (activeCategory === "All") {
      setFilteredCars(sampleCars);
    } else {
      setFilteredCars(sampleCars.filter(car => car.category === activeCategory));
    }
    
    // Simulate loading
    setTimeout(() => {
      setIsLoaded(true);
    }, 200);
  }, [activeCategory]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Vehicles</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our most popular rental cars, handpicked for quality, comfort, and performance.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-8">
          <div className="flex overflow-x-auto scrollbar-none space-x-2 p-2 rounded-full bg-white shadow-sm">
            {categories.map(category => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-brand-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Car Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCars.map((car, index) => (
            <div
              key={car.id}
              className={`transition-all duration-500 ease-in-out ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden bg-white card-hover">
                <div className="relative">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="h-48 w-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-brand-600 text-white px-2 py-1 rounded-md text-xs font-medium">
                    {car.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-lg">{car.name}</h3>
                    <span className="flex items-center text-yellow-500">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      {car.rating}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <svg
                        className="w-4 h-4 mr-1 text-brand-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        ></path>
                      </svg>
                      {car.seats} Seats
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg
                        className="w-4 h-4 mr-1 text-brand-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                        ></path>
                      </svg>
                      {car.transmission}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg
                        className="w-4 h-4 mr-1 text-brand-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        ></path>
                      </svg>
                      {car.fuelType}
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xl font-bold">
                      ${car.price}
                      <span className="text-gray-500 text-sm font-normal">/day</span>
                    </span>
                    <Link to={`/vehicle/${car.id}`}>
                      <Button size="sm" className="bg-brand-600 hover:bg-brand-700">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/explore">
            <Button
              variant="outline"
              className="border-brand-600 text-brand-600 hover:bg-brand-50"
              size="lg"
            >
              View All Vehicles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;

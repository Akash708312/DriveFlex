
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample car data
const sampleCars = [
  {
    id: "1",
    name: "Tesla Model 3",
    category: "Electric",
    images: [
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1024",
      "https://images.unsplash.com/photo-1554744512-d6c603f27c54?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1024",
      "https://images.unsplash.com/photo-1619201814043-487ad5f9c31e?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1024",
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1024",
    ],
    price: 89,
    rating: 4.8,
    seats: 5,
    transmission: "Automatic",
    fuelType: "Electric",
    location: "San Francisco",
    year: 2023,
    brand: "Tesla",
    featured: true,
    description: "The Tesla Model 3 is an electric four-door sedan developed by Tesla. The Model 3 Standard Range Plus version delivers an EPA-rated all-electric range of 263 miles (423 km) and the Long Range versions deliver 353 miles (568 km).",
    features: [
      "Autopilot",
      "15\" Touchscreen Display",
      "Wireless Phone Charging",
      "Premium Audio System",
      "Glass Roof",
      "Vegan Leather Seats",
      "Supercharging capability",
      "360° Cameras",
    ],
    specifications: {
      engine: "Electric Dual Motor",
      power: "283 kW (380 hp)",
      acceleration: "3.1 sec 0-60 mph",
      range: "358 miles",
      topSpeed: "162 mph",
      dimensions: "184.8\" L x 72.8\" W x 56.8\" H",
      weight: "4,048 lbs",
    },
    reviews: [
      {
        id: 1,
        user: "John D.",
        date: "October 12, 2023",
        rating: 5,
        comment: "Amazing car! The acceleration is unbelievable and the tech features are top-notch. I'm never going back to gas cars.",
      },
      {
        id: 2,
        user: "Sarah L.",
        date: "September 3, 2023",
        rating: 4,
        comment: "Great experience overall. The car is fun to drive and very comfortable. Charging network is extensive making road trips easy.",
      },
      {
        id: 3,
        user: "Mike R.",
        date: "August 15, 2023",
        rating: 5,
        comment: "Best car I've ever driven! The autopilot feature makes long drives much less tiring. Highly recommended.",
      },
    ],
  },
  {
    id: "2",
    name: "BMW X5",
    category: "SUV",
    images: [
      "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1024",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1024",
      "https://images.unsplash.com/photo-1549399542-7e38e2835e18?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1024",
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1024",
    ],
    price: 120,
    rating: 4.7,
    seats: 7,
    transmission: "Automatic",
    fuelType: "Hybrid",
    location: "Los Angeles",
    year: 2022,
    brand: "BMW",
    featured: false,
    description: "The BMW X5 combines extraordinary power with luxury features. This hybrid version offers excellent fuel economy without sacrificing performance.",
    features: [
      "Panoramic Sunroof",
      "12.3\" Digital Instrument Cluster",
      "Harman Kardon Sound System",
      "Heated & Ventilated Seats",
      "4-Zone Climate Control",
      "Wireless Apple CarPlay",
      "Head-Up Display",
      "Ambient Lighting",
    ],
    specifications: {
      engine: "3.0L Turbo Inline-6 + Electric Motor",
      power: "389 hp Combined",
      acceleration: "5.3 sec 0-60 mph",
      range: "400 miles total (30 electric)",
      topSpeed: "146 mph",
      dimensions: "194.3\" L x 78.9\" W x 69.0\" H",
      weight: "5,672 lbs",
    },
    reviews: [
      {
        id: 1,
        user: "Rebecca T.",
        date: "October 5, 2023",
        rating: 5,
        comment: "Absolutely love this SUV! Comfortable ride, plenty of room for the family, and surprisingly good on fuel for its size.",
      },
      {
        id: 2,
        user: "Daniel K.",
        date: "September 22, 2023",
        rating: 4,
        comment: "Great luxury SUV with all the bells and whistles. The hybrid system works seemlessly. Only complaint is the infotainment system can be a bit complex.",
      },
    ],
  },
];

const VehicleDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState("");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simulate API call
    setTimeout(() => {
      const foundCar = sampleCars.find(c => c.id === id);
      if (foundCar) {
        setCar(foundCar);
        setMainImage(foundCar.images[0]);
      }
      setLoading(false);
    }, 300);
  }, [id]);
  
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[70vh]">
        <div className="animate-pulse text-gray-600">Loading vehicle details...</div>
      </div>
    );
  }
  
  if (!car) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Vehicle Not Found</h1>
          <p className="text-gray-600 mb-6">
            Sorry, we couldn't find the vehicle you're looking for.
          </p>
          <Link to="/explore">
            <Button className="bg-brand-600 hover:bg-brand-700">View All Vehicles</Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Vehicle Title Section */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">{car.name}</h1>
            <div className="flex items-center text-gray-600">
              <span className="flex items-center mr-4">
                <svg
                  className="w-5 h-5 mr-1 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                {car.rating} ({car.reviews.length} reviews)
              </span>
              <span className="mr-4">•</span>
              <span>{car.location}</span>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="text-2xl font-bold mb-1 text-brand-600">
              ${car.price}
              <span className="text-sm text-gray-600 font-normal">/day</span>
            </div>
            <div className="text-sm text-gray-600">Free cancellation</div>
          </div>
        </div>

        {/* Vehicle Image Gallery and Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {/* Image Gallery */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-80 md:h-96 overflow-hidden">
                <img 
                  src={mainImage} 
                  alt={car.name} 
                  className="w-full h-full object-cover object-center transition-all duration-500 hover:scale-105"
                />
              </div>
              <div className="flex overflow-x-auto p-4 space-x-3 scrollbar-none">
                {car.images.map((image: string, index: number) => (
                  <div 
                    key={index} 
                    className={`w-24 h-16 flex-shrink-0 rounded-md overflow-hidden cursor-pointer transition duration-200 
                      ${mainImage === image ? 'ring-2 ring-brand-600' : 'hover:opacity-80'}`}
                    onClick={() => setMainImage(image)}
                  >
                    <img 
                      src={image} 
                      alt={`${car.name} view ${index + 1}`} 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-1">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Book this vehicle</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Pick-up Date</label>
                  <input 
                    type="date" 
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Drop-off Date</label>
                  <input 
                    type="date" 
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
                    value={dropoff}
                    onChange={(e) => setDropoff(e.target.value)}
                    min={pickup || new Date().toISOString().split('T')[0]}
                  />
                </div>
                
                <Separator className="my-2" />
                
                <div className="flex justify-between text-sm">
                  <span>Daily rate</span>
                  <span>${car.price}/day</span>
                </div>
                
                {pickup && dropoff && (
                  <>
                    <div className="flex justify-between text-sm">
                      <span>Duration</span>
                      <span>
                        {Math.ceil(
                          (new Date(dropoff).getTime() - new Date(pickup).getTime()) / 
                          (1000 * 60 * 60 * 24)
                        )} days
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Rental fee</span>
                      <span>
                        $
                        {car.price * 
                          Math.ceil(
                            (new Date(dropoff).getTime() - new Date(pickup).getTime()) / 
                            (1000 * 60 * 60 * 24)
                          )
                        }
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Insurance</span>
                      <span>$29</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>
                        $
                        {29 + car.price * 
                          Math.ceil(
                            (new Date(dropoff).getTime() - new Date(pickup).getTime()) / 
                            (1000 * 60 * 60 * 24)
                          )
                        }
                      </span>
                    </div>
                  </>
                )}
                
                <Button 
                  className="w-full bg-brand-600 hover:bg-brand-700"
                  disabled={!pickup || !dropoff}
                >
                  Reserve Now
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  No charge until pickup. Free cancellation.
                </p>
              </div>
            </Card>
            
            {/* Vehicle Quick Info */}
            <Card className="p-6 mt-6">
              <h3 className="text-lg font-bold mb-4">Vehicle Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-brand-600"
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
                  <span className="text-sm">Year: {car.year}</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-brand-600"
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
                  <span className="text-sm">Seats: {car.seats}</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-brand-600"
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
                  <span className="text-sm">Fuel: {car.fuelType}</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-brand-600"
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
                  <span className="text-sm">Trans: {car.transmission}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Vehicle Details Tabs */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-10">
          <Tabs defaultValue="about">
            <TabsList className="mb-6">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="about" className="space-y-4">
              <h3 className="text-xl font-bold">Description</h3>
              <p className="text-gray-700">{car.description}</p>
            </TabsContent>
            
            <TabsContent value="features" className="space-y-4">
              <h3 className="text-xl font-bold">Vehicle Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {car.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-brand-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="specifications" className="space-y-4">
              <h3 className="text-xl font-bold">Technical Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {Object.entries(car.specifications).map(([key, value]: [string, any], index: number) => (
                  <div key={index} className="flex flex-col">
                    <span className="text-sm text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Customer Reviews</h3>
                <div className="flex items-center">
                  <span className="text-yellow-500 font-bold mr-2">{car.rating}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(car.rating) ? 'text-yellow-500' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-600 ml-2">({car.reviews.length} reviews)</span>
                </div>
              </div>
              
              {car.reviews.map((review: any) => (
                <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                  <div className="flex justify-between mb-2">
                    <span className="font-bold">{review.user}</span>
                    <span className="text-gray-500 text-sm">{review.date}</span>
                  </div>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating ? 'text-yellow-500' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
              
              {/* Write Review Button */}
              <div className="text-center mt-6">
                <Button variant="outline" className="border-brand-600 text-brand-600 hover:bg-brand-50">
                  Write a Review
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Similar Vehicles */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-6">Similar Vehicles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleCars
              .filter((c) => c.id !== id && c.category === car.category)
              .map((car) => (
                <Card key={car.id} className="hover:shadow-lg transition-shadow overflow-hidden bg-white card-hover">
                  <div className="relative">
                    <img
                      src={car.images[0]}
                      alt={car.name}
                      className="h-48 w-full object-cover"
                    />
                    <span className="absolute top-4 right-4 bg-white text-gray-800 px-2 py-1 rounded-md text-xs font-medium shadow">
                      {car.location}
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
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetail;

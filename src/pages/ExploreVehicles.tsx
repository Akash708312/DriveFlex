
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useIsMobile } from "@/hooks/use-mobile";

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
    location: "San Francisco",
    year: 2023,
    brand: "Tesla",
    featured: true,
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
    location: "Los Angeles",
    year: 2022,
    brand: "BMW",
    featured: false,
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
    location: "New York",
    year: 2023,
    brand: "Mercedes",
    featured: true,
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
    location: "Miami",
    year: 2022,
    brand: "Ford",
    featured: true,
  },
  {
    id: 5,
    name: "Toyota RAV4",
    category: "SUV",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1024",
    price: 75,
    rating: 4.6,
    seats: 5,
    transmission: "Automatic",
    fuelType: "Hybrid",
    location: "Chicago",
    year: 2021,
    brand: "Toyota",
    featured: false,
  },
  {
    id: 6,
    name: "Audi A4",
    category: "Sedan",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1024",
    price: 95,
    rating: 4.8,
    seats: 5,
    transmission: "Automatic",
    fuelType: "Gasoline",
    location: "Seattle",
    year: 2022,
    brand: "Audi",
    featured: false,
  },
  {
    id: 7,
    name: "Porsche 911",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1024",
    price: 250,
    rating: 5.0,
    seats: 2,
    transmission: "Automatic",
    fuelType: "Gasoline",
    location: "Las Vegas",
    year: 2023,
    brand: "Porsche",
    featured: true,
  },
  {
    id: 8,
    name: "Honda CR-V",
    category: "SUV",
    image: "https://images.unsplash.com/photo-1568844293986-ca9306d5d725?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1024",
    price: 65,
    rating: 4.5,
    seats: 5,
    transmission: "Automatic",
    fuelType: "Gasoline",
    location: "Boston",
    year: 2021,
    brand: "Honda",
    featured: false,
  },
];

// Filter options
const brands = ["All", "Audi", "BMW", "Ford", "Honda", "Mercedes", "Porsche", "Tesla", "Toyota"];
const fuelTypes = ["All", "Electric", "Gasoline", "Hybrid"];
const transmissions = ["All", "Automatic", "Manual"];
const seatingOptions = ["All", "2", "4", "5", "7"];
const locations = ["All", "San Francisco", "Los Angeles", "New York", "Miami", "Chicago", "Seattle", "Las Vegas", "Boston"];

const ExploreVehicles = () => {
  const isMobile = useIsMobile();
  const [isFilterOpen, setIsFilterOpen] = useState(!isMobile);
  const [filteredCars, setFilteredCars] = useState(sampleCars);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Filter states
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedFuelType, setSelectedFuelType] = useState("All");
  const [selectedTransmission, setSelectedTransmission] = useState("All");
  const [selectedSeating, setSelectedSeating] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const [sortOrder, setSortOrder] = useState("price-asc");

  // Apply filters
  useEffect(() => {
    let result = sampleCars.filter((car) => {
      // Price filter
      if (car.price < priceRange[0] || car.price > priceRange[1]) return false;
      
      // Brand filter
      if (selectedBrand !== "All" && car.brand !== selectedBrand) return false;
      
      // Fuel type filter
      if (selectedFuelType !== "All" && car.fuelType !== selectedFuelType) return false;
      
      // Transmission filter
      if (selectedTransmission !== "All" && car.transmission !== selectedTransmission) return false;
      
      // Seating filter
      if (selectedSeating !== "All" && car.seats !== Number(selectedSeating)) return false;
      
      // Location filter
      if (selectedLocation !== "All" && car.location !== selectedLocation) return false;
      
      // Featured filter
      if (featuredOnly && !car.featured) return false;
      
      // Search filter
      if (
        searchTerm &&
        !car.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !car.category.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !car.brand.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !car.location.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return false;
      }
      
      return true;
    });
    
    // Apply sorting
    result = result.sort((a, b) => {
      switch (sortOrder) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });
    
    setFilteredCars(result);
    
    // Simulate loading effect
    setTimeout(() => setIsLoaded(true), 200);
  }, [priceRange, selectedBrand, selectedFuelType, selectedTransmission, selectedSeating, selectedLocation, featuredOnly, searchTerm, sortOrder]);
  
  // Reset filters
  const resetFilters = () => {
    setPriceRange([0, 300]);
    setSelectedBrand("All");
    setSelectedFuelType("All");
    setSelectedTransmission("All");
    setSelectedSeating("All");
    setSelectedLocation("All");
    setFeaturedOnly(false);
    setSearchTerm("");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Explore Vehicles</h1>
          <p className="text-gray-600">
            Find the perfect vehicle for your needs from our premium selection.
          </p>
        </div>
        
        {/* Search and Sort Controls */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search by name, brand, location..."
              className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute left-3 top-2.5 text-gray-400">
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </div>
          
          <div className="flex gap-3">
            <Select value={sortOrder} onValueChange={(val) => setSortOrder(val)}>
              <SelectTrigger className="w-[180px] bg-white">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="rating">Top Rated</SelectItem>
                <SelectItem value="name">Name</SelectItem>
              </SelectContent>
            </Select>
            
            <Button
              variant="outline"
              className="border-gray-300 lg:hidden"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 4a1 1 0 011-1h16a1 1 0 010 2H4a1 1 0 01-1-1zm0 8a1 1 0 011-1h16a1 1 0 010 2H4a1 1 0 01-1-1zm0 8a1 1 0 011-1h16a1 1 0 010 2H4a1 1 0 01-1-1z"
                ></path>
              </svg>
              Filters
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          {isFilterOpen && (
            <div className="lg:w-1/4 bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Filters</h3>
                <button
                  onClick={resetFilters}
                  className="text-sm text-brand-600 hover:text-brand-700 hover:underline"
                >
                  Reset All
                </button>
              </div>
              
              {/* Price Range Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-2">Price Range</h4>
                <div className="px-2">
                  <Slider
                    defaultValue={priceRange}
                    min={0}
                    max={300}
                    step={10}
                    value={priceRange}
                    onValueChange={(value) => setPriceRange(value as [number, number])}
                    className="my-6"
                  />
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">${priceRange[0]}/day</span>
                    <span className="text-sm text-gray-600">${priceRange[1]}/day</span>
                  </div>
                </div>
              </div>
              
              {/* Brand Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-2">Brand</h4>
                <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Brand" />
                  </SelectTrigger>
                  <SelectContent>
                    {brands.map((brand) => (
                      <SelectItem key={brand} value={brand}>
                        {brand}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Fuel Type Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-2">Fuel Type</h4>
                <Select value={selectedFuelType} onValueChange={setSelectedFuelType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Fuel Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {fuelTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Transmission Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-2">Transmission</h4>
                <Select value={selectedTransmission} onValueChange={setSelectedTransmission}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Transmission" />
                  </SelectTrigger>
                  <SelectContent>
                    {transmissions.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Seating Capacity Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-2">Seating Capacity</h4>
                <Select value={selectedSeating} onValueChange={setSelectedSeating}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Seating" />
                  </SelectTrigger>
                  <SelectContent>
                    {seatingOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option === "All" ? option : `${option} Seats`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Location Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-2">Location</h4>
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Featured Filter */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="featured"
                  checked={featuredOnly}
                  onCheckedChange={(checked) => setFeaturedOnly(!!checked)}
                />
                <label
                  htmlFor="featured"
                  className="text-sm font-medium leading-none cursor-pointer"
                >
                  Featured Vehicles Only
                </label>
              </div>
            </div>
          )}
          
          {/* Car Grid */}
          <div className="flex-1">
            <div className="mb-4">
              <p className="text-gray-600">
                Showing <span className="font-medium">{filteredCars.length}</span> results
              </p>
            </div>
            
            {filteredCars.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
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
                        {car.featured && (
                          <span className="absolute top-4 left-4 bg-brand-600 text-white px-2 py-1 rounded-md text-xs font-medium">
                            Featured
                          </span>
                        )}
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
                        
                        <div className="text-sm text-gray-500 mb-3">
                          {car.year} • {car.category}
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
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="flex justify-center mb-4">
                  <svg
                    className="w-16 h-16 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">No vehicles found</h3>
                <p className="text-gray-600 mb-6">
                  No vehicles match your current filter criteria. Try adjusting your filters.
                </p>
                <Button onClick={resetFilters} className="bg-brand-600 hover:bg-brand-700">
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreVehicles;

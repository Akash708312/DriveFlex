
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

const Checkout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Booking details (normally would come from previous page or context/state)
  const [booking, setBooking] = useState({
    carId: "1",
    carName: "Tesla Model 3",
    carImage: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1024",
    pickupDate: "2025-05-15",
    dropoffDate: "2025-05-18",
    pickupLocation: "San Francisco Downtown",
    dropoffLocation: "San Francisco Downtown",
    dailyRate: 89,
    days: 3,
    rentalFee: 267,
    insurance: 29,
    serviceFee: 15,
    taxes: 31,
    total: 342,
  });
  
  // Payment form state
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVC, setCardCVC] = useState("");
  const [billingZip, setBillingZip] = useState("");
  
  // Booking flow state
  const [isProcessing, setIsProcessing] = useState(false);
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsBookingConfirmed(true);
      toast({
        title: "Payment Successful",
        description: "Your booking has been confirmed!",
      });
      
      // Scroll to confirmation section
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 1500);
  };
  
  // Format card number with spaces
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  };
  
  // Format card expiry date
  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (v.length > 2) {
      return v.slice(0, 2) + "/" + v.slice(2, 4);
    }
    return v;
  };
  
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {isBookingConfirmed ? (
          /* Booking Confirmation */
          <div className="animate-fade-in">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
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
              </div>
              <h1 className="text-3xl font-bold mb-2">Booking Confirmed!</h1>
              <p className="text-gray-600">
                Your reservation has been successfully processed.
                Check your email for booking details.
              </p>
            </div>
            
            <Card className="p-6 mb-8">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 mb-6 md:mb-0 pr-0 md:pr-6">
                  <img
                    src={booking.carImage}
                    alt={booking.carName}
                    className="w-full h-48 object-cover rounded-md"
                  />
                </div>
                
                <div className="md:w-2/3">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-xl font-bold">{booking.carName}</h2>
                      <p className="text-gray-600">Booking #DRF-{Math.floor(Math.random() * 10000)}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-bold">${booking.total}</span>
                      <p className="text-sm text-gray-600">Total Paid</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 mb-1">PICK-UP</h3>
                      <p className="font-medium mb-1">{booking.pickupLocation}</p>
                      <p className="text-gray-700">
                        {new Date(booking.pickupDate).toLocaleDateString('en-US', {
                          weekday: 'short', 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                        {' at '}
                        10:00 AM
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 mb-1">DROP-OFF</h3>
                      <p className="font-medium mb-1">{booking.dropoffLocation}</p>
                      <p className="text-gray-700">
                        {new Date(booking.dropoffDate).toLocaleDateString('en-US', {
                          weekday: 'short', 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                        {' at '}
                        10:00 AM
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h3 className="font-semibold mb-2">What's Next?</h3>
                    <ol className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="bg-gray-100 text-gray-700 font-semibold w-6 h-6 rounded-full flex items-center justify-center mr-2 flex-shrink-0">1</span>
                        <span>Check your email for a detailed confirmation.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-gray-100 text-gray-700 font-semibold w-6 h-6 rounded-full flex items-center justify-center mr-2 flex-shrink-0">2</span>
                        <span>Arrive at the pick-up location with your driver's license and credit card.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-gray-100 text-gray-700 font-semibold w-6 h-6 rounded-full flex items-center justify-center mr-2 flex-shrink-0">3</span>
                        <span>Enjoy your ride with DriveFlex!</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </Card>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/explore">
                <Button variant="outline" className="w-full sm:w-auto">
                  Browse More Cars
                </Button>
              </Link>
              <Link to="/">
                <Button className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700">
                  Return to Home
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          /* Checkout Form */
          <>
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Complete Your Booking</h1>
              <p className="text-gray-600">
                You're just a few steps away from confirming your rental
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Payment Form */}
              <div className="lg:w-2/3">
                <Card className="p-6 mb-6">
                  <h2 className="text-xl font-bold mb-6">Selected Vehicle</h2>
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-1/3 mb-4 sm:mb-0 sm:pr-4">
                      <img
                        src={booking.carImage}
                        alt={booking.carName}
                        className="w-full h-40 object-cover rounded-md"
                      />
                    </div>
                    <div className="sm:w-2/3">
                      <h3 className="font-bold text-lg mb-2">{booking.carName}</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">PICK-UP</h4>
                          <p className="font-medium">{booking.pickupLocation}</p>
                          <p className="text-sm">{booking.pickupDate}, 10:00 AM</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">DROP-OFF</h4>
                          <p className="font-medium">{booking.dropoffLocation}</p>
                          <p className="text-sm">{booking.dropoffDate}, 10:00 AM</p>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="flex justify-between">
                          <span>Rental Duration:</span>
                          <span>{booking.days} days</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <h2 className="text-xl font-bold mb-6">Payment Information</h2>
                  
                  <div className="mb-6">
                    <div className="flex space-x-4">
                      <div 
                        className={`flex-1 border rounded-md p-4 cursor-pointer ${
                          paymentMethod === "card" 
                            ? "border-brand-600 bg-brand-50" 
                            : "border-gray-300"
                        }`}
                        onClick={() => setPaymentMethod("card")}
                      >
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="credit-card"
                            name="payment-method"
                            value="card"
                            checked={paymentMethod === "card"}
                            onChange={() => setPaymentMethod("card")}
                            className="mr-2 text-brand-600"
                          />
                          <label htmlFor="credit-card" className="flex items-center cursor-pointer">
                            <svg
                              className="w-6 h-6 mr-2"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x="2"
                                y="5"
                                width="20"
                                height="14"
                                rx="2"
                                stroke="currentColor"
                                strokeWidth="2"
                              />
                              <path
                                d="M2 10H22"
                                stroke="currentColor"
                                strokeWidth="2"
                              />
                            </svg>
                            Credit Card
                          </label>
                        </div>
                      </div>
                      
                      <div 
                        className={`flex-1 border rounded-md p-4 cursor-pointer ${
                          paymentMethod === "paypal" 
                            ? "border-brand-600 bg-brand-50" 
                            : "border-gray-300"
                        }`}
                        onClick={() => setPaymentMethod("paypal")}
                      >
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="paypal"
                            name="payment-method"
                            value="paypal"
                            checked={paymentMethod === "paypal"}
                            onChange={() => setPaymentMethod("paypal")}
                            className="mr-2 text-brand-600"
                          />
                          <label htmlFor="paypal" className="flex items-center cursor-pointer">
                            <svg
                              className="w-6 h-6 mr-2 text-blue-800"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.172 19.258L9.172 19.258V19.258H9.172ZM19.145 10.545C19.827 7.981 19.101 6.206 17.152 5.082C15.205 3.959 12.189 3.935 10.242 5.051C8.294 6.166 7.175 8.555 6.493 11.119L6.493 11.119L4.343 19.401C4.335 19.435 4.333 19.47 4.336 19.505C4.339 19.539 4.348 19.573 4.362 19.604C4.376 19.636 4.396 19.665 4.419 19.69C4.442 19.715 4.469 19.736 4.499 19.752C4.529 19.768 4.562 19.779 4.597 19.784C4.631 19.789 4.666 19.788 4.7 19.783C4.734 19.777 4.766 19.766 4.796 19.75C4.825 19.734 4.851 19.713 4.872 19.689L4.872 19.688L4.874 19.686L5.201 19.344L5.201 19.344C5.415 19.119 5.649 18.913 5.899 18.727C6.429 18.333 7.065 18.111 7.725 18.094H9.059C9.782 18.088 10.492 17.892 11.114 17.526C11.736 17.16 12.248 16.636 12.6 16.007C12.952 15.378 13.132 14.668 13.122 13.946C13.113 13.223 12.914 12.519 12.546 11.9C13.046 11.742 13.514 11.499 13.929 11.183C14.586 10.702 15.122 10.073 15.496 9.351C15.871 8.63 16.074 7.836 16.090 7.029C16.107 6.222 15.936 5.422 15.592 4.686C17.124 5.571 18.463 7.11 19.145 10.545ZM7.593 16.094L7.593 16.094C7.165 16.105 6.747 16.234 6.385 16.467C6.024 16.7 5.733 17.028 5.546 17.412C5.546 17.412 5.546 17.412 5.546 17.412L4.903 18.503L6.493 11.119C7.175 8.555 8.294 6.166 10.242 5.051C12.189 3.936 15.205 3.959 17.152 5.083C17.483 5.297 17.771 5.553 18.024 5.835C17.7 6.059 17.347 6.24 16.975 6.371C16.489 6.516 15.981 6.588 15.471 6.585C14.77 6.582 14.078 6.429 13.441 6.136C12.804 5.843 12.237 5.416 11.779 4.883C11.754 4.854 11.724 4.83 11.69 4.812C11.656 4.794 11.618 4.783 11.58 4.778C11.541 4.774 11.502 4.777 11.465 4.787C11.428 4.797 11.394 4.814 11.364 4.837C11.335 4.86 11.311 4.889 11.294 4.922C11.276 4.955 11.266 4.992 11.262 5.03C11.258 5.069 11.261 5.108 11.271 5.145C11.28 5.182 11.297 5.217 11.32 5.247C11.857 5.878 12.526 6.381 13.28 6.72C14.034 7.058 14.853 7.222 15.679 7.201C16.114 7.189 16.545 7.121 16.962 7C17.452 6.877 17.915 6.669 18.333 6.386C18.402 6.621 18.454 6.86 18.489 7.101C18.513 7.867 18.351 8.628 18.017 9.319C17.684 10.01 17.191 10.611 16.582 11.068L16.582 11.068C15.872 11.583 15.022 11.867 14.144 11.88H13.097C13.058 11.88 13.02 11.886 12.983 11.899C12.947 11.912 12.913 11.931 12.884 11.956C12.855 11.98 12.831 12.01 12.814 12.044C12.796 12.078 12.786 12.115 12.783 12.154C12.78 12.192 12.784 12.231 12.795 12.268C12.807 12.305 12.825 12.339 12.848 12.369C12.872 12.398 12.901 12.424 12.934 12.443C12.967 12.462 13.003 12.474 13.041 12.48H14.088C14.796 12.474 15.489 12.679 16.079 13.067C16.67 13.455 17.132 14.007 17.409 14.654C17.685 15.301 17.764 16.013 17.635 16.704C17.506 17.396 17.175 18.036 16.684 18.55C16.684 18.55 16.684 18.55 16.684 18.55C16.297 18.947 15.831 19.26 15.317 19.464C14.803 19.669 14.252 19.761 13.7 19.733H7.593C7.593 16.094 7.593 16.094 7.593 16.094ZM12.097 16.78L12.097 16.78C11.808 17.203 11.417 17.549 10.963 17.786C10.508 18.022 10.004 18.141 9.494 18.133H7.725C7.725 18.133 7.725 18.133 7.725 18.133C7.727 17.659 7.888 17.2 8.18 16.831C8.472 16.461 8.879 16.2 9.336 16.095L9.336 16.095L9.34 16.094H11.108C11.383 16.092 11.655 16.142 11.908 16.241C12.162 16.341 12.391 16.488 12.583 16.674C12.476 16.73 12.363 16.773 12.247 16.802C12.131 16.831 12.007 16.845 11.885 16.845C11.762 16.845 11.639 16.831 11.522 16.802C11.406 16.773 11.293 16.73 11.186 16.674C11.155 16.659 11.121 16.65 11.087 16.648C11.052 16.646 11.017 16.651 10.984 16.663C10.952 16.675 10.921 16.692 10.896 16.715C10.87 16.738 10.85 16.766 10.835 16.798C10.821 16.83 10.813 16.864 10.812 16.899C10.811 16.934 10.817 16.968 10.829 17.001C10.842 17.033 10.861 17.063 10.884 17.088C10.908 17.113 10.937 17.132 10.969 17.146C11.229 17.271 11.512 17.343 11.799 17.358C12.087 17.373 12.376 17.332 12.648 17.234C12.49 17.088 12.348 16.928 12.224 16.755L12.223 16.755C12.188 16.699 12.15 16.646 12.097 16.78Z" />
                            </svg>
                            PayPal
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Card Payment Form */}
                  {paymentMethod === "card" && (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="card-name">Cardholder Name</Label>
                        <Input
                          id="card-name"
                          placeholder="John Doe"
                          value={cardName}
                          onChange={(e) => setCardName(e.target.value)}
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="card-number">Card Number</Label>
                        <Input
                          id="card-number"
                          placeholder="1234 5678 9012 3456"
                          value={cardNumber}
                          onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                          maxLength={19}
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="card-expiry">Expiry Date</Label>
                          <Input
                            id="card-expiry"
                            placeholder="MM/YY"
                            value={cardExpiry}
                            onChange={(e) => setCardExpiry(formatExpiryDate(e.target.value))}
                            maxLength={5}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="card-cvc">CVC</Label>
                          <Input
                            id="card-cvc"
                            placeholder="123"
                            value={cardCVC}
                            onChange={(e) => setCardCVC(e.target.value.replace(/\D/g, "").slice(0, 3))}
                            maxLength={3}
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="billing-zip">Billing ZIP Code</Label>
                        <Input
                          id="billing-zip"
                          placeholder="12345"
                          value={billingZip}
                          onChange={(e) => setBillingZip(e.target.value.replace(/\D/g, "").slice(0, 5))}
                          maxLength={5}
                          required
                        />
                      </div>
                      
                      <Button
                        type="submit"
                        className="w-full bg-brand-600 hover:bg-brand-700"
                        disabled={isProcessing}
                      >
                        {isProcessing ? (
                          <div className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Processing...
                          </div>
                        ) : (
                          `Pay $${booking.total} and Confirm`
                        )}
                      </Button>
                    </form>
                  )}
                  
                  {/* PayPal Payment */}
                  {paymentMethod === "paypal" && (
                    <div className="space-y-6">
                      <p className="text-gray-600">
                        You'll be redirected to PayPal to complete your payment securely.
                      </p>
                      
                      <Button
                        onClick={handleSubmit}
                        className="w-full bg-blue-600 hover:bg-blue-700"
                        disabled={isProcessing}
                      >
                        {isProcessing ? (
                          <div className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Redirecting to PayPal...
                          </div>
                        ) : (
                          `Proceed with PayPal ($${booking.total})`
                        )}
                      </Button>
                    </div>
                  )}
                </Card>
              </div>
              
              {/* Order Summary */}
              <div className="lg:w-1/3">
                <Card className="p-6 sticky top-20">
                  <h2 className="text-xl font-bold mb-6">Booking Summary</h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Car Rental ({booking.days} days @ ${booking.dailyRate}/day)</span>
                      <span>${booking.rentalFee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Insurance</span>
                      <span>${booking.insurance}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Service Fee</span>
                      <span>${booking.serviceFee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taxes</span>
                      <span>${booking.taxes}</span>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>${booking.total}</span>
                    </div>
                    
                    <div className="pt-4">
                      <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
                        <h3 className="font-medium mb-2">Cancellation Policy</h3>
                        <p className="text-sm text-gray-600">
                          Free cancellation up to 48 hours before scheduled pick-up.
                          Cancellations within 48 hours may be subject to a fee.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <svg 
                        className="w-5 h-5 text-green-600 mr-2" 
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
                      <span className="text-sm">Secure Payment</span>
                    </div>
                    <div className="flex items-center">
                      <svg 
                        className="w-5 h-5 text-green-600 mr-2" 
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
                      <span className="text-sm">Instant Confirmation</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;

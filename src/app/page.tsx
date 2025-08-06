import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-serif text-foreground leading-tight">
                Premium Honey & Dry Fruits
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Experience the authentic taste of nature's finest treasures, sourced from the most pristine regions and delivered across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Shop Now
                </Button>
                <Button size="lg" variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-background">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Hero Graphic */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-64 h-64 lg:w-80 lg:h-80 bg-secondary rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 lg:w-64 lg:h-64 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-24 h-24 lg:w-32 lg:h-32 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="bg-accent border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-center space-x-3 text-foreground">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-14 0a2 2 0 012-2h14a2 2 0 012 2" />
            </svg>
            <div className="text-center">
              <p className="font-medium">Free delivery on orders above ₹1000</p>
              <p className="text-sm">Minimum order value ₹100</p>
            </div>
          </div>
        </div>
      </section>


      {/* Products Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif text-foreground mb-4">
              Our Premium Products
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover our selection of premium honey and dry fruits, sourced from the finest regions and delivered fresh to your doorstep.
            </p>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mixed Dry Fruits & Honey Nuts Card */}
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                  <CardTitle className="text-foreground">Mixed Dry Fruits & Honey Nuts</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground">
                  A perfect blend of premium dry fruits and honey-coated nuts, rich in nutrients and natural sweetness.
                </CardDescription>
                <div className="space-y-2">
                  <Badge variant="secondary" className="text-foreground">Small Pack (50g) ₹50</Badge>
                  <Badge variant="secondary" className="text-foreground">Large Pack (250g) ₹200</Badge>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Add Small Pack
                  </Button>
                  <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Add Large Pack
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Raw Cashew Card */}
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <CardTitle className="text-foreground">Raw Cashew</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground">
                  Premium quality raw cashews, rich in healthy fats and minerals, perfect for snacking or cooking.
                </CardDescription>
                <Badge variant="secondary" className="text-foreground">1kg Pack ₹850</Badge>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>

            {/* Badam (Almonds) Card */}
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4zM10 2a8 8 0 100 16 8 8 0 000-16z" />
                    </svg>
                  </div>
                  <CardTitle className="text-foreground">Badam (Almonds)</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground">
                  Premium quality almonds, packed with protein and healthy fats, perfect for daily nutrition.
                </CardDescription>
                <Badge variant="secondary" className="text-foreground">1kg Pack ₹820</Badge>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


 {/* Our Story Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-card shadow-xl">
            <CardContent className="p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Text Content */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-serif text-foreground font-bold mb-4">
                      Our Story
                    </h2>
                    <div className="w-24 h-1 bg-primary mb-6"></div>
                  </div>
                  
                  <div className="space-y-4 text-foreground">
                    <p className="text-lg leading-relaxed">
                      YAS TRADERS is passionate about bringing you the finest quality honey and dry fruits. 
                      For over 5 years, we have been sourcing premium products from across India and beyond, 
                      ensuring that every item meets our high standards of quality and authenticity.
                    </p>
                    
                    <p className="text-lg leading-relaxed">
                      We work directly with local farmers and beekeepers, building strong relationships 
                      that allow us to maintain sustainable and ethical practices. Our commitment to 
                      responsible sourcing ensures that you receive not only delicious products but also 
                      items that are produced with care for both people and the environment.
                    </p>
                    
                    <p className="text-lg leading-relaxed">
                      Our mission is to preserve traditional harvesting methods while delivering authentic 
                      flavors across India. We believe in the power of natural, unprocessed ingredients 
                      and strive to bring you the purest forms of nature's bounty.
                    </p>
                  </div>
                </div>

                {/* Right Side - Abstract Graphic */}
                <div className="flex justify-center lg:justify-end">
                  <div className="relative">
                    <div className="w-64 h-64 lg:w-80 lg:h-80 bg-secondary rounded-lg flex items-center justify-center p-8">
                      <div className="relative w-full h-full">
                        {/* Large organic shape (teardrop/nut shape) */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-48 h-64 lg:w-56 lg:h-72 bg-foreground rounded-full transform rotate-12 relative">
                            {/* Dark brown circle inside */}
                            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-muted-foreground rounded-full"></div>
                            {/* Small rectangular icon */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-4 h-6 bg-muted-foreground rounded-sm"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>



{/* Work With Us Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif text-foreground mb-4">
              Work With Us
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Join our growing network of partners and distributors to bring premium quality dry fruits and honey to customers across India and worldwide.
            </p>
          </div>

          {/* Partnership Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Distribution Card */}
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-14 0a2 2 0 012-2h14a2 2 0 012 2" />
                    </svg>
                  </div>
                  <CardTitle className="text-foreground">Distribution</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground">
                  Become a distributor for YAS TRADERS products in your region. We offer competitive pricing, marketing support, and reliable supply chain management.
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-foreground">Exclusive territory rights</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-foreground">Bulk pricing advantages</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-foreground">Marketing materials and support</span>
                  </div>
                </div>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Contact for Distribution
                </Button>
              </CardContent>
            </Card>

            {/* Franchise Opportunities Card */}
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <CardTitle className="text-foreground">Franchise Opportunities</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground">
                  Open your own YAS TRADERS retail store with our proven business model. We provide comprehensive training, store setup guidance, and ongoing support.
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-foreground">Low investment, high returns</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-foreground">Complete business setup support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-foreground">Established brand recognition</span>
                  </div>
                </div>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Apply for Franchise
                </Button>
              </CardContent>
            </Card>

            {/* B2B & Export Partnerships Card */}
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <CardTitle className="text-foreground">B2B & Export Partnerships</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground">
                  We offer wholesale solutions for businesses and export opportunities worldwide. Our products meet international quality standards and can be customized to your requirements.
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-foreground">Bulk orders at competitive prices</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-foreground">Custom packaging solutions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-foreground">International shipping expertise</span>
                  </div>
                </div>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Inquire About B2B/Export
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

            

      {/* What Our Customers Say Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif text-foreground mb-4">
              What Our Customers Say
            </h2>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial Card 1 */}
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                {/* Star Rating */}
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-foreground italic">
                  "The quality of YAS TRADERS products is exceptional. Their honey is pure and the dry fruits are always fresh. I've been a loyal customer for over 2 years now."
                </p>
                
                {/* Customer Info */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold text-sm">RK</span>
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">Rahul K.</p>
                    <p className="text-muted-foreground text-sm">Kochi</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial Card 2 */}
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                {/* Star Rating */}
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-foreground italic">
                  "As a distributor, YAS TRADERS has been incredibly supportive. Their products sell well and the quality is consistently excellent. Great partnership!"
                </p>
                
                {/* Customer Info */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold text-sm">SP</span>
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">Sneha P.</p>
                    <p className="text-muted-foreground text-sm">Bangalore</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial Card 3 */}
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                {/* Star Rating */}
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-foreground italic">
                  "The B2B partnership with YAS TRADERS has been fantastic. Their export quality products and reliable delivery have helped us expand our business."
                </p>
                
                {/* Customer Info */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold text-sm">AM</span>
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">Arjun M.</p>
                    <p className="text-muted-foreground text-sm">Mumbai Distributor</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

<ContactSection />

      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #666 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
    </div>
  );
}

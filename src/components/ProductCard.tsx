import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="hover:shadow-xl transition-shadow duration-300 bg-white">
      <CardContent className="p-4 flex flex-col h-full">
        {/* Product Graphic */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Image
              src={product.image}
              alt={product.name}
              width={100}
              height={100}
              className="w-24 h-24 object-cover rounded-full"
            />
          </div>
        </div>

        {/* Product Information */}
        <div className="text-center space-y-3 mb-6">
          {/* Product Title */}
          <h3 className="text-lg font-bold text-amber-900">
            {product.name}
          </h3>
          
          {/* Product Description */}
          <p className="text-sm text-gray-600 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Pricing and Actions - Push to bottom */}
        <div className="mt-auto space-y-4">
          {/* Pricing */}
          <div className="space-y-2">
            {product.prices.small && product.prices.large ? (
              // Multiple pricing options
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">{product.prices.small.pack}</span>
                  <span className="text-sm font-semibold text-amber-900">₹{product.prices.small.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">{product.prices.large.pack}</span>
                  <span className="text-sm font-semibold text-amber-900">₹{product.prices.large.price}</span>
                </div>
              </div>
            ) : product.prices.default ? (
              // Single pricing option
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700">{product.prices.default.pack}</span>
                <span className="text-sm font-semibold text-amber-900">₹{product.prices.default.price}</span>
              </div>
            ) : null}
          </div>

          {/* Action Buttons */}
          <div className="space-y-2">
            {product.prices.small && product.prices.large ? (
              // Multiple buttons for different pack sizes
              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  className="flex-1 rounded-[3px] bg-amber-800 text-white hover:bg-amber-900 text-xs"
                >
                  Add Small Pack
                </Button>
                <Button 
                  size="sm" 
                  className="flex-1 rounded-[3px] bg-amber-800 text-white hover:bg-amber-900 text-xs"
                >
                  Add Large Pack
                </Button>
              </div>
            ) : (
              // Single button for default pricing
              <Button 
                className="w-full rounded-[3px] bg-amber-800 text-white hover:bg-amber-900"
              >
                Add to Cart
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 
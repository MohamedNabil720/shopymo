"use client";

import { Product } from "@/types/product";
import { Heart, Star, ShoppingCart } from "lucide-react";
import { useState } from "react";

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="space-y-6">
      {/* Title and Favorite */}
      <div className="flex items-start justify-between gap-4">
        <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <Heart
            className={`w-6 h-6 ${
              isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"
            }`}
          />
        </button>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          <span className="font-semibold text-gray-800">
            {product.ratingsAverage.toFixed(1)}
          </span>
        </div>
        <span className="text-gray-500">
          ({product.ratingsQuantity} reviews)
        </span>
      </div>

      {/* Price */}
      <div>
        <p className="text-4xl font-bold text-green-600">
          {product.priceAfterDiscount || product.price} EGP
        </p>
        {product.priceAfterDiscount && (
          <p className="text-xl text-gray-400 line-through mt-1">
            {product.price} EGP
          </p>
        )}
      </div>

      {/* Description */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Description
        </h3>
        <p className="text-gray-600 leading-relaxed">{product.description}</p>
      </div>

      {/* Category and Brand */}
      <div className="space-y-3 py-4 border-t border-b border-gray-200">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Category:</span>
          <span className="font-medium text-gray-800">
            {product.category.name}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Brand:</span>
          <span className="font-medium text-gray-800">
            {product.brand.name}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Rating:</span>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium text-gray-800">
              {product.ratingsAverage.toFixed(1)} ({product.ratingsQuantity}{" "}
              reviews)
            </span>
          </div>
        </div>
      </div>

      {/* Stock */}
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Stock:</span>
          <span className="font-semibold text-green-600">
            {product.quantity} items available
          </span>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2 shadow-md">
        <ShoppingCart className="w-6 h-6" />
        Add to Cart
      </button>
    </div>
  );
}

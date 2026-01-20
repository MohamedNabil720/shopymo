"use client";
import { useState } from "react";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const hasDiscount =
    product.priceAfterDiscount && product.priceAfterDiscount < product.price;

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
      {/* Image Container */}
      <Link href={`/products/${product._id}`}>
        <div className="relative h-64 bg-gray-100 overflow-hidden cursor-pointer">
          {hasDiscount && (
            <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
              SALE
            </span>
          )}

          <button
            onClick={(e) => {
              e.preventDefault();
              setIsFavorite(!isFavorite);
            }}
            className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform z-10"
          >
            <Heart
              className={`w-5 h-5 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"}`}
            />
          </button>

          <Image
            src={product.imageCover}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 50vw,
         25vw"
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="p-4">
        <Link href={`/products/${product._id}`}>
          <span className="text-green-500 text-sm font-medium">
            {product.category.name}
          </span>

          <h3 className="text-gray-800 font-semibold mt-1 mb-2 line-clamp-2 min-h-[48px] hover:text-orange-500 transition-colors cursor-pointer">
            {product.title}
          </h3>
        </Link>

        <div className="flex items-center justify-between mb-3">
          <div className="flex flex-col">
            {hasDiscount ? (
              <>
                <span className="text-xl font-bold text-gray-800">
                  {product.priceAfterDiscount} EGP
                </span>
                <span className="text-sm text-gray-400 line-through">
                  {product.price} EGP
                </span>
              </>
            ) : (
              <span className="text-xl font-bold text-gray-800">
                {product.price} EGP
              </span>
            )}
          </div>

          <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors shadow-md">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-600">
            Review ({product.ratingsQuantity})
          </span>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium text-gray-700">
              {product.ratingsAverage.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Brand } from "@/types/brand";
import Image from "next/image";
import Link from "next/link";

interface BrandCardProps {
  brand: Brand;
}

export default function BrandCard({ brand }: BrandCardProps) {
  return (
    <Link
      href={`/brands/${brand.slug}`}
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      {/* Image Container */}
      <div className="relative h-48 bg-white p-6 flex items-center justify-center overflow-hidden">
        <Image
          src={brand.image}
          alt={brand.name}
          fill
          sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 50vw,
         25vw"
          className="object-contain p-4 group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 text-center bg-gray-50 border-t border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-orange-500 transition-colors">
          {brand.name}
        </h3>
      </div>
    </Link>
  );
}

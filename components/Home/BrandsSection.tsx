import { getBrands } from "@/actions/brands.actions";
import BrandsSwiper from "../Brands/BrandsSwiper";

interface BrandsSectionProps {
  limit?: number;
  title?: string;
  highlightedWord?: string;
  description?: string;
}

export default async function BrandsSection({
  limit = 12,
}: BrandsSectionProps) {
  const result = await getBrands(1);

  if (!result.success || !result.data) {
    return null;
  }

  const brands = result.data.slice(0, limit);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <BrandsSwiper brands={brands} />
      </div>
    </section>
  );
}

// Loading Skeleton
export function BrandsSectionSkeleton() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="h-10 w-64 bg-gray-200 rounded mx-auto mb-4 animate-pulse"></div>
          <div className="h-4 w-96 bg-gray-200 rounded mx-auto animate-pulse"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="h-32 bg-gray-200 animate-pulse"></div>
              <div className="p-3">
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

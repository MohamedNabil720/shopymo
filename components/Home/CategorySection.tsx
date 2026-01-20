import { getCategories } from "@/actions/categories.actions";
import SectionTitle from "../SectionTitle";
import CategoriesGrid from "../Categories/CategoriesGrid";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CategoriesSectionProps {
  limit?: number;
  showViewAll?: boolean;
  title?: string;
  highlightedWord?: string;
  description?: string;
}

export default async function CategoriesSection({
  limit = 8,
  showViewAll = true,
  title = "Our Category",

  description = "Browse through our diverse collection of product categories",
}: CategoriesSectionProps) {
  const result = await getCategories(1);

  if (!result.success || !result.data) {
    return null;
  }

  const categories = result.data.slice(0, limit);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle title={title} description={description} />

        <CategoriesGrid categories={categories} />

        {showViewAll && (
          <div className="text-center mt-12">
            <Link
              href="/categories"
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:primary transition-colors shadow-md hover:shadow-lg"
            >
              View All Categories
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

// Loading Skeleton
export function CategoriesSectionSkeleton() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="h-10 w-64 bg-gray-200 rounded mx-auto mb-4 animate-pulse"></div>
          <div className="h-4 w-96 bg-gray-200 rounded mx-auto animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="h-64 bg-gray-200 animate-pulse"></div>
              <div className="p-4">
                <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

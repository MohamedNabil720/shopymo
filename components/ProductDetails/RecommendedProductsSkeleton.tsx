export default function RecommendedProductsSkeleton() {
  return (
    <section className="py-12">
      {/* Title Skeleton */}
      <div className="text-center mb-8">
        <div className="h-10 w-64 bg-gray-200 rounded mx-auto mb-4 animate-pulse"></div>
        <div className="h-4 w-96 bg-gray-200 rounded mx-auto animate-pulse"></div>
      </div>

      {/* Products Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <div className="h-64 bg-gray-200 animate-pulse"></div>
            <div className="p-4 space-y-3">
              <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
              <div className="h-6 bg-gray-200 rounded w-1/2 animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

interface BrandsHeaderProps {
  brandsCount: number;
  currentPage: number;
  totalPages: number;
}

export default function BrandsHeader({
  brandsCount,
  currentPage,
  totalPages,
}: BrandsHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Our Brands</h1>
      <p className="text-gray-600">
        Showing {brandsCount} brands (Page {currentPage} of {totalPages})
      </p>
    </div>
  );
}

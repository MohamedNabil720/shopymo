// components/Categories/CategoriesHeader.tsx

interface CategoriesHeaderProps {
  categoriesCount: number;
  currentPage: number;
  totalPages: number;
}

export default function CategoriesHeader({
  categoriesCount,
  currentPage,
  totalPages,
}: CategoriesHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Our Categories</h1>
      <p className="text-gray-600">
        Showing {categoriesCount} categories (Page {currentPage} of {totalPages}
        )
      </p>
    </div>
  );
}

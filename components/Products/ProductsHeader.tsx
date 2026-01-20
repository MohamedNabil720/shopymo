// components/ProductsHeader.tsx

interface ProductsHeaderProps {
  productsCount: number;
  currentPage: number;
  totalPages: number;
}

export default function ProductsHeader({
  productsCount,
  currentPage,
  totalPages,
}: ProductsHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Our Products</h1>
      <p className="text-gray-600">
        Showing {productsCount} products (Page {currentPage} of {totalPages})
      </p>
    </div>
  );
}

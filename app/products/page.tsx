import { getProducts } from "@/actions/products.actions";
import ProductsHeader from "@/components/Products/ProductsHeader";
import ProductsGrid from "@/components/Products/ProductsGrid";
import SectionBg from "@/components/SectionBg";
import ProductsClient from "@/components/Products/ProductsClient";
import ErrorState from "@/components/ErrorState";

interface ProductsPageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;

  const result = await getProducts(currentPage);

  if (!result.success || !result.data) {
    return (
      <ErrorState
        error={result.error || "Failed to fetch products"}
        onRetry={() => {}}
      />
    );
  }

  const { data: products, metadata } = result;
  const totalPages = metadata?.numberOfPages || 1;

  return (
    <div className="min-h-screen bg-gray-50">
      <SectionBg pageName="Products" pageInfo="carefully selected collection" />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <ProductsHeader
          productsCount={products.length}
          currentPage={currentPage}
          totalPages={totalPages}
        />

        <ProductsGrid products={products} />

        <ProductsClient currentPage={currentPage} totalPages={totalPages} />
      </div>
    </div>
  );
}

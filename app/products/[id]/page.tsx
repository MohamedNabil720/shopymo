import { getProductById } from "@/actions/products.actions";
import ProductImageGallery from "@/components/ProductDetails/ProductImageGallery";
import ProductInfo from "@/components/ProductDetails/ProductInfo";
import RecommendedProducts from "@/components/ProductDetails/RecommendedProducts";
import RecommendedProductsSkeleton from "@/components/ProductDetails/RecommendedProductsSkeleton";
import ErrorState from "@/components/ErrorState";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export const revalidate = 60;

// Generate Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const result = await getProductById(id);

  if (!result.success || !result.data) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${result.data.title} | Your Store`,
    description: result.data.description,
    openGraph: {
      images: [result.data.imageCover],
    },
  };
}

interface ProductDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { id } = await params;
  const result = await getProductById(id);

  if (!result.success || !result.data) {
    if (result.error?.includes("404")) {
      notFound();
    }
    return (
      <ErrorState
        error={result.error || "Failed to fetch product"}
        onRetry={() => {}}
      />
    );
  }

  const product = result.data;
  const allImages = [product.imageCover, ...product.images];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 mt-24">
        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left: Images */}
          <div>
            <ProductImageGallery images={allImages} title={product.title} />
          </div>

          {/* Right: Product Info */}
          <div>
            <ProductInfo product={product} />
          </div>
        </div>

        {/* Recommended Products Section */}
        <Suspense fallback={<RecommendedProductsSkeleton />}>
          <RecommendedProducts
            categoryId={product.category._id}
            currentProductId={product._id}
            limit={4}
          />
        </Suspense>
      </div>
    </div>
  );
}

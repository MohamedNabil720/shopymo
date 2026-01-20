import { getProducts } from "@/actions/products.actions";
import ProductCard from "@/components/Products/ProductCard";
import SectionTitle from "@/components/SectionTitle";

interface RecommendedProductsProps {
  categoryId?: string;
  currentProductId: string;
  limit?: number;
}

export default async function RecommendedProducts({
  categoryId,
  currentProductId,
  limit = 4,
}: RecommendedProductsProps) {
  // جلب المنتجات
  const result = await getProducts(1);

  if (!result.success || !result.data) {
    return null;
  }

  // فلترة المنتجات
  let recommendedProducts = result.data
    // استبعاد المنتج الحالي
    .filter((product) => product._id !== currentProductId);

  // لو فيه categoryId، اختار من نفس الفئة
  if (categoryId) {
    const sameCategoryProducts = recommendedProducts.filter(
      (product) => product.category._id === categoryId,
    );

    // لو فيه منتجات من نفس الفئة، استخدمها
    if (sameCategoryProducts.length >= limit) {
      recommendedProducts = sameCategoryProducts;
    }
  }

  // أخذ العدد المطلوب فقط
  recommendedProducts = recommendedProducts.slice(0, limit);

  // لو مفيش منتجات، مش نعرض حاجة
  if (recommendedProducts.length === 0) {
    return null;
  }

  return (
    <section className="py-12">
      <SectionTitle
        title="Recommended Products"
        description="You may also like these products"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recommendedProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
}

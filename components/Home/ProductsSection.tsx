import { getProducts } from "@/actions/products.actions";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionTitle from "../SectionTitle";
import ProductsGrid from "../Products/ProductsGrid";

export default async function ProductsSection() {
  const result = await getProducts(1);

  if (!result.success || !result.data) {
    return null;
    1;
  }

  const products = result.data.slice(0, 10);

  return (
    <section className=" ">
      <SectionTitle
        title="Our Products"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio."
      />
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 ">
          <ProductsGrid products={products} />

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors shadow-md hover:shadow-lg"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

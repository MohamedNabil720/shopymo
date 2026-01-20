import FeaturesSection from "@/components/Home/FeaturesSection";
import Hero from "@/components/Hero/Hero";
import CategorySection from "@/components/Home/CategorySection";
import ProductsSection from "@/components/Home/ProductsSection";
import BrandsSection from "@/components/Home/BrandsSection";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <FeaturesSection />
      <ProductsSection />
      <CategorySection />
      <BrandsSection />
    </div>
  );
}

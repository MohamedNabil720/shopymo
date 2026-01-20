import { getBrands } from "@/actions/brands.actions";
import BrandsHeader from "@/components/Brands/BrandsHeader";
import BrandsGrid from "@/components/Brands/BrandsGrid";
import SectionBg from "@/components/SectionBg";
import BrandsClient from "@/components/Brands/BrandsClient";
import ErrorState from "@/components/ErrorState";
import { Metadata } from "next";

export const revalidate = 60;

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}): Promise<Metadata> {
  const params = await searchParams;
  const page = params.page || "1";

  return {
    title: `Brands - Page ${page} | Your Store Name`,
    description: `Browse our trusted brands - Page ${page}`,
  };
}

interface BrandsPageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

export default async function BrandsPage({ searchParams }: BrandsPageProps) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;

  const result = await getBrands(currentPage);

  if (!result.success || !result.data) {
    return (
      <ErrorState
        error={result.error || "Failed to fetch brands"}
        onRetry={() => {}}
      />
    );
  }

  const { data: brands, metadata } = result;
  const totalPages = metadata?.numberOfPages || 1;

  return (
    <div className="min-h-screen bg-gray-50">
      <SectionBg pageName="Brands" pageInfo="trusted quality brands" />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <BrandsHeader
          brandsCount={brands.length}
          currentPage={currentPage}
          totalPages={totalPages}
        />

        <BrandsGrid brands={brands} />

        <BrandsClient currentPage={currentPage} totalPages={totalPages} />
      </div>
    </div>
  );
}

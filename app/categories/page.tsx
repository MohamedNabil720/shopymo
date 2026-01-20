// app/categories/page.tsx

import { getCategories } from "@/actions/categories.actions";
import CategoriesHeader from "@/components/Categories/CategoriesHeader";
import CategoriesGrid from "@/components/Categories/CategoriesGrid";
import SectionBg from "@/components/SectionBg";
import CategoriesClient from "@/components/Categories/CategoriesClient";
import ErrorState from "@/components/ErrorState";
import { Metadata } from "next";

// Revalidation Strategy
export const revalidate = 60;

// Dynamic Metadata
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}): Promise<Metadata> {
  const params = await searchParams;
  const page = params.page || "1";

  return {
    title: `Categories - Page ${page} | Your Store Name`,
    description: `Browse our product categories - Page ${page}`,
  };
}

interface CategoriesPageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

export default async function CategoriesPage({
  searchParams,
}: CategoriesPageProps) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;

  const result = await getCategories(currentPage);

  if (!result.success || !result.data) {
    return (
      <ErrorState
        error={result.error || "Failed to fetch categories"}
        onRetry={() => {}}
      />
    );
  }

  const { data: categories, metadata } = result;
  const totalPages = metadata?.numberOfPages || 1;

  return (
    <div className="min-h-screen bg-gray-50">
      <SectionBg pageName="Categories" pageInfo="explore our collection" />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <CategoriesHeader
          categoriesCount={categories.length}
          currentPage={currentPage}
          totalPages={totalPages}
        />

        <CategoriesGrid categories={categories} />

        <CategoriesClient currentPage={currentPage} totalPages={totalPages} />
      </div>
    </div>
  );
}

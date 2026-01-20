"use client";

import { useRouter } from "next/navigation";
import Pagination from "@/components/Pagination";

interface CategoriesClientProps {
  currentPage: number;
  totalPages: number;
}

export default function CategoriesClient({
  currentPage,
  totalPages,
}: CategoriesClientProps) {
  const router = useRouter();

  const handlePageChange = (page: number) => {
    router.push(`/categories?page=${page}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />
  );
}

"use client";

import { useRouter } from "next/navigation";
import Pagination from "@/components/Pagination";

interface BrandsClientProps {
  currentPage: number;
  totalPages: number;
}

export default function BrandsClient({
  currentPage,
  totalPages,
}: BrandsClientProps) {
  const router = useRouter();

  const handlePageChange = (page: number) => {
    router.push(`/brands?page=${page}`);
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

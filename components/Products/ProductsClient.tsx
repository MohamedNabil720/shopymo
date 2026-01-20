// components/Products/ProductsClient.tsx

"use client";

import { useRouter } from "next/navigation";
import Pagination from "@/components/Pagination";

interface ProductsClientProps {
  currentPage: number;
  totalPages: number;
}

export default function ProductsClient({
  currentPage,
  totalPages,
}: ProductsClientProps) {
  const router = useRouter();

  const handlePageChange = (page: number) => {
    router.push(`/products?page=${page}`);

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

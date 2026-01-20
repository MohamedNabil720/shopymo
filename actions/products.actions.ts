"use server";

import { apiClient } from "@/lib/axios";
import { ProductsResponse, Product } from "@/types/product";

export async function getProducts(page: number = 1) {
  try {
    const response = await apiClient.get<ProductsResponse>("/products", {
      params: { page },
    });

    return {
      success: true,
      data: response.data.data,
      metadata: response.data.metadata,
      error: null,
    };
  } catch (error) {
    console.error("Failed to fetch products:", error);

    return {
      success: false,
      data: [],
      metadata: null,
      error:
        error instanceof Error ? error.message : "Failed to fetch products",
    };
  }
}

export async function getProductById(id: string) {
  try {
    const response = await apiClient.get<{ data: Product }>(`/products/${id}`);

    return {
      success: true,
      data: response.data.data,
      error: null,
    };
  } catch (error) {
    console.error("Failed to fetch product:", error);

    return {
      success: false,
      data: null,
      error: error instanceof Error ? error.message : "Failed to fetch product",
    };
  }
}

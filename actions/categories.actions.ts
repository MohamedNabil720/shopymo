"use server";

import { apiClient } from "@/lib/axios";
import { CategoriesResponse } from "@/types/category";

export async function getCategories(page: number = 1) {
  try {
    const response = await apiClient.get<CategoriesResponse>("/categories", {
      params: { page },
    });

    return {
      success: true,
      data: response.data.data,
      metadata: response.data.metadata,
      error: null,
    };
  } catch (error) {
    console.error("Failed to fetch categories:", error);

    return {
      success: false,
      data: [],
      metadata: null,
      error:
        error instanceof Error ? error.message : "Failed to fetch categories",
    };
  }
}

export async function getCategoryById(id: string) {
  try {
    const response = await apiClient.get(`/categories/${id}`);

    return {
      success: true,
      data: response.data.data,
      error: null,
    };
  } catch (error) {
    console.error("Failed to fetch category:", error);

    return {
      success: false,
      data: null,
      error:
        error instanceof Error ? error.message : "Failed to fetch category",
    };
  }
}

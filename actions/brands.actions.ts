"use server";

import { apiClient } from "@/lib/axios";
import { BrandsResponse } from "@/types/brand";

export async function getBrands(page: number = 1) {
  try {
    const response = await apiClient.get<BrandsResponse>("/brands", {
      params: { page },
    });

    return {
      success: true,
      data: response.data.data,
      metadata: response.data.metadata,
      error: null,
    };
  } catch (error) {
    console.error("Failed to fetch brands:", error);

    return {
      success: false,
      data: [],
      metadata: null,
      error: error instanceof Error ? error.message : "Failed to fetch brands",
    };
  }
}

export async function getBrandById(id: string) {
  try {
    const response = await apiClient.get(`/brands/${id}`);

    return {
      success: true,
      data: response.data.data,
      error: null,
    };
  } catch (error) {
    console.error("Failed to fetch brand:", error);

    return {
      success: false,
      data: null,
      error: error instanceof Error ? error.message : "Failed to fetch brand",
    };
  }
}

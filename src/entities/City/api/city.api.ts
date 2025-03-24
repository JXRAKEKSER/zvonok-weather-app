import { createHttpInstance } from "@/shared/api";

interface CityDto {
  name: string;
  longitude: number;
  latitude: number;
}

const BASE_URL = import.meta.env.BASE_URL;

const httpInstance = createHttpInstance(BASE_URL);

async function fetchCities() {
  try {
    const { data } = await httpInstance.get<CityDto[]>("/moked-cities.json");

    return data;
  } catch (error) {
    console.error("Error fetching cities:", error);
    throw error;
  }
}

async function fetchPopularCities() {
  try {
    const { data } = await httpInstance.get<CityDto[]>(
      "/mocked-popular-cities.json"
    );

    return data;
  } catch (error) {
    console.error("Error fetching cities:", error);
    throw error;
  }
}

export { fetchCities, fetchPopularCities };
export type { CityDto };

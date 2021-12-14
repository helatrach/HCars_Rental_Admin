import { Brand } from "./brand";

export interface Car {
  id: number;
  year: number;
  available: boolean;
  brand: Brand;
  brandId: number;
  model: string;
  pricePerDay: number;
  imageUrl: string;
  locationId: number;
  numberOfDoors: number;
  color: string;
  mileage: number;
  power: number;
  oldImageUrl : string;
}

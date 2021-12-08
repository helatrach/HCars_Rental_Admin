import { Brand } from "./brand";
import { Locations } from "./location";

export interface Car {
  id: number;
  year: number;
  available: boolean;
  brand: Brand;
  brandId: number;
  model: string;
  pricePerDay: number;
  imageUrl: string;
  location: Locations;
  locationId: number;
  numberOfDoors: number;
  color: string;
  mileage: number;
  power: number;
}

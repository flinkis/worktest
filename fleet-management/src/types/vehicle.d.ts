declare interface Vehicle {
  id: string;
  name: string;
  driver: string;
  status: "active" | "inactive";
  fuelType: "Diesel" | "LNG" | "CNG" | "Electrical";
  equipments: number[];
}

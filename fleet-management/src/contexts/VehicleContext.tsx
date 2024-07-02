import { createContext, useState, useContext, useEffect } from "react";

interface VehicleContextType {
  vehicles: Vehicle[];
  equipments: Equipment[];
  loading: boolean;
  updateVehicle: (updatedVehicle: Vehicle) => void;
  addVehicle: (newVehicle: Omit<Vehicle, "id">) => void;
  deleteVehicle: (id: string) => void;
}

const VehicleContext = createContext<VehicleContextType | undefined>(undefined);

export const useVehicleContext = () => {
  const context = useContext(VehicleContext);
  if (context === undefined) {
    throw new Error("useVehicleContext must be used within a VehicleProvider");
  }
  return context;
};

export const VehicleProvider = ({ children }: VehicleProviderProps) => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [equipments, setEquipments] = useState<Equipment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [vehiclesResponse, equipmentsResponse] = await Promise.all([
          fetch("/vehicles.json"),
          fetch("/equipments.json"),
        ]);

        if (!vehiclesResponse.ok || !equipmentsResponse.ok) {
          throw new Error("Network response was not ok");
        }

        const vehiclesData: Vehicle[] = await vehiclesResponse.json();
        const equipmentsData: Equipment[] = await equipmentsResponse.json();

        setVehicles(vehiclesData);
        setEquipments(equipmentsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const updateVehicle = (updatedVehicle: Vehicle) => {
    setVehicles((prevVehicles) =>
      prevVehicles.map((vehicle) =>
        vehicle.id === updatedVehicle.id ? updatedVehicle : vehicle
      )
    );
    // fetch(`/api/vehicles/${updatedVehicle.id}`, {
    //   method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(updatedVehicle)
    // })
    //   .then(response => {
    //     if (!response.ok) throw new Error('Failed to update vehicle');
    //   })
    //   .catch(error => console.error('Error updating vehicle:', error));
  };

  const addVehicle = (newVehicle: Omit<Vehicle, "id">) => {
    const vehicleWithId = { ...newVehicle, id: Date.now().toString() };
    setVehicles((prevVehicles) => [...prevVehicles, vehicleWithId]);

    // fetch('/api/vehicles', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(newVehicle)
    // })
    //   .then(response => {
    //     if (!response.ok) throw new Error('Failed to add vehicle');
    //     return response.json();
    //   })
    //   .then(addedVehicle => {
    //     setVehicles(prevVehicles => [...prevVehicles, addedVehicle]);
    //   })
    //   .catch(error => console.error('Error adding vehicle:', error));
  };

  const deleteVehicle = (id: string) => {
    setVehicles((prevVehicles) =>
      prevVehicles.filter((vehicle) => vehicle.id !== id)
    );

    // fetch(`/api/vehicles/${id}`, { method: 'DELETE' })
    //   .then(response => {
    //     if (!response.ok) throw new Error('Failed to delete vehicle');
    //     setVehicles(prevVehicles => prevVehicles.filter(vehicle => vehicle.id !== id));
    //   })
    //   .catch(error => console.error('Error deleting vehicle:', error));
  };

  return (
    <VehicleContext.Provider
      value={{
        vehicles,
        equipments,
        loading,
        updateVehicle,
        addVehicle,
        deleteVehicle,
      }}
    >
      {children}
    </VehicleContext.Provider>
  );
};

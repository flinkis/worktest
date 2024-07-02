import { useState, useEffect, FormEvent } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Container,
  Paper,
  List,
  ListItem,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Switch,
  CircularProgress,
} from "@mui/material";
import { useVehicleContext } from "../contexts/VehicleContext";

const fuelTypes: Vehicle["fuelType"][] = ["Diesel", "LNG", "CNG", "Electrical"];

const UpdateVehicle = () => {
  const { vehicles, equipments, loading, updateVehicle } = useVehicleContext();
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (id && !loading) {
      const foundVehicle = vehicles.find((v) => v.id === id);
      setVehicle(foundVehicle || null);
    }
  }, [id, vehicles, loading]);

  if (loading) {
    return <CircularProgress />;
  }

  if (!vehicle) return <Typography>Vehicle not found</Typography>;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (vehicle) {
      updateVehicle(vehicle);
      navigate(`/vehicle/${vehicle.id}`);
    }
  };

  const toggleEquipment = (eqId: number) => {
    setVehicle((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        equipments: prev.equipments.includes(eqId)
          ? prev.equipments.filter((id) => id !== eqId)
          : [...prev.equipments, eqId],
      };
    });
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
        <form onSubmit={handleSubmit}>
          <Typography variant="h4" component="h1" gutterBottom>
            Update {vehicle.name}
          </Typography>
          <TextField
            fullWidth
            label="Vehicle Name"
            value={vehicle.name}
            onChange={(e) =>
              setVehicle((prev) =>
                prev ? { ...prev, name: e.target.value } : null
              )
            }
            margin="normal"
          />
          <TextField
            fullWidth
            label="Driver"
            value={vehicle.driver}
            onChange={(e) =>
              setVehicle((prev) =>
                prev ? { ...prev, driver: e.target.value } : null
              )
            }
            margin="normal"
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Fuel Type</InputLabel>
            <Select
              label="Fuel Type"
              value={vehicle.fuelType}
              onChange={(e) =>
                setVehicle((prev) =>
                  prev
                    ? {
                        ...prev,
                        fuelType: e.target.value as Vehicle["fuelType"],
                      }
                    : null
                )
              }
            >
              {fuelTypes.map((fuelType) => (
                <MenuItem key={fuelType} value={fuelType}>
                  {fuelType}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControlLabel
            control={
              <Switch
                checked={vehicle.status === "active"}
                onChange={(e) =>
                  setVehicle((prev) =>
                    prev
                      ? {
                          ...prev,
                          status: e.target.checked ? "active" : "inactive",
                        }
                      : null
                  )
                }
              />
            }
            label="Active"
            style={{ marginTop: "10px", marginBottom: "10px" }}
          />
          <Typography variant="h6" component="h2" gutterBottom>
            Equipments:
          </Typography>
          <List>
            {equipments.map((eq) => (
              <ListItem key={eq.id}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={vehicle.equipments.includes(eq.id)}
                      onChange={() => toggleEquipment(eq.id)}
                    />
                  }
                  label={eq.name}
                />
              </ListItem>
            ))}
          </List>
          <Button type="submit" variant="contained" color="primary">
            Update Vehicle
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default UpdateVehicle;

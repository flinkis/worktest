import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  TextField,
  Button,
  Container,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { useVehicleContext } from "../contexts/VehicleContext";

const fuelTypes: Vehicle["fuelType"][] = ["Diesel", "LNG", "CNG", "Electrical"];

const AddVehicle = () => {
  const { addVehicle } = useVehicleContext();
  const navigate = useNavigate();

  const [newVehicle, setNewVehicle] = useState<Omit<Vehicle, "id">>({
    name: "",
    driver: "",
    status: "inactive",
    fuelType: "Diesel",
    equipments: [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addVehicle(newVehicle);
    navigate("/");
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Add New Vehicle
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Vehicle Name"
            value={newVehicle.name}
            onChange={(e) =>
              setNewVehicle((prev) => ({ ...prev, name: e.target.value }))
            }
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Driver"
            value={newVehicle.driver}
            onChange={(e) =>
              setNewVehicle((prev) => ({ ...prev, driver: e.target.value }))
            }
            margin="normal"
            required
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Fuel Type</InputLabel>
            <Select
              value={newVehicle.fuelType}
              onChange={(e) =>
                setNewVehicle((prev) => ({
                  ...prev,
                  fuelType: e.target.value as Vehicle["fuelType"],
                }))
              }
              required
              label="Fuel Type"
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
                checked={newVehicle.status === "active"}
                onChange={(e) =>
                  setNewVehicle((prev) => ({
                    ...prev,
                    status: e.target.checked ? "active" : "inactive",
                  }))
                }
              />
            }
            label="Active"
            style={{ marginTop: "10px", marginBottom: "10px" }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: "20px" }}
          >
            Add Vehicle
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default AddVehicle;

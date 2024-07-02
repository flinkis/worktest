import { useParams, useNavigate, Link } from "react-router-dom";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Container,
  Paper,
  Chip,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useVehicleContext } from "../contexts/VehicleContext";
import { useState } from "react";

const VehicleDetails = () => {
  const { vehicles, equipments, loading, deleteVehicle } = useVehicleContext();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);

  if (loading) {
    return <CircularProgress />;
  }

  const vehicle = vehicles.find((v) => v.id === id);

  if (!vehicle) return <Typography>Vehicle not found</Typography>;

  const handleDelete = () => {
    setOpenDialog(true);
  };

  const confirmDelete = () => {
    deleteVehicle(vehicle.id);
    setOpenDialog(false);
    navigate("/");
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {vehicle.name}
        </Typography>
        <Typography variant="body1">Driver: {vehicle.driver}</Typography>
        <Typography variant="body1">Fuel Type: {vehicle.fuelType}</Typography>
        <Chip
          label={vehicle.status}
          color={vehicle.status === "active" ? "success" : "error"}
          style={{ marginTop: "10px" }}
        />
        <Typography
          variant="h6"
          component="h2"
          gutterBottom
          style={{ marginTop: "20px" }}
        >
          Equipments:
        </Typography>
        <List>
          {vehicle.equipments.map((eqId) => {
            const equipment = equipments.find((eq) => eq.id === eqId);
            return equipment ? (
              <ListItem key={eqId}>
                <ListItemText primary={equipment.name} />
              </ListItem>
            ) : null;
          })}
        </List>
        <Button
          component={Link}
          to={`/update/${vehicle.id}`}
          variant="contained"
          color="primary"
          style={{ marginRight: "10px" }}
        >
          Update Vehicle
        </Button>
        <Button variant="contained" color="error" onClick={handleDelete}>
          Delete Vehicle
        </Button>
      </Paper>

      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this vehicle? This action cannot be
            undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={confirmDelete} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default VehicleDetails;

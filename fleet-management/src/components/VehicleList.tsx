import { Typography, Container, CircularProgress, Grid } from "@mui/material";
import { useVehicleContext } from "../contexts/VehicleContext";
import VehicleListItem from "./VehicleListItem";

const VehicleList = () => {
  const { vehicles, loading } = useVehicleContext();

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Vehicle List
      </Typography>
      <Grid container spacing={3}>
        {vehicles.map((vehicle) => (
          <VehicleListItem key={vehicle.id} vehicle={vehicle} />
        ))}
      </Grid>
    </Container>
  );
};

export default VehicleList;

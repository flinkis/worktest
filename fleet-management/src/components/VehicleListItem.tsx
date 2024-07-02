import { memo } from "react";
import {
  Chip,
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
  CardActionArea,
} from "@mui/material";
import { useVehicleContext } from "../contexts/VehicleContext";
import { Link } from "react-router-dom";

const VehicleListItem = memo(({ vehicle }: VehicleListItemProps) => {
  const { equipments } = useVehicleContext();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        component={Link}
        to={`/vehicle/${vehicle.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <CardActionArea>
          <CardContent>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h6">Name: {vehicle.name}</Typography>
              <Chip
                label={vehicle.status}
                color={vehicle.status === "active" ? "success" : "error"}
                size="small"
              />
            </Box>
            <Typography>Driver: {vehicle.driver}</Typography>
            <Typography>Fuel Type: {vehicle.fuelType}</Typography>
            <Typography variant="subtitle1" style={{ marginTop: "10px" }}>
              EQUIPMENTS
            </Typography>
            {vehicle.equipments?.map((eqId) => {
              const equipment = equipments.find((eq) => eq.id === eqId);
              return equipment ? (
                <Chip
                  key={eqId}
                  label={equipment.name}
                  style={{ margin: "2px" }}
                />
              ) : null;
            })}
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
});

export default VehicleListItem;

import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

const HeaderBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box display="flex" alignItems="center" flexGrow={1}>
          <Link to="/">
            <img
              src="/FM_Logo.png"
              alt="Fleet Management Logo"
              style={{ height: "40px", marginRight: "10px" }}
            />
          </Link>

          <Typography variant="h6" component="div">
            Fleet Management
          </Typography>
        </Box>
        <Button color="inherit" component={RouterLink} to="/">
          Vehicles
        </Button>
        <Button color="inherit" component={RouterLink} to="/add">
          Add Vehicle
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderBar;

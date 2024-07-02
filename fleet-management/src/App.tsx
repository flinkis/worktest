import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import CircularProgress from "@mui/material/CircularProgress";
import Layout from "./components/Layout";
import { VehicleProvider } from "./contexts/VehicleContext";

const VehicleList = lazy(() => import("./components/VehicleList"));
const VehicleDetails = lazy(() => import("./components/VehicleDetails"));
const UpdateVehicle = lazy(() => import("./components/UpdateVehicle"));
const AddVehicle = lazy(() => import("./components/AddVehicle"));

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <VehicleProvider>
        <Router>
          <Layout>
            <Suspense fallback={<CircularProgress />}>
              <Routes>
                <Route path="/" element={<VehicleList />} />
                <Route path="/vehicle/:id" element={<VehicleDetails />} />
                <Route path="/update/:id" element={<UpdateVehicle />} />
                <Route path="/add" element={<AddVehicle />} />
              </Routes>
            </Suspense>
          </Layout>
        </Router>
      </VehicleProvider>
    </ThemeProvider>
  );
}

export default App;

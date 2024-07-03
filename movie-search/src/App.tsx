import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Layout from "./components/layout/layout";
import AppRoutes from "./Routes";

const App = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  </Provider>
);

export default App;

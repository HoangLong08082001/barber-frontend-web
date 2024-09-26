import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { WebRoutes } from "./routes";
import DefaultLayout from "./components/DefaultLayout/DefaultLayout";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/san-pham" />} />
          {WebRoutes.map((route, i) => {
            let Layout = DefaultLayout;
            let Pages = route.component;
            return (
              <Route
                index={i}
                path={route.path}
                element={
                  <Layout>
                    <Pages />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// Third Party modules
import Helmet from "react-helmet";

// Import Router
import AppRouter from "./router";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Lighten</title>
      </Helmet>
      <AppRouter />
    </div>
  );
}

export default App;

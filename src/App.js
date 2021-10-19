import "./App.css";
import Router from "./Router/Router";
// Context
import { UserProvider } from "./Contexts/UserContext";
// Bootstrap Styles
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}

export default App;

import "./App.css";
import Router from "./Router/Router";
// Context
import { UserProvider } from "./Contexts/UserContext";
import { TeamProvider } from "./Contexts/TeamContext";
// Bootstrap Styles
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <TeamProvider>
      <UserProvider>
        <Router />
      </UserProvider>
    </TeamProvider>
  );
}

export default App;

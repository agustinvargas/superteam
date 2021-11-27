// Router
import Router from "./Router/Router";
// Context
import AuthProvider from "./Contexts/AuthProvider";
import NotifyProvider from "./Contexts/NotifyProvider";
import TeamProvider from "./Contexts/TeamProvider";
import SearchProvider from "./Contexts/SearchProvider";
// Bootstrap Styles
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    // Contexts
    <AuthProvider>
      <SearchProvider>
        <NotifyProvider>
          <TeamProvider>
            {/* Router  */}
            <Router />
          </TeamProvider>
        </NotifyProvider>
      </SearchProvider>
    </AuthProvider>
  );
}

export default App;

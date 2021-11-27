import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";

export default function useAuth() {
  return useContext(AuthContext);
}

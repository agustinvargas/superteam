import { useContext } from "react";
import { NotifyContext } from "../Contexts/NotifyProvider";

export default function useNotify() {
  return useContext(NotifyContext);
}

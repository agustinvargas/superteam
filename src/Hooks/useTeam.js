import { useContext } from "react";
import { TeamContext } from "../Contexts/TeamProvider";

export default function useTeam() {
  return useContext(TeamContext);
}

import { useHistory } from "react-router-dom";

export const useHistoryHook = (route) => {
    let history = useHistory();


     history.push(`/${route}`); 
}      
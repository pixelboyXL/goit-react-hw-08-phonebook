import { Link } from "react-router-dom";
import { Box } from "./Box";
// import { AppBarList, AppBarItem, NavTitle } from "./GlobalStyles";

export const Navigation = () => {
    return (
        <Box as="nav">
            <ul style={{ display: "flex" }} >
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/phonebook">Phonebook</Link>
                </li>
            </ul>
        </Box>
    );
};
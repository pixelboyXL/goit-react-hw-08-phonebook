import { useSelector } from "react-redux";
import { selectAuth } from "redux/selector";
import { Box } from "./Box";
import { Link } from "react-router-dom";
// import { AppBarList, AppBarItem, NavTitle } from "./GlobalStyles";

export const Navigation = () => {
    const { isLoggedIn } = useSelector(selectAuth);

    return (
        <Box as="nav">
            <ul style={{ display: "flex" }} >
                <li>
                    <Link to="/">Home</Link>
                </li>
                {isLoggedIn === true &&
                    <li>
                        <Link to="/phonebook">Phonebook</Link>
                    </li>}
                
            </ul>
        </Box>
    );
};
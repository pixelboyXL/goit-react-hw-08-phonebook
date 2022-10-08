import { useSelector } from "react-redux";
import { selectAuth } from "redux/selector";
import { Box } from "./Box";
import { AppBarList, AppBarItem, NavTitle } from "./GlobalStyles";

export const Navigation = () => {
    const { isLoggedIn } = useSelector(selectAuth);

    return (
        <Box as="nav">
            <AppBarList style={{ display: "flex" }} >
                <AppBarItem>
                    <NavTitle to="/">Home</NavTitle>
                </AppBarItem>
                {isLoggedIn === true &&
                    <AppBarItem>
                        <NavTitle to="/phonebook">Phonebook</NavTitle>
                    </AppBarItem>}
            </AppBarList>
        </Box>
    );
};
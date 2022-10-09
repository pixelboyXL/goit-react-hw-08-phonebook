import { Box } from "./Box";
import { Navigation } from "./Navigation";
import { AuthNav } from "./AuthNav/AuthNav";
import { UserMenu } from "./UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { selectAuth } from "redux/selector";

export const AppBar = () => {
    const { isLoggedIn } = useSelector(selectAuth);

    return (
        <Box as="header"
            display="flex"
            flexWrap="wrap"
            justifyContent="space-between"
            alignItems="center"
            mb={5}
            p={4}
            bg="#082911"
            boxShadow="shadow">
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Box>
    );
};
import { Box } from "./Box";
import { Navigation } from "./Navigation";
import { AuthNav } from "./AuthNav";
import { UserMenu } from "./UserMenu";
import { useSelector } from "react-redux";
import { selectAuth } from "redux/selector";

export const AppBar = () => {
    const { isLoggedIn } = useSelector(selectAuth);

    return (
        <Box as="header"
            display="flex"
            justifyContent="space-between"
            mb={5}
            p={3}
            bg="#082911"
            boxShadow="shadow">
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Box>
    );
};
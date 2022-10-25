import { Box } from "./Box";
import { Navigation } from "./Navigation";
import { AuthNav } from "./AuthNav/AuthNav";
import { UserMenu } from "./UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { selectAuth } from "redux/selector";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { MobMenu } from "./MobMenu/MobMenu";
import { MobMenuOpenButton, MobNav } from "./MobMenu/MobMenu.styled";

export const AppBar = () => {
    const [show, setShow] = useState(false);
    const { isLoggedIn } = useSelector(selectAuth);

    return (
        <Box as="header"
            display="flex"
            flexWrap="wrap"
            justifyContent="space-between"
            alignItems="center"
            mx="auto"
            maxWidth="1280px"
            mb={5}
            p={4}
            bg="#082911"
            boxShadow="shadow">
            <Navigation />
            <MobMenuOpenButton onClick={() => setShow(true)}>
                <MenuIcon sx={{ width: "36px", height: "40px" }} />
            </MobMenuOpenButton>
            {show && <MobMenu isLoggedIn={isLoggedIn} show={show} setShow={setShow} />}
            <MobNav>
                {isLoggedIn ? <UserMenu /> : <AuthNav />}
            </MobNav>
        </Box>
    );
};
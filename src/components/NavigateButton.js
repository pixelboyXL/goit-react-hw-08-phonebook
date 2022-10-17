import { useSelector } from "react-redux";
import { selectAuth } from "redux/selector";
import { NavButton } from "components/GlobalStyles";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

export const NavigateButton = () => {
    const { isLoggedIn } = useSelector(selectAuth);

    return (
        <NavButton to={isLoggedIn ? "/contacts" : "/register"}>
            Let`s go<RocketLaunchIcon sx={{ marginLeft: "5px" }} />
        </NavButton>
    );
};
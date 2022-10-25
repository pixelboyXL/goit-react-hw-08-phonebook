import { AuthNav } from "components/AuthNav/AuthNav";
import { UserMenu } from "components/UserMenu/UserMenu";
import { MobMenuCloseButton, MobMenuWrap } from "./MobMenu.styled";
import CloseIcon from '@mui/icons-material/Close';

export const MobMenu = ({ isLoggedIn, show, setShow }) => {
    return (
        <MobMenuWrap>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
            <MobMenuCloseButton onClick={() => setShow(false)}>
                <CloseIcon sx={{ width: "36px", height: "40px" }} />
            </MobMenuCloseButton>
        </MobMenuWrap>
    );
};
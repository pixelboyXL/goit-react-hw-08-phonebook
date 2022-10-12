import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/operations/userOperations';
import { selectAuth } from "redux/selector";
import { UserMenuDiv, UserEmail, ButtonForLogOut } from './UserMenu.styled';
import LogoutIcon from '@mui/icons-material/Logout';
import { AvatarStyle } from 'components/icons/icons.styled';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(selectAuth);

    const userMainLetter = user.email.slice(0, 1).toUpperCase();
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;    

    return (
        <UserMenuDiv>
            <AvatarStyle letter={userMainLetter} color={randomColor} />
            <UserEmail>{user.email}</UserEmail>
            <ButtonForLogOut type='button' onClick={() => dispatch(logOutUser())}>
                Log Out<LogoutIcon sx={{ marginLeft: "5px" }}/>
            </ButtonForLogOut>
        </UserMenuDiv>
    );
};
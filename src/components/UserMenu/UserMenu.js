import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/operations/userOperations';
import { selectAuth } from "redux/selector";
import { UserEmail, ButtonForLogOut } from './UserMenu.styled';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(selectAuth);

    return (
        <div style={{ display: "flex", alignItems: "center"}}>
            <UserEmail>{user.email}</UserEmail>
            <ButtonForLogOut type='button' onClick={() => dispatch(logOutUser())}>
                Log Out
            </ButtonForLogOut>
        </div>
    );
};
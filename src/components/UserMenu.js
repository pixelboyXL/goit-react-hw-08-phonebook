import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/operations/userOperations';
import { selectAuth } from "redux/selector";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(selectAuth);

    return (
        <div style={{ display: "flex" }}>
            <p>Welcome, {user.name}</p>
            <button type='button' onClick={() => dispatch(logOutUser())}>
                Log Out
            </button>
        </div>
    );
};
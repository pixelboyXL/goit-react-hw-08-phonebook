import { useSelector } from 'react-redux';
import { selectAuth } from "redux/selector";
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
    const { isLoggedIn } = useSelector(selectAuth);

    return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
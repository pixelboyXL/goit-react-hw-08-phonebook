import { AuthList, AuthListItem, AuthTitle } from './AuthNav.styled';

export const AuthNav = () => {
    return (
        <AuthList>
            <AuthListItem>
                <AuthTitle to="/register">
                Register
                </AuthTitle>
            </AuthListItem>
            <AuthListItem>
                <AuthTitle to="/login">
                Log In
                </AuthTitle>
            </AuthListItem>
        </AuthList>
    );
};
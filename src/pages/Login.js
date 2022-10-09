import { Box } from "components/Box";
import { SecondTitle } from "components/GlobalStyles";
import { LoginForm } from "components/LoginForm/LoginForm";

export const Login = () => {
    return (
        <Box as="section"
            mt={7}>
            <SecondTitle>If you have an account, please login 🙋‍♂️</SecondTitle>
            <LoginForm />
        </Box>
    );
};
import { Box } from "components/Box";
import { SecondTitle } from "components/GlobalStyles";
import { RegisterForm } from "components/RegisterForm";

export const Register = () => {
    return (
        <Box as="section"
            mt={7}>
            <SecondTitle>If you are new, please register 💁‍♂️</SecondTitle>
            <RegisterForm />
        </Box>
    );
};


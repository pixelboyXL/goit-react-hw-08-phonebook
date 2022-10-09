import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/operations/userOperations';
import { ClassicFormStyle, ClassicLabelForm, ClassicInputForm, ClassicButton } from "components/GlobalStyles";
import { EmailIconStyle, KeyIconStyle } from "components/icons/icons.styled";
import LoginIcon from '@mui/icons-material/Login';

export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            logInUser({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
        <ClassicFormStyle onSubmit={handleSubmit} autoComplete="on">
            <ClassicLabelForm>
                Email
                <ClassicInputForm type="email" name="email" />
                <EmailIconStyle />
            </ClassicLabelForm>
            <ClassicLabelForm>
                Password
                <ClassicInputForm type="password" name="password" />
                <KeyIconStyle />
            </ClassicLabelForm>
        <ClassicButton type="submit">Log In<LoginIcon sx={{ marginLeft: "5px" }}/></ClassicButton>
        </ClassicFormStyle>
    );
};
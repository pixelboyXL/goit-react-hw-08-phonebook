import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/operations/userOperations';
import { ClassicFormStyle, ClassicLabelForm, ClassicInputForm, ClassicButton } from "components/GlobalStyles";
import { PersonIconStyle, EmailIconStyle, KeyIconStyle } from "components/icons/icons.styled";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            registerUser({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
        <ClassicFormStyle onSubmit={handleSubmit} autoComplete="on">
            <ClassicLabelForm>
                Username
                <ClassicInputForm type="text" name="name" />
                <PersonIconStyle />
            </ClassicLabelForm>
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
            <ClassicButton type="submit">Register<AppRegistrationIcon sx={{ marginLeft: "5px" }}/></ClassicButton>
        </ClassicFormStyle>
    );
};
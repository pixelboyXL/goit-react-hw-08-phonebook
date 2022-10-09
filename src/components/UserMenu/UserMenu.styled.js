import styled from "styled-components";
import { ClassicButton } from "components/GlobalStyles";

export const UserEmail = styled.p`
    font-weight: ${p => p.theme.fontWeights.medium};
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.colors.reallyBisque};
    margin-right: ${p => p.theme.space[4]}px;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
        transform: scale(1.1);
        text-shadow: 0px 5px 10px ${p => p.theme.colors.reallyBisgue};
    }
`;

export const ButtonForLogOut = styled(ClassicButton)`
    color: ${p => p.theme.colors.almostDarkGreen};
    background-color: ${p => p.theme.colors.almostWhite};
`;
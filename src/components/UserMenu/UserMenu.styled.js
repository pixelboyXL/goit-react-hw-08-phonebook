import styled from "styled-components";
import { ClassicButton } from "components/GlobalStyles";

export const UserMenuDiv = styled.div`
    display: flex;
    align-items: center;
`;

export const UserEmail = styled.p`
    font-weight: ${p => p.theme.fontWeights.medium};
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.colors.reallyBisque};
    margin-right: ${p => p.theme.space[4]}px;
    cursor: pointer;
    transition: ${p => p.theme.transition.cubicBezier};
    &:hover,
    &:focus {
        text-shadow: ${p => p.theme.shadows.shadowSecond};
    }
`;

export const ButtonForLogOut = styled(ClassicButton)`
    color: ${p => p.theme.colors.almostDarkGreen};
    background-color: ${p => p.theme.colors.almostWhite};
`;
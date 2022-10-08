import styled from "styled-components";

export const UserEmail = styled.p`
    font-weight: ${p => p.theme.fontWeights.medium};
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.colors.reallyBisque};
    margin-right: ${p => p.theme.space[4]}px;
`;

export const ButtonForLogOut = styled.button`
    display: block;
	margin: 0 auto;
    padding: ${p => p.theme.space[3]}px;
    border: ${p => `${p.theme.borders.normal} ${p.theme.colors.almostDarkGreen}`};
    border-radius: ${p => p.theme.radii.sm};
    box-shadow: ${p => p.theme.shadows.shadow};
    cursor: pointer;
    color: ${p => p.theme.colors.almostDarkGreen};
    background-color: ${p => p.theme.colors.clearlyWhite};
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
        transform: scale(1.15);
    }
`;
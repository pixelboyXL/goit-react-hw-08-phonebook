import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const AuthList = styled.ul`
    display: flex;
    justify-content: center;
`;

export const AuthListItem = styled.li`
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
        transform: scale(1.15);
        text-shadow: 0px 5px 10px ${p => p.theme.colors.reallyBisgue};
    }
    &:not(:last-child) {
        margin-right: ${p => p.theme.space[4]}px;
    }
`;

export const AuthTitle = styled(NavLink)`
    font-weight: ${p => p.theme.fontWeights.medium};
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.colors.clearlyWhite};
    &.active {
        color: ${p => p.theme.colors.reallyBisque};
    }
`;
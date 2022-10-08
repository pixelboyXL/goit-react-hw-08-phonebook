import { NavLink } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
// import background from "./images/analogue-gfbc427f4d_1920.jpg";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #88A795;
        /* background-image: url();
        background-repeat: no-repeat;
        background-size: cover; */
    }
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
    h1,h2,h3,h4,h5,h6,p {
        margin: 0;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    a {
        color: ${p => p.theme.colors.justBlack};
        text-decoration: none;
    }
    img {
        display: block;
        max-width: 100%;
        height: auto;
        object-fit: contain;
    }
`;

export const MainTitle = styled.h1`
    text-align: center;
    margin-bottom: ${p => p.theme.space[5]}px;
    color: ${p => p.theme.colors.almostDarkGreen};
`;

export const ContactsTitle = styled.h2`
    text-align: center;
    margin-bottom: ${p => p.theme.space[4]}px;
    color: ${p => p.theme.colors.almostDarkGreen};
`;

export const WarningMessage = styled.p`
    text-align: center;
    font-weight: ${p => p.theme.fontWeights.medium};
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.colors.almostDarkGreen};
`;

export const FallingLinesStyled = {
    color: "#082911",
    width: "70",
    visible: true,
    ariaLabel: 'falling-lines-loading',
};

export const AppBarList = styled.ul`
    display: flex;
    justify-content: center;
`;

export const AppBarItem = styled.li`
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
        transform: scale(1.15);
        text-shadow: 0px 5px 10px ${p => p.theme.colors.reallyBisgue};
    }
    &:not(:first-child) {
        margin-left: ${p => p.theme.space[4]}px;
    }
`;

export const NavTitle = styled(NavLink)`
    font-weight: ${p => p.theme.fontWeights.medium};
    font-size: ${p => p.theme.fontSizes.l};
    color: ${p => p.theme.colors.clearlyWhite};
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &.active {
        color: ${p => p.theme.colors.reallyBisque};
    }
`;
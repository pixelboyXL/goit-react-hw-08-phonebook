import { NavLink } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import background from "./images/laptop-3076957_1920.jpg";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #88A795;
        background-image: linear-gradient(335deg, rgba(0, 0, 0, 0.5) 0%, rgba(94, 94, 98, 0.35) 100%), url(${background});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
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
    color: ${p => p.theme.colors.clearlyWhite};
`;

export const SecondTitle = styled.h2`
    text-align: center;
    margin-bottom: ${p => p.theme.space[4]}px;
    color: ${p => p.theme.colors.clearlyWhite};
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
    transition: ${p => p.theme.transition.cubicBezier};
    &:hover {
        transform: ${p => p.theme.transform.scale};
        text-shadow: ${p => p.theme.shadows.shadowSecond};
    }
    &:not(:first-child) {
        margin-left: ${p => p.theme.space[4]}px;
    }
`;

export const NavTitle = styled(NavLink)`
    font-weight: ${p => p.theme.fontWeights.medium};
    font-size: ${p => p.theme.fontSizes.l};
    color: ${p => p.theme.colors.clearlyWhite};
    transition: ${p => p.theme.transition.cubicBezier};
    &.active {
        color: ${p => p.theme.colors.reallyBisque};
    }
`;

export const ClassicFormStyle = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 280px;
    margin: 0 auto;
    padding: ${p => p.theme.space[5]}px;
    border: ${p => `${p.theme.borders.normal} ${p.theme.colors.almostDarkGreen}`};
    border-radius: ${p => p.theme.radii.sm};
`;

export const ClassicLabelForm = styled.label`
    position: relative;
    font-weight: ${p => p.theme.fontWeights.medium};
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.colors.clearlyWhite};
`;

export const ClassicInputForm = styled.input`
    display: block;
    width: 240px;
    padding-top: 11px;
	padding-bottom: 11px;
	padding-left: 35px;
    margin-top: ${p => p.theme.space[2]}px;
    outline: none;
    border: ${p => `${p.theme.borders.normal} ${p.theme.colors.almostDarkGreen}`};
    border-radius: ${p => p.theme.radii.sm};
    &:first-child {
        margin-bottom: ${p => p.theme.space[4]}px;
    }
`;

export const ClassicButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${p => p.theme.space[3]}px;
    border: ${p => `${p.theme.borders.normal} ${p.theme.colors.almostDarkGreen}`};
    border-radius: ${p => p.theme.radii.sm};
    box-shadow: ${p => p.theme.shadows.shadow};
    cursor: pointer;
    color: ${p => p.theme.colors.maybeYellow};
    background-color: ${p => p.theme.colors.almostDarkGreen};
    transition: ${p => p.theme.transition.cubicBezier};
    &:hover,
    &:focus {
        transform: ${p => p.theme.transform.scale};
        color: ${p => p.theme.colors.almostDarkGreen};
        background-color: ${p => p.theme.colors.maybeYellow};
    }
`;
import styled from "styled-components";

export const FooterWrap = styled.footer`
    position: fixed;
    bottom: 0px;
    width: 1280px;
    height: 55px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: #082911;
`;

export const FooterTitle = styled.p`
    font-weight: ${p => p.theme.fontWeights.medium};
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.colors.clearlyWhite};
    margin-right: ${p => p.theme.space[4]}px;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
        text-shadow: 0px 5px 10px ${p => p.theme.colors.reallyBisgue};
    }
`;

export const FooterOwner = styled.span`
    color: ${p => p.theme.colors.reallyBisque};
`;
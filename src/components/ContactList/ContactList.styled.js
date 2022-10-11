import styled from "styled-components";
import { ClassicButton } from "components/GlobalStyles";

export const ContactListStyle = styled.ul`
    margin-top: ${p => p.theme.space[4]}px;
`;

export const ContactListItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    &:not(:last-child) {
        margin-bottom: 10px;
    }
`;

export const ContactWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;
`;

export const ContactNumber = styled.p`
    font-weight: ${p => p.theme.fontWeights.medium};
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.colors.clearlyWhite};
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
        text-shadow: 0px 5px 10px ${p => p.theme.colors.reallyBisgue};
    }
`;

export const ButtonForDelete = styled(ClassicButton)`
    padding: ${p => p.theme.space[2]}px;
    margin: 0;
    margin-left: 10px;
`;
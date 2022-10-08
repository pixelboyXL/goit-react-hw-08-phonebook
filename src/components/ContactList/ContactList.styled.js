import styled from "styled-components";

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
    width: 400px;
`;

export const ContactNumber = styled.p`
    font-weight: ${p => p.theme.fontWeights.medium};
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.colors.almostDarkGreen};
`;

export const ButtonForDelete = styled.button`
    padding: ${p => p.theme.space[2]}px;
    border: ${p => `${p.theme.borders.normal} ${p.theme.colors.almostDarkGreen}`};
    border-radius: ${p => p.theme.radii.sm};
    box-shadow: ${p => p.theme.shadows.shadow};
    cursor: pointer;
    color: ${p => p.theme.colors.maybeYellow};
    background-color: ${p => p.theme.colors.almostDarkGreen};
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    margin-left: 10px;
    &:hover,
    &:focus {
        transform: scale(1.15);
        color: ${p => p.theme.colors.almostDarkGreen};
        background-color: ${p => p.theme.colors.maybeYellow};
    }
`;
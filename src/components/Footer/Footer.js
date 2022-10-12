import { Box } from "../Box";
import { FooterTitle, FooterOwner, FooterWrap } from "./Footer.styled";
import { GitHubIconStyle, LinkedInIconStyle } from "components/icons/icons.styled";

export const Footer = () => {

    return (
        <FooterWrap>
            <FooterTitle>Powered and designed by <FooterOwner>pixelboyXL</FooterOwner></FooterTitle>
            <Box as="div"
                display="flex"
                alignItems="center">
                <GitHubIconStyle />
                <LinkedInIconStyle />
            </Box>
        </FooterWrap>
    );
};
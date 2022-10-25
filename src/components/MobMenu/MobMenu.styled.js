import { device, ClassicButton } from "components/GlobalStyles";
import styled from "styled-components";

export const MobMenuWrap = styled.div`
    position: fixed;
	background-color: ${p => p.theme.colors.almostDarkGreen};
    background-image: linear-gradient(335deg, rgba(0, 0, 0, 0.5) 0%, rgba(94, 94, 98, 0.5) 100%);
	z-index: 1;
	width: 100vw;
	height: 100vh;
	overflow: auto;
	top: 0;
	left: 0;
	padding-top: 88px;
	padding-bottom: 58px;
	transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
	.div {
		width: 400px;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		@media screen and (min-width: 480px) {
			position: relative;
		}
	}
`;

export const MobMenuOpenButton = styled(ClassicButton)`
    display: none;
    padding: 0;
    height: 40px;
    color: ${p => p.theme.colors.clearlyWhite};
    @media ${device.mobileOnly} {
        display: block;
    }
`;

export const MobMenuCloseButton = styled(ClassicButton)`
    padding: 0;
    height: 40px;
    position: absolute;
	top: 20px;
	right: 22px;
    color: ${p => p.theme.colors.clearlyWhite};
    background-color: transparent;
    outline: none;
    border: none;
`;

export const MobNav = styled.div`
    display: none;
    @media ${device.tablet} {
        display: block;
    }
`;
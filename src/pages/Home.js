import { MainWrap, MainTitle, SecondTitle } from "components/GlobalStyles";
import { NavigateButton } from "components/NavigateButton";

export const Home = () => {
    return (
        <MainWrap>
            <MainTitle>Hello there! 👋</MainTitle>
            <img src="https://media.giphy.com/media/Nx0rz3jtxtEre/giphy.gif" alt="Obi-Wan Kenobi" width="280" height="160" style={{margin: "0 auto"}}/>
            <SecondTitle style={{marginTop: "30px"}}>It seems that you have finally found a site where you can conveniently store all your contacts and have access to them from any device 🎉</SecondTitle>
            <SecondTitle>Ready to work? 🏋️‍♂️</SecondTitle>
            <NavigateButton/>
        </MainWrap>);
};
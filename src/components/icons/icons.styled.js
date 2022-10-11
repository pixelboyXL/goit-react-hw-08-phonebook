import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SearchIcon from '@mui/icons-material/Search';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import styled from 'styled-components';
import { Avatar } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const iconStyle = {
    position: "absolute",
    top: "35px",
    left: "8px",
    fill: "#082911",
    /* transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1), */
};

export const EmailIconStyle = () => <EmailIcon sx={{ ...iconStyle }} />;

export const KeyIconStyle = () => <KeyIcon sx={{ ...iconStyle }} />;

export const PersonIconStyle = () => <PersonIcon sx={{ ...iconStyle }} />;

export const LocalPhoneIconStyle = () => <LocalPhoneIcon sx={{ ...iconStyle }} />;

export const SearchIconStyle = () => <SearchIcon sx={{ ...iconStyle }} />;

export const VisibilityIconStyle = () => <VisibilityIcon sx={{ fill: "#082911" }} />;

export const VisibilityOffIconStyle = () => <VisibilityOffIcon sx={{ fill: "#082911" }} />;

export const AvatarStyle = ({ letter, color }) => <Avatar sx={{ marginRight: "10px", bgcolor: color }}>{letter}</Avatar>;

export const GitHubIconStyle = () =>
    <a href='https://github.com/pixelboyXL'
        target="_blank"
        rel="noopener noreferrer nofollow">
        <GitHubIcon sx={{ width: "40px", height: "40px"}}/>
    </a>
    ;

    export const LinkedInIconStyle = () =>
    <a href='https://www.linkedin.com/in/pixelboyxl/'
        target="_blank"
        rel="noopener noreferrer nofollow">
        <LinkedInIcon sx={{ width: "45px", height: "45px"}}/>
    </a>
;

export const ButtonForVisibility = styled.button`
    position: absolute;
    top: 33px;
    right: 8px;
    cursor: pointer;
    outline: none;
    border: none;
    background: transparent;
`;
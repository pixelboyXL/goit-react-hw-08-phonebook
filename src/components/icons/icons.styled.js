import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SearchIcon from '@mui/icons-material/Search';

const iconStyle = {
    position: "absolute",
    top: "35px",
    left: "8px",
    fill: "#082911",
	/* transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1), */
}

export const EmailIconStyle = () => <EmailIcon sx={{ ...iconStyle }} />;

export const KeyIconStyle = () => <KeyIcon sx={{ ...iconStyle }} />;

export const PersonIconStyle = () => <PersonIcon sx={{ ...iconStyle }} />;

export const LocalPhoneIconStyle = () => <LocalPhoneIcon sx={{ ...iconStyle }} />;

export const SearchIconStyle = () => <SearchIcon sx={{ ...iconStyle }} />;
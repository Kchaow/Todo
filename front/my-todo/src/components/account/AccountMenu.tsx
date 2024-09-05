import { ListItemIcon, Menu, MenuItem } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';


const AccountMenu = (props: {anchorEl: HTMLElement | null, setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>}) => {
    const {anchorEl, setAnchorEl} = props;
    const open = Boolean(anchorEl);

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClick={handleClose}
            onClose={handleClose}
        >
            <MenuItem>
                <ListItemIcon>
                    <LogoutIcon/>
                    Logout
                </ListItemIcon>
            </MenuItem>
        </Menu>
    );
}

export default AccountMenu;
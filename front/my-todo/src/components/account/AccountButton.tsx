import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react';
import {IconButton} from "@mui/material";
import AccountMenu from './AccountMenu';


const AccountButton = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    } 

    return (
        <React.Fragment>
            <IconButton 
                edge="end"
                onClick={handleClick}
                >
                <AccountCircleIcon fontSize="large"/>
            </IconButton>
            <AccountMenu
                setAnchorEl={setAnchorEl}
                anchorEl={anchorEl}
            ></AccountMenu>
        </React.Fragment>
    );
}

export default AccountButton;
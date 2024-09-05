import { AppBar, Toolbar, Typography } from "@mui/material";

import AccountButton from "./account/AccountButton";

const Header = () => {
    return (
            <AppBar position="static">
                <Toolbar sx={{justifyContent: "space-between"}}>
                    <Typography variant="h6">Todo list</Typography>
                    <AccountButton/>
                </Toolbar>
            </AppBar>
    );
}

export default Header;
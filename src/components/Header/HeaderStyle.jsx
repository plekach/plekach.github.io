import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import styled from 'styled-components';
import { BLACK, LIGHT_GREEN, MEDIUM_GREEN } from '../../utils/constants';

export const HContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 80pt;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${MEDIUM_GREEN};
    z-index: 999;
`;

export const NameBlock = styled.a`
    font-family: Montserrat;
    float: left;
    font-size: min(20pt, 6vw);
    background: ${LIGHT_GREEN};
    padding: 10pt 10pt 10pt 10pt;
    margin-left: 20pt;
    border-radius: 25pt;
    border: 1pt solid ${LIGHT_GREEN};
    color: ${BLACK};
    text-decoration: none;
`;

export function MenuDropdown() {
    const [anchorEl, setAnchorEl] =useState(null);

    const navigate = useNavigate();
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', marginRight: "10pt"}}>
                <IconButton
                onClick={handleClick}
                size="large"
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                >
                    <MenuIcon fontSize={"large"} sx={{color: BLACK}}/>
                </IconButton>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                Paper
                >
                    <MenuItem  onClick={() => {document.getElementById("Home").scrollIntoView({behavior: "smooth"})}}>
                        Home
                    </MenuItem>
                    <MenuItem  onClick={() => {document.getElementById("About").scrollIntoView({behavior: "smooth"})}}>
                        About
                    </MenuItem>
                    <MenuItem  onClick={() => {document.getElementById("MyWork").scrollIntoView({behavior: "smooth"})}}>
                        My Work
                    </MenuItem>
                    <MenuItem  onClick={() => {document.getElementById("Contact").scrollIntoView({behavior: "smooth"})}}>
                        Contact
                    </MenuItem>

            </Menu>
        </React.Fragment>
    );
}
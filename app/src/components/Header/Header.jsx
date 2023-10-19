import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, IconButton, Tooltip } from '@mui/material';


export default function Header() {
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
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            <Tooltip title="Navigation">
                <IconButton
                onClick={handleClick}
                size="small"
                aria-controls={open ? 'navigation' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                >
                <MenuIcon />
                </IconButton>
            </Tooltip>
            </Box>
        </React.Fragment>
    );
}

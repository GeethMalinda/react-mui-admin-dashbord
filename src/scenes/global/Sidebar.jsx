import React, {useState} from 'react';
import "react-pro-sidebar/dist/css/styles.css";
import {Typography,Box,IconButton,useTheme} from "@mui/material";
import {Link} from "react-router-dom"
import {tokens} from "../../theme";

const Sidebar = () => {
    const theme =  useTheme();
    const colors = tokens(theme.palette.mode)
    const [isCollapsed ,  setIsCollapsed] = useState(false);
    const [selected ,  setSelected] = useState("Dashboard");

    return (
        <Box>
            sx = {{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`
                },
            "& .pro-icon-wrapper": {
                    backgroundColor:"transparent !important"
            },
            "& .pro-inner-item": {
                padding:"5px 35px 5px 20px !important"
            },
            "& .pro-inner-item:hover": {
                color:"#868dfb !important"
            },
            "& .pro-inner-item:active": {
                color:"#6870fa !important"
            },
        }}
        </Box>
    );
};

export default Sidebar;
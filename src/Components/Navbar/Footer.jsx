import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";


import {

  Box,
  Button,
  Grid,
  CardMedia,
  Typography,

} from "@mui/material";


function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,

  window: PropTypes.func,
};

export default function Footer(props) {
const [anchorEl, setAnchorEl] = useState(null)
  const [noanchorEl, setNoanchorEl] = useState(null);

  const notifictionClick = (event) => {
    setNoanchorEl(noanchorEl ? null : event.currentTarget);
  };

  const opens = Boolean(noanchorEl);
  const id = opens ? "simple-popper" : undefined;

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  useEffect(() => {
    // console.log(auth)


  
  }, []);

  return (
<>
   <Box sx={{ background: "#262626",paddingRight:"0px!important",py:2,  display: { xs: "none", lg: "block" },}}>
            <Grid item lg={12} container>
              <Grid item lg={2}>
                <Box display="flex">
                  <Box>
                    <CardMedia
                      component="img"
                      image="https://www.insaid.co/wp-content/uploads/2021/01/white-logo.png"
                      alt="green iguana"
                      sx={{
                      
                        width: 100,
                        py: 1,
                        objectFit: "unset",
                        ml:3,
                      }}
                    />
               </Box>
          
               </Box>
               </Grid>
               <Grid item lg={10}>
                <Box>
                    <Typography sx={{float:"right",color:"#fff",mr:3,mt:2}}>© 2023 INSAID. All Rights Reserved</Typography>
                </Box>
               </Grid>
               </Grid>
               </Box>
               <Box sx={{ background: "#262626",paddingRight:"0px!important",py:2,  display: { xs: "block", lg: "none" },}}>
               <Grid item lg={12} container>
                 <Grid item xs={12}>
                   <Box >
                     <Box>
                     <center> <CardMedia
                         component="img"
                         image="https://www.insaid.co/wp-content/uploads/2021/01/white-logo.png"
                         alt="green iguana"
                         sx={{
                         
                           width: 100,
                           py: 1,
                           objectFit: "unset",
      
                         }}
                       /></center> 
                  </Box>
             
                  </Box>
                  </Grid>
                  <Grid item xs={12}>
                   <Box>
                       <Typography sx={{textAlign:"center",color:"#fff",mr:3,mt:2}}>© 2023 INSAID. All Rights Reserved</Typography>
                   </Box>
                  </Grid>
                  </Grid>
                  </Box>
                  </>
       
       
   
  );
}

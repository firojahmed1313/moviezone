import React from "react";
import "./admind.css";

import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import picture from "../../assets/avatar.png";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
const AdminUserSection = () => {
  
  return (

    (<>
      
      <div className="userAdmin">
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
           
        >
          <Avatar  alt="Remy Sharp" src={picture} sx={{ width: 106, height: 106 }}/>
        </StyledBadge>
        <div className="adminName">
            <h2>  Admin</h2>
            <p> Admin.admin@moviezone.com</p>
        </div>
        
      </div>
      
    </>)
  );
};

export default AdminUserSection;
/*isAuthenticated &&*/
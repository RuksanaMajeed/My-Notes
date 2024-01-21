import { Box } from "@mui/material";
import React from "react";
import SideNav from "../NavBar/SideVav";

const About: React.FC<IProps> = (props) => {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <h1>About</h1>
      </Box>
    </div>
  );
};

interface IProps {}

export default About;

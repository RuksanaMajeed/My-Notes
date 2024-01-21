import * as React from "react";
import { Drawer, Box, IconButton, List, ListItemButton } from "@mui/material";
import { Menu } from "@mui/icons-material";

const NavBar: React.FC<IProps> = (props) => {
  return (
    <Drawer
      open={props.open}
      onClose={() => props.setOpen(false)}
      anchor="left"
      // sx={{
      //   width: "200px"
      // }}
      variant="permanent"
      style={{
        width: "200px",
      }}
      sx={{
        width: "200px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.5,
          ml: "auto",
          mt: 1,
          mr: 2,
          width: "200px",
        }}
      >
        <IconButton
          color="primary"
          className="menuButton"
          onClick={() => props.setOpen(false)}
        >
          <Menu />
        </IconButton>
      </Box>
      <List
        component="nav"
        sx={{
          flex: "none",
          fontSize: "xl",
          "& > div": { justifyContent: "center" },
        }}
      >
        <ListItemButton>Home</ListItemButton>
        <ListItemButton>About</ListItemButton>
        <ListItemButton>Studio</ListItemButton>
        <ListItemButton>Contact</ListItemButton>
      </List>
    </Drawer>
  );
};

export default NavBar;
interface IProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

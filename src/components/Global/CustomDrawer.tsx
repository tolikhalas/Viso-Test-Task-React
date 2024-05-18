import { useState } from "react";

import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

import MenuIcon from "@mui/icons-material/Menu";

export default function CustomDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawler = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={toggleDrawler}>
        <MenuIcon />
      </button>
      <Drawer open={isDrawerOpen} onClose={toggleDrawler} direction="left">
        <div>bla bla bla</div>
      </Drawer>
    </>
  );
}

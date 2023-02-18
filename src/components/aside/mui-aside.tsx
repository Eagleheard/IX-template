import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import { MuiAccordion } from "components/accordeon";
import { Dropdown } from "components/dropdown";

import "./style.scss";

export const MuiAside = () => {
  return (
    <Box
      className="aside"
      component="aside"
      sx={{
        boxShadow: 3,
      }}
    >
      <List>
        <MuiAccordion />
        <Dropdown />
      </List>
      <Divider />
    </Box>
  );
};

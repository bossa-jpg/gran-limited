import React, { useState } from "react";
import { HeaderProps } from "./types";
import LanguageIcon from "@mui/icons-material/Language";
import { LANGUAGE_OPTIONS } from "./constants";
import {
  AppBar,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Toolbar,
  Typography,
} from "@mui/material";

export const Header: React.FC<HeaderProps> = ({ title = "DASHBOARD" }) => {
  const [selectedLang, setSelectedLang] = useState(LANGUAGE_OPTIONS[0].code);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedLang(event.target.value);
  };

  return (
    <AppBar
      position="static"
      elevation={1}
      sx={{
        backgroundColor: "white",
        color: "text.primary",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component="h1"
          sx={{
            ml: 2,
            fontSize: "24px",
            fontWeight: 600,
            color: "#2c3e50",
          }}
        >
          {title}
        </Typography>
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <Select
            value={selectedLang}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            startAdornment={
              <LanguageIcon
                fontSize="medium"
                sx={{ mr: 1, color: "text.secondary" }}
              />
            }
          >
            {LANGUAGE_OPTIONS.map((language) => (
              <MenuItem key={language.code} value={language.code}>
                {language.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Toolbar>
    </AppBar>
  );
};

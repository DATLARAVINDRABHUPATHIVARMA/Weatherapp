import React from "react";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "10px",
        padding: "10px",
        marginLeft: "30px",
        marginRight: "30px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
        <FilterDramaIcon />
        <p style={{ fontWeight: "bold", fontSize: "20px" }}>Weather</p>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <TextField
          style={{
            backgroundColor: "white",
            borderRadius: "2rem",
            width: "24rem",
          }}
          placeholder="Search city"
          variant="outlined"
        />
        <Button
          variant="contained"
          style={{ borderRadius: "6px", backgroundColor: "#4B5550" }}
        >
          Search
        </Button>
      </div>
      <div
        style={{
          marginTop: "1rem",
          fontSize: "16px",
          fontWeight: "700",
          backgroundColor: "#4B5550",
          height: "35px",
          width: "150px",
          color: "white",
          gap: "2px",
          borderRadius: "6px",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <GpsFixedIcon />
        <p style={{ fontSize: "14px" }}>Current Location</p>
      </div>
    </nav>
  );
}

export default Navbar;

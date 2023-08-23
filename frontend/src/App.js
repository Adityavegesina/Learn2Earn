import { Link } from "react-router-dom";
import { Button, Box, AppBar, Typography } from "@mui/material";
import { FaMoneyBillAlt, FaDollarSign, FaBook } from "react-icons/fa";

function App() {
  const landingImg = {
    margin: "30px",
    borderRadius: "30px",
  };
  return (
    <>
      <Box
        sx={{
          height: "72px",
          width: "100%",
          backgroundColor: "#212A3E",
          display: "flex",
          justifyContent: "space-between",
          color: "#FFFFFF",
          alignItems: "center",
          position: "fixed",
          overflow: "hidden",
        }}
      >
        <Box sx={{ marginLeft: "40px", fontSize: "28px" }}> Learn2Earn</Box>
        <Box>
          <Link to="/learning1">
            <Button
              sx={{
                color: "white",
                marginRight: "10px",
                ":hover": { backgroundColor: "#394867" },
              }}
            >
              Learning
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              sx={{
                color: "white",
                marginRight: "10px",
                ":hover": { backgroundColor: "#394867" },
              }}
            >
              Contact Us
            </Button>
          </Link>
        </Box>
        <Box sx={{ marginRight: "40px" }}>
          <Link to="/loginpage">
            <Button
              sx={{
                color: "white",
                marginRight: "10px",
                ":hover": { backgroundColor: "#394867" },
              }}
            >
              Login
            </Button>
          </Link>
          <Link to="/registerpage">
            <Button
              sx={{
                color: "white",
                marginRight: "10px",
                ":hover": { backgroundColor: "#394867" },
              }}
            >
              Register
            </Button>
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          paddingTop: "72px",

          height: "100vh",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <img
          src="https://t3.ftcdn.net/jpg/00/79/30/70/360_F_79307060_kSNACcrg7cM4C2kCdeV2vgt9SiGQtnDU.jpg"
          style={{ maxWidth: "80%", maxHeight: "100%" }}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* <h2 style={{ marginLeft: "100px" }}>About Us</h2> */}
          <div className="card">
            <div
              className="card-icon circular-icon"
              style={{ backgroundColor: "#394867" }}
            >
              <FaDollarSign />
            </div>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Finance</p>
            <p style={{ marginTop: "-15px", textAlign: "left" }}>
              The study and discipline of money, currency and capital assets.
            </p>
          </div>
          <div className="card">
            <div
              className="card-icon circular-icon"
              style={{ backgroundColor: "#394867" }}
            >
              <FaBook />
            </div>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Learning</p>
            <p style={{ marginTop: "-15px", textAlign: "left" }}>
              Finance learning involves acquiring knowledge and skills related
              to various aspects of finance, including personal finance,
              corporate finance, investments, financial markets, and more.{" "}
            </p>
          </div>
        </div>
      </Box>
    </>
  );
}

export default App;

import React from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  TextField,
  IconButton,
} from "@mui/material";
import { FaEnvelope, FaPhone, FaIdCard, FaBook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./learning.css";
// import Helper from "./helper";
const Learning1 = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  return (
    <Box>
      <Box
        sx={{
          height: "72px",
          width: "100%",
          backgroundColor: "#212A3E",
          display: "flex",
          justifyContent: "space-evenly",
          color: "#FFFFFF",
          alignItems: "center",
          position: "fixed",
          overflow: "hidden",
          color: "#FFFFFF",
        }}
      >
        <IconButton
          onClick={handleBack}
          sx={{ color: "white", marginLeft: "-760px" }}
        >
          <KeyboardBackspaceIcon sx={{ fontSize: "52px" }} />
        </IconButton>
        <Button sx={{ color: "white", fontSize: "22px" }}>Learning</Button>
      </Box>
      <Box sx={{ paddingTop: "72px" }}>
        {/* <Typography
          sx={{
            fontSize: "20px",
            marginLeft: "650px",
            fontWeight: "bold",
            marginTop: "30px",
          }}
        >
          Important Terminology
        </Typography> */}
        {/* <Helper /> */}

        <div className="card-container">
          <div className="card">
            <div className="card-icon circular-icon">
              <FaBook />
            </div>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Annual Fee</p>
            <p style={{ marginTop: "-15px", textAlign: "left" }}>
              The amount that credit card companies charge for the use of a
              credit card.
            </p>
          </div>

          <div className="card">
            <div className="card-icon circular-icon">
              <FaBook />
            </div>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Assets</p>
            <p style={{ marginTop: "-15px", textAlign: "left" }}>
              What a person owns, such as cash, stocks, bonds, real estate, and
              personal possessions.
            </p>
          </div>

          <div className="card">
            <div className="card-icon circular-icon">
              <FaBook />
            </div>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Bank</p>
            <p style={{ marginTop: "-15px", textAlign: "left" }}>
              A for-profit company that is owned by its stockholders and
              provides saving and checking accounts and other financial services
              to its customers.
            </p>
          </div>

          <div className="card">
            <div className="card-icon circular-icon">
              <FaIdCard />
            </div>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Bankruptcy</p>
            <p style={{ marginTop: "-15px", textAlign: "left" }}>
              Legal process for selling most of the debtor’s property to help
              satisfy debts that can’t be repaid, in exchange for (a) relieving
              debtors of the responsibility of paying their financial
              obligations or (b) protecting them while a plan is created and
              they try to repay debts.
            </p>
          </div>

          <div className="card">
            <div className="card-icon circular-icon">
              <FaBook />
            </div>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Bond </p>
            <p style={{ marginTop: "-15px", textAlign: "left" }}>
              A formal agreement where you lend money to a borrower who can then
              use that money for a set period of time. In exchange, you as the
              lender will get paid a specific amount of interest.
            </p>
          </div>

          <div className="card">
            <div className="card-icon circular-icon">
              <FaIdCard />
            </div>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Borrower</p>
            <p style={{ marginTop: "-15px", textAlign: "left" }}>
              an individual, business or government that has received and used
              something belonging to somebody else, with the intention of
              returning or repaying it - often with interest in the case of
              borrowed money
            </p>
          </div>

          <div className="card">
            <div className="card-icon circular-icon">
              <FaIdCard />
            </div>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Budget</p>
            <p style={{ marginTop: "-15px", textAlign: "left" }}>
              A plan for managing money, dividing up expected income and
              expenses among spending and saving options based on personal goals
              during a given time period.
            </p>
          </div>
          <div className="card">
            <div className="card-icon circular-icon">
              <FaIdCard />
            </div>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Capacity</p>
            <p style={{ marginTop: "-15px", textAlign: "left" }}>
              Ability to repay a loan from present income; one of three factors
              in credit scoring.
            </p>
          </div>

          <div className="card">
            <div className="card-icon circular-icon">
              <FaIdCard />
            </div>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Capital</p>
            <p style={{ marginTop: "-15px", textAlign: "left" }}>
              The value of personal items that one owns, including savings,
              investments, and property, one of three factors used in credit
              scoring.
            </p>
          </div>

          <div className="card">
            <div className="card-icon circular-icon">
              <FaIdCard />
            </div>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Capital Gain</p>
            <p style={{ marginTop: "-15px", textAlign: "left" }}>
              The difference between the purchase price and the selling price
              when an investor buys a sock and later sells it at a higher price.
            </p>
          </div>

          <div className="card">
            <div className="card-icon circular-icon">
              <FaIdCard />
            </div>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Capital Loss</p>
            <p style={{ marginTop: "-15px", textAlign: "left" }}>
              The difference when an investor ends up selling a stock at a lower
              price than the purchase price.
            </p>
          </div>

          <div className="card">
            <div className="card-icon circular-icon">
              <FaIdCard />
            </div>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Credit</p>
            <p style={{ marginTop: "-15px", textAlign: "left" }}>
              Amount of money a creditor is willing to loan another to purchase
              goods and services, based on trust and the expectation that the
              money will be repaid as promised with interest.
            </p>
          </div>

          <div className="card">
            <div className="card-icon circular-icon">
              <FaIdCard />
            </div>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Bank</p>
            <p style={{ marginTop: "-15px", textAlign: "left" }}>
              {" "}
              A for-profit company that is owned by its stockholders and
              provides saving and checking accounts and other financial services
              to its customers.
            </p>
          </div>
          <div className="card">
            <div className="card-icon circular-icon">
              <FaIdCard />
            </div>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Credit Card</p>
            <p style={{ marginTop: "-15px", textAlign: "left" }}>
              Card that enables holder to charge expenses for purchases or to
              get money, often with interest; synonymous with “buy now, pay
              later.”
            </p>
          </div>
          <div className="card">
            <div className="card-icon circular-icon">
              <FaIdCard />
            </div>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Debit Card</p>
            <p style={{ marginTop: "-15px", textAlign: "left" }}>
              A card used to pay for goods and services directly from a checking
              account by transferring funds electronically from one’s checking
              account to the store’s account to pay for a purchase; also called
              check cards.
            </p>
          </div>
          <div className="card">
            <div className="card-icon circular-icon">
              <FaIdCard />
            </div>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Depreciation</p>
            <p style={{ marginTop: "-15px", textAlign: "left" }}>
              Decline in a product’s value that starts the moment a product is
              purchased (car).
            </p>
          </div>

          <div className="card">
            <div className="card-icon circular-icon">
              <FaIdCard />
            </div>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Debt</p>
            <p style={{ marginTop: "-15px", textAlign: "left" }}>
              The entire amount of money owed to lenders.
            </p>
          </div>

          <div className="card">
            <div className="card-icon circular-icon">
              <FaIdCard />
            </div>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>
              Diversification
            </p>
            <p style={{ marginTop: "-15px", textAlign: "left" }}>
              The portion of the profits paid to the shareholders of a company.
            </p>
          </div>

          <div className="card">
            <div className="card-icon circular-icon">
              <FaIdCard />
            </div>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>
              Dollar Cost Averaging
            </p>
            <p style={{ marginTop: "-15px", textAlign: "left" }}>
              The practice of investing a fixed amount into the same investment
              at regular intervals, regardless of what the stock market is
              doing.
            </p>
          </div>

          <div className="card">
            <div className="card-icon circular-icon">
              <FaIdCard />
            </div>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>
              arned Interest
            </p>
            <p style={{ marginTop: "-15px", textAlign: "left" }}>
              The payment you receive for allowing a financial institution or
              corporation to use your money.
            </p>
          </div>

          <div className="card">
            <div className="card-icon circular-icon">
              <FaIdCard />
            </div>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>
              Employee benefits
            </p>
            <p style={{ marginTop: "-15px", textAlign: "left" }}>
              {" "}
              Additional benefits, beyond a paycheck, offered by employers
              (e.g., health insurance or pension plan).
            </p>
          </div>

          <div className="card">
            <div className="card-icon circular-icon">
              <FaIdCard />
            </div>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Endorse</p>
            <p style={{ marginTop: "-15px", textAlign: "left" }}>
              To sign the back of a check to make it payable to the specified
              payee.
            </p>
          </div>

          <div className="card">
            <div className="card-icon circular-icon">
              <FaIdCard />
            </div>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>
              Time value of money{" "}
            </p>
            <p style={{ marginTop: "-15px", textAlign: "left" }}>
              The relationship between time, money, and rate of return
              (interest), and their effect on earnings growth. The more time,
              money, and rate of interest, the more money yielded at the end of
              a period of time.
            </p>
          </div>

          <div className="card">
            <div className="card-icon circular-icon">
              <FaIdCard />
            </div>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>
              Risk management
            </p>
            <p style={{ marginTop: "-15px", textAlign: "left" }}>
              Deliberately and systematically using various strategies for
              controlling against potential personal or financial loss from pure
              risks.
            </p>
          </div>

          <div className="card">
            <div className="card-icon circular-icon">
              <FaIdCard />
            </div>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>
              Savings Account{" "}
            </p>
            <p style={{ marginTop: "-15px", textAlign: "left" }}>
              An account you have at a financial institution that helps you
              accumulate and save money and earn interest at the same time.
            </p>
          </div>

          <div className="card">
            <div className="card-icon circular-icon">
              <FaIdCard />
            </div>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>
              Social security{" "}
            </p>
            <p style={{ marginTop: "-15px", textAlign: "left" }}>
              The federal government’s basic program for providing income when
              earnings are reduced or stopped because of retirement, or
              disability. Income is also provided to families when the working
              parent(s) dies and underage children are a part of the family.
            </p>
          </div>

          <div className="card">
            <div className="card-icon circular-icon">
              <FaIdCard />
            </div>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Taxes</p>
            <p style={{ marginTop: "-15px", textAlign: "left" }}>
              A compulsory payment by individual/organizations to the
              government; fees placed on income, property, or goods to support
              government programs.
            </p>
          </div>

          <div className="card">
            <div className="card-icon circular-icon">
              <FaIdCard />
            </div>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Stock Market</p>
            <p style={{ marginTop: "-15px", textAlign: "left" }}>
              The place where stocks are bought and sold.
            </p>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Learning1;

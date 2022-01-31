import React from "react";
import { Box, Container } from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import TransactionForm from "../../components/transactionForm/TransactionForm";
import "./addTransactionPage.scss";

const AddTransactionPage: React.FunctionComponent = () => {
  return (
    <>
      <Navbar />
      <Container className="transaction-form-container">
        <Box sx={{ mt: 10 }}>
          <TransactionForm />
        </Box>
      </Container>
    </>
  );
};

export default AddTransactionPage;

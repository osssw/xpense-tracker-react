import React from "react";
import { Box, Container } from "@mui/material";
import TransactionForm from "../../components/transactionForm/TransactionForm";
import "./addTransactionPage.scss";
import { Category, TransactionContext } from "../../provider/Transaction";

const AddTransactionPage: React.FunctionComponent = () => {
  const { getAllCategories } = React.useContext(TransactionContext);
  const [categories, setCategories] = React.useState<Category[]>([]);

  React.useEffect(() => {
    getAllCategories().then(setCategories);
  }, []);

  return (
    <Container className="transaction-form-container">
      <Box sx={{ mt: 10 }}>
        <TransactionForm categories={categories} />
      </Box>
    </Container>
  );
};

export default AddTransactionPage;

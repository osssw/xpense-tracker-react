import React from "react";
import { Box, Button, Container } from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import {
  Category,
  Transaction as TransactionType,
  TransactionContext,
} from "../../provider/Transaction";
import "./profilePage.scss";
import Transaction from "../../components/transaction/Transcation";

const ProfilePage: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const { getAllTransactions, getAllCategories } =
    React.useContext(TransactionContext);
  const [transactions, setTransactions] = React.useState<TransactionType[]>();
  const [categories, setCategories] = React.useState<Category[]>();

  React.useEffect(() => {
    getAllTransactions().then((allTransactions) => {
      setTransactions(allTransactions);
    });
    getAllCategories().then((allCategories) => {
      setCategories(allCategories);
    });
  }, []);

  const handleAddTransactionClick = () => {
    navigate("/add_transaction");
  };

  return (
    <div className="profile-page">
      <Navbar />
      <Container>
        <Box sx={{ mt: 10, mb: 10 }}>
          {transactions?.map((transaction) => (
            <Transaction
              key={transaction.id}
              transaction={{
                ...transaction,
                title:
                  categories?.find(
                    (category) => category.id === transaction.categoryId
                  )?.title || "",
              }}
            />
          ))}
          <Box sx={{ mx: "auto" }}>
            <Button
              onClick={handleAddTransactionClick}
              className="profile-page__add-button"
              variant="contained"
            >
              Add transaction
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default ProfilePage;

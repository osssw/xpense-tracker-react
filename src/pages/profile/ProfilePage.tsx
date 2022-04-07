import React from "react";
import { Box, Container } from "@mui/material";
import {
  Category,
  Transaction as TransactionType,
  TransactionContext,
} from "../../provider/Transaction";
import Transaction from "../../components/transaction/Transcation";

const ProfilePage: React.FunctionComponent = () => {
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

  return (
    <Container sx={{ p: 0 }} className="profile-page">
      <Box sx={{ mt: 10 }}>
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
      </Box>
    </Container>
  );
};

export default ProfilePage;

import { Paper } from "@mui/material";
import React from "react";
import {
  Category,
  Transaction as TransactionType,
} from "../../provider/Transaction";
import "./transaction.scss";

type Props = {
  transaction: TransactionType & Partial<Category>;
};

const Transaction: React.FunctionComponent<Props> = ({ transaction }) => {
  return (
    <Paper elevation={3} className="transaction-card">
      <div className="transaction-card__amount">
        Amount: {transaction.amount} RUB
      </div>
      <div>Category: {transaction.title}</div>
    </Paper>
  );
};

export default Transaction;

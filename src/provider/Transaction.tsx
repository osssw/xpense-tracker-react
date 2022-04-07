import React from "react";
import { getCategories } from "../api/categories";
import {
  getTransactions,
  postTransaction,
  TransactionPostData,
} from "../api/transactions";

export const TransactionContext = React.createContext<TransactionProvider>(
  {} as TransactionProvider
);

interface TransactionProvider {
  saveTransaction: (transaction: TransactionPostData) => void;
  getAllCategories: () => Promise<Category[]>;
  getAllTransactions: () => Promise<Transaction[]>;
}

export type Transaction = {
  amount: number;
  categoryId: string;
  id: string;
  createdAt?: Date;
};

export type Category = {
  id: string;
  title: string;
  description: string;
};

const TransactionProvider: React.FunctionComponent = ({ children }) => {
  const saveTransaction = async (transaction: TransactionPostData) => {
    await postTransaction(transaction);
  };

  const getAllCategories = async () => {
    return await getCategories();
  };

  const getAllTransactions = async () => {
    return await getTransactions();
  };

  return (
    <TransactionContext.Provider
      value={{ saveTransaction, getAllCategories, getAllTransactions }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;

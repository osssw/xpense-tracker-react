import { AxiosResponse } from "axios";
import { Transaction } from "../provider/Transaction";
import { apiUrl } from "./api";
import axiosConfig from "./axiosConfig";

export type TransactionPostData = {
  amount: number;
  categoryId: string;
};

type TransactionResponseData = {
  amount_cents: number;
  id: string;
  created_at: Date;
  category_id: string;
};

export type TransactionsResponseData = {
  transactions: TransactionResponseData[];
};

export const postTransaction = (
  transaction: TransactionPostData
): Promise<AxiosResponse<any, any>> => {
  return axiosConfig.post(`${apiUrl}/transactions`, {
    amount_cents: transaction.amount * 100,
    amount_currency: "RUB",
    category_id: transaction.categoryId,
  });
};

export const getTransactions = (): Promise<Transaction[]> => {
  return axiosConfig
    .get<TransactionsResponseData>(`${apiUrl}/transactions`)
    .then((response) =>
      response.data.transactions.map((transaction) => ({
        amount: transaction.amount_cents / 100,
        id: transaction.id,
        createdAt: transaction.created_at,
        categoryId: transaction.category_id,
      }))
    );
};

import React from "react";
import Stack from "@mui/material/Stack";
import {
  FormControl,
  InputLabel,
  LinearProgress,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Error from "../common/error/Error";
import ContainedButton from "../common/button/Button";
import { Category, TransactionContext } from "../../provider/Transaction";
import "./transactionForm.scss";
import { getErrorString } from "../../service/error";

type Props = {
  categories: Category[];
};

const TransactionForm: React.FunctionComponent<Props> = ({ categories }) => {
  const { saveTransaction } = React.useContext(TransactionContext);
  const navigate = useNavigate();

  const [amount, setAmount] = React.useState<string>("0");
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>("");
  const [chosenCategory, setChosenCategory] = React.useState<string>("");

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    setError("");
    setChosenCategory(event.target.value);
  };

  const handleFormSubmit = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setLoading(true);
    try {
      await saveTransaction({
        amount: Number(amount),
        categoryId: chosenCategory || "",
      });
      navigate("/profile");
    } catch (error) {
      const errors = error.response.data.transaction.errors;
      console.log(Object.values(errors));
      if (errors) {
        const errorString = getErrorString(errors);
        setError(errorString);
      }
      setLoading(false);
    }
  };

  return (
    <Stack spacing={2}>
      <TextField
        placeholder="Amount spent (RUB)"
        value={amount}
        onChange={handleAmountChange}
        type="number"
        required={true}
      />
      <FormControl>
        <InputLabel id="transaction-category" className="category-label">
          Category
        </InputLabel>
        <Select
          label="Category"
          labelId="transaction-category"
          value={chosenCategory}
          onChange={handleCategoryChange}
          required={true}
        >
          {categories?.map((category) => (
            <MenuItem key={category.id} value={category.id}>
              {category.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <ContainedButton onClick={handleFormSubmit}>Save</ContainedButton>
      )}
      {error && <Error text={error} />}
    </Stack>
  );
};

export default TransactionForm;

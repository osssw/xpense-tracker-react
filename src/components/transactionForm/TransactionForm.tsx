import React from "react";
import Stack from "@mui/material/Stack";
import {
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

const TransactionForm: React.FunctionComponent = () => {
  const { saveTransaction, getAllCategories } =
    React.useContext(TransactionContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    getAllCategories().then((categories) => setCategories(categories));
  }, []);

  const [amount, setAmount] = React.useState<string>("");
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [isError, setError] = React.useState<boolean>(false);
  const [categories, setCategories] = React.useState<Category[]>();
  const [chosenCategory, setChosenCategory] = React.useState<string>("");

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
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
      console.error(error);
      setError(true);
    }
    setLoading(false);
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
      <Select
        label="Category"
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
      {isLoading ? (
        <LinearProgress />
      ) : (
        <ContainedButton onClick={handleFormSubmit}>Save</ContainedButton>
      )}
      {isError && <Error text="Something went wrong" />}
    </Stack>
  );
};

export default TransactionForm;

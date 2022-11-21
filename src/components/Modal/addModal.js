import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Modal } from "./Modal";
import { AddButton } from "../ButtonModal/ButtonModal";
import { AiOutlineDown } from "react-icons/ai";

import {
  Container,
  ButtonClose,
  Div,
  Title,
  Text,
  RadioButton,
} from "./Modal.styled";
import { Calendar } from "./Calendar";
import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";

export const ModalAddTransaction = () => {
  const [category, setCategory] = useState("");
  const [list, setList] = useState(false);
  const [calendar, setCalendar] = useState("");
  const [suma, setSuma] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [emptyInput, setEmptyInput] = useState(false);

  const pageLocation = useLocation().pathname;

  let products;

  const handleSubmitForm = (evt) => {
    evt.preventDefault();

    if (!calendar) {
      setEmptyInput(true);
      return;
    }
    if (!category) {
      setEmptyInput(true);
      return;
    }
    if (!suma) {
      setEmptyInput(true);
      return;
    }
    // const items = {
    //   description: description,
    //   amount: Number(suma),
    //   date: startDate.toISOString().slice(0, 10),
    //   category: category,
    // };

    //   if (pageLocation === '/expenses') {
    //     dispatch(expensePost(items));
    //   }
    //   if (pageLocation === '/income') {
    //     dispatch(incomePost(items));
    //   }

    //   handleResetForm();
  };

  const handleIsListTogle = () => {
    setList(!list);
  };

  const handleCloseByDrope = (evt) => {
    if (evt.target === evt.currentTarget) {
      setList(!list);
    }
  };

  const handleChangeForm = (evt) => {
    const { value, name } = evt.target;
    switch (name) {
      case "calendar":
        setCategory(value);
        break;
      case "category":
        setCategory(value);
        break;
      case "sum":
        setSuma(value);
        break;
      default:
        return;
    }
  };

  return (
    <Modal>
      <Div>
        <ButtonClose>
          <AiOutlineClose
            sx={{
              width: 16,
              height: 16,
              color: "#000000",
            }}
          />
        </ButtonClose>
      </Div>
      <Container>
        <Title>Add transaction</Title>
        {/* <RadioButton>
          <Text>Income</Text>
          <AddButton />
          <Text>Expense</Text>
        </RadioButton> */}

        <form onSubmit={handleSubmitForm}>
          <input
            placeholder="Select a category"
            autoComplete="off"
            type="text"
            name="category"
            value={category}
            onChange={handleChangeForm}
          />

          <button onClick={handleIsListTogle} type="button">
            <AiOutlineDown
              sx={{
                width: 16,
                height: 9,
                color: "black",
                backgraundColor: "white",
              }}
            />
            {category ?? <p>{category}</p>}
          </button>
          {list && (
            <>
              <div onClick={handleCloseByDrope}></div>
              <ul>
                {products.map((el, id) => (
                  <li
                    value={el}
                    key={id}
                    onClick={() => {
                      setCategory(el);
                      handleIsListTogle();
                    }}
                  >
                    {el}
                  </li>
                ))}
              </ul>
            </>
          )}

          <div>
            <input
              placeholder="0,00"
              type="number"
              name="suma"
              value={suma}
              onChange={handleChangeForm}
            />
          </div>
          <Calendar startDate={startDate} setStartDate={setStartDate} />
        </form>
      </Container>
    </Modal>
  );
};

export default ModalAddTransaction;

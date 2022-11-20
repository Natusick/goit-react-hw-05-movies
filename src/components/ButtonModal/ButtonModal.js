import { ImPlus } from "react-icons/im";
import { HiMinus } from "react-icons/hi";
import { useState } from "react";
import {ModalAddTransaction} from '../Modal/addModal';
import {  BasicButton,
  Div,
  
} from "./Button.styled";
import { BarsSpinner } from "react-spinners-kit";

const Button = ({ type = "button", children }) => {
  return (
    <BasicButton type={type}>{children}
    </BasicButton>
    )
};

const AddButton = ({children}) => {
  return(
<BasicButton />
  )
} 
const ButtonAddTransactions = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);

    const handleModalToggle = () => {
  
      setOpenModal(prev => {
        document.body.className = prev ? "" : "no-scroll";
        return !prev;
      });
    };

  return (
    <Div>
      <BasicButton >
        <ImPlus
          sx={{
            width: 44,
            height: 44,
          }}
        />
       <ModalAddTransaction />
      </BasicButton>
    </Div>
  );
};

const ExpenseButton = ({ children }) => {
  return (
    <BasicButton>
      <HiMinus
        sx={{
          width: 44,
          height: 44,
        }}
      />
    </BasicButton>
  );
};

export { ButtonAddTransactions, ExpenseButton, Button, AddButton };

// import { useState } from "react";
// import { ImPlus } from 'react-icons/im';
// import {Div, Button} from './Button.styled'
// import ModalAddTransaction from "../Modal/Modal";

// export const ButtonAddTransactions = () => {
//   const [openModal, setOpenModal] = useState(false);

//   const handleModalToggle = () => {

//     setOpenModal(prev => {
//       document.body.className = prev ? "" : "no-scroll";
//       return !prev;
//     });
//   };
//   return (
//     <Div>
//       <Button type="button" onClick={handleModalToggle}>
//         <ImPlus />
//       </Button>
//       {openModal && <ModalAddTransaction handleModalToggle={handleModalToggle} />}
//     </Div>
//   );
// }

// export default ButtonAddTransactions;

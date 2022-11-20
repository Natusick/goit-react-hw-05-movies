import { createPortal } from 'react-dom';

import { Backdrop, ModalWindov } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children }) => {
  
  return createPortal(
    <Backdrop >
      <ModalWindov>{children}</ModalWindov>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;

// const [localData, setLocalData] = useState(data);
//   const { clicks } = localData;
//   function close() {
//     setOpen(false);
//   }
//   function submit() {
//     setData({
//       clicks,
//     });
//     close();
//   }
//   const content = new Array(1).fill(
//     <p>
//       Edit the clicks below by clicking on the number input or typing in your
//       own value.
//     </p>,
//   );
//   return ReactDOM.createPortal(
//     <>
//       <ModalShadow onClick={close} />
//       <Modal>
//         <ModalBanner>Edit Clicks</ModalBanner>
//         <ModalContent>
//           {content}
//           <label>
//             Clicks
//             <Input
//               value={clicks}
//               type="number"
//               onChange={e => setLocalData({ clicks: e.target.value })}
//             />
//           </label>
//         </ModalContent>
//         <ModalFooter>
//           <ConfirmButton onClick={submit}> Submit </ConfirmButton>
//         </ModalFooter>
//       </Modal>
//     </>,
//     document.getElementById('app-modal'),
//   );

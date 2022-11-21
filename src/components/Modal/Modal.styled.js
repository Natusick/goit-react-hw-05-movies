import styled from "styled-components";

export const Backdrop = styled.div`
position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
`;
export const ModalWindov = styled.div`
width: 100%;
height: 100vh;
background-color: #ffffff;
left: 50%;

@media (min-width: 768px) {
  position: fixed;
  width: 540px;
  height: 508px;
  left: 114px;
  top: 258px;
  transform: translate(-50%, -50%);
  width: 540px;
  height: 508px;
  border-radius: 20px;
};

@media (min-width: 1260px) {
  left: 370px;
  top: 106px;
}
`;
export const Container= styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;
export const ButtonClose = styled.button`

  display: flex;
  border: none;
  background-color: white;

`;
export const Div = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  margin-right: 20px;
`;

export const Title = styled.h1`
font-family: Poppins;
font-style: Regular;
font-size: 24px;
line-height: 36px;
line-height: 100%;
align: center;
vertical align: top;
color: black;
display: flex;
flex-direction: column;
justify-content: center;
`;

export const Text = styled.h2`
`;

export const RadioButton = styled.div`
display: flex;
`

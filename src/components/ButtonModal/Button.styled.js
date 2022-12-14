import styled from "styled-components";

export const BasicButton = styled.button`
  width: 44px;
  height: 44px;
  background-color: #24CCA7;;
  color: white;
  border: none;
  box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Div = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  padding-right: 20px;
  padding-bottom: 20px;

  @media (min-width: 768px) {
    padding-right: 40px;
    padding-bottom: 40px;
  };
`;


export const ButtonStyles = `display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 28px;
  font-size: 14px;
  letter-spacing: 0.04em;
  line-height: 1.35;
  border: 2px solid #f59256;
  border-radius: 40px;
  cursor: pointer;
   `;
//Button

export const ButtonBasic = styled.button`
  background-color: ${p => p.theme.colors.white};
  :hover:not(.active),
  :focus-visible:not(.active) {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
  &.active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
`;

//Category Link
export const LinkBasic = styled.a`
  ${ButtonStyles};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-family: ${p => p.theme.fonts.body};
  background-color: ${p => p.theme.colors.white};
  :hover:not(.active),
  :focus-visible:not(.active) {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
  &.active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
`;

//Add Link
export const AddLinkCircle = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: none;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  background-color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fonts.body};
  font-weight: 500;
  font-size: 12px;
  line-height: 1.3;
  color: ${p => p.theme.colors.white};
  cursor: pointer;
  :hover,
  :focus-visible {
    background-color: ${p => p.theme.colors.buttonAccent};
  }
`;
export const AddLinkBasic = styled.a`
  display: flex;
  align-items: center;
  border: none;
  font-family: ${p => p.theme.fonts.body};
  font-size: 20px;
  font-weight: 500;
  line-height: 1.35;
  background-color: transparent;
  color: ${p => p.theme.colors.black};
  cursor: pointer;
  :hover,
  :focus-visible {
    div {
      background-color: ${p => p.theme.colors.buttonAccent};
    }
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-left: 15px;
    width: 40px;
    height: 40px;
    background-color: ${p => p.theme.colors.accent};
  }
`;

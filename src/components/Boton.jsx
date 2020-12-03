import React from "react";
import styled from "styled-components";

const Boton = ({ onClick, variant = "default", children }) => {
  console.log("variante ", variant);

  let obj = {
    dashed: styled.button`
      background: var(--white) 0% 0% no-repeat padding-box;
      border: 2px dashed var(--primary);
      background: #fafafa 0% 0% no-repeat padding-box;
      border: 2px dashed #2b96d9;
      border-radius: 8px;
      opacity: 1;
      top: 123px;
      left: 391px;
      width: 127px;
      height: 54px;
      color: #2b96d9;
      text-transform: uppercase;
      &:hover {
        background-color: #d4eaf7;
      }
    `,
    default: styled.button`
      top: 123px;
      left: 64px;
      width: 132px;
      height: 54px;
      text-transform: uppercase;
      color: #2b96d9;
      background: var(--white) 0% 0% no-repeat padding-box;
      border: 2px solid var(--primary);
      background: #fafafa 0% 0% no-repeat padding-box;
      border: 2px solid #2b96d9;
      border-radius: 8px;
      opacity: 1;

      &:hover {
        background-color: #d4eaf7;
      }
    `,
    primary: styled.button`
      background: var(--primary) 0% 0% no-repeat padding-box;
      border: 2px solid var(--primary);
      background: #2b96d9 0% 0% no-repeat padding-box;
      border: 2px solid transparent;
      border-radius: 8px;
      opacity: 1;
      color: #fafafa;
      text-transform: uppercase;
      top: 123px;
      left: 228px;
      width: 131px;
      height: 54px;

      &:hover {
        background-color: #2278ad;
        border-color: #2b96d9;
      }
    `,
    ghost: styled.button`
      border-radius: 8px;
      background-color: none;
      border: none;
      opacity: 1;
      top: 123px;
      left: 550px;
      width: 127px;
      height: 54px;
      color: #2b96d9;
      text-transform: uppercase;

      &:hover {
        background-color: #d4eaf7;
        border-radius: 8px;
        opacity: 1;
      }
    `,
  };
  let Button = obj.hasOwnProperty(variant) ? obj[variant] : obj.default;

  return (
    <>
      <Button onClick={onClick} className={variant}>
        {children}
      </Button>
    </>
  );
};

export default Boton;

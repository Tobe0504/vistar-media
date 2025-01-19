"use client";

import React, { useState } from "react";
import classes from "./Input.module.css";

type InputProps = {
  type?: string;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  value?: string;
  isRequired?: boolean;
  errorMessage?: string;
  inValidCondition?: boolean;
  placeholder?: string;
  tip?: string;
  style?: React.CSSProperties;
  name?: string;
  condition?: boolean;
  readOnly?: boolean;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  loading?: boolean;
};

const Input = ({
  type,
  label,
  onChange,
  onBlur,
  value,
  isRequired,
  errorMessage,
  inValidCondition,
  placeholder,
  tip,
  style,
  name,
  condition,
  readOnly,
  onKeyDown,
  onKeyUp,
  loading,
}: InputProps) => {
  // States
  const [invalid, setInvalid] = useState(false);
  const [passwordIsViewable, setpasswordisViewable] = useState(false);

  return (
    <div className={classes.container} style={style}>
      {label && (
        <>
          <label htmlFor="">{label}</label>
          {"  "}
          {isRequired && <span>*</span>}
        </>
      )}
      <span className={classes.input}>
        <input
          type={
            type === "password" && passwordIsViewable
              ? "text"
              : type === "password" && !passwordIsViewable
              ? "password"
              : type
              ? type
              : "text"
          }
          name={name}
          placeholder={placeholder}
          id={label}
          onChange={onChange}
          readOnly={readOnly}
          onBlur={(e) => {
            if (isRequired && e.target.value === "") {
              setInvalid(true);
            } else {
              setInvalid(false);
            }

            if (condition !== undefined && condition === false) {
              setInvalid(true);
            }
            if (onBlur) onBlur();
          }}
          value={value}
          className={invalid ? classes.invalid : classes.valid}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
        />
        {type === "password" && (
          <span>
            {!passwordIsViewable ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  setpasswordisViewable(true);
                }}
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12"
                    stroke="#b3b3b3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12"
                    stroke="#b3b3b3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    stroke="#b3b3b3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></circle>{" "}
                </g>
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  setpasswordisViewable(false);
                }}
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M2 2L22 22"
                    stroke="#b3b3b3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335"
                    stroke="#b3b3b3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818"
                    stroke="#b3b3b3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            )}
          </span>
        )}
        {loading && "Loading..."}
      </span>
      {(invalid || (inValidCondition && errorMessage)) && (
        <span className={classes.errorMessage}>
          {errorMessage || "*invalid"}{" "}
        </span>
      )}
      {tip && <span className={classes.tip}>{tip}</span>}
    </div>
  );
};

export default Input;

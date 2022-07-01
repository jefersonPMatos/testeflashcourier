import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.button`
  ${(props) => {
    if (props.link) {
      return css`
        font-family: "Roboto", sans-serif;
        font-size: 14px;
        line-height: 20px;
        text-transform: uppercase;
        color: ${(props) => props.color || "#fff"};
        letter-spacing: 3px;
        cursor: pointer;
        position: relative;
        border: 1px solid #fff;
        border-radius: 4px;
        background: none;
        padding: 8px 20px;
        outline: none;
        transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        will-change: transform;
        &:hover {
          background-color: #f7d409;
          box-shadow: 0px 5px 20px rgba(247, 212, 9, 0.4);
          transform: translateY(-2px);
        }
      `;
    } else {
      return css`
        padding: 0.8em 1em;
        border: none;
        position: relative;
        overflow: hidden;
        background-color: transparent;
        text-align: center;
        font-size: 16px;
        z-index: 1;
        font-family: "Roboto", sans-serif;
        color: #fff;
        min-width: 120px;
        border: 1px solid #fff;
        border-radius: 4px;

        &:before {
          content: "";
          width: 0;
          height: 400%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
          background: #f7d409;
          transition: 0.8s ease;
          display: block;
          z-index: -1;
        }

        &:hover::before {
          width: 200%;
        }

        &:hover {
          color: #fff;
          cursor: pointer;
          border: none;
          border: 1px solid #fff;
        }
      `;
    }
  }}
`;

import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 12rem;
`;

export const StyledInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30px;
  max-width: 250px;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  outline: none;
  border: solid 1px #fff;
  border-radius: 4px;
  padding: 5px;
  background: #fff;
  transition: all 0.3s ease;

  ::placeholder {
    text-align: center;
  }

  &:focus {
    border: 1px solid #f7d409;
    ::placeholder {
      color: transparent;
    }
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 40px;
  color: #fff;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 50px;
  color: #fff;
`;

export const Status = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: #fff;
  span {
    color: #f7d409;
  }
`;

export const TrackId = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: #fff;

  span {
    color: #f7d409;
  }
`;

export const Result = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10rem;
`;

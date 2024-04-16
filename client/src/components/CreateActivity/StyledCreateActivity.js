import styled from "styled-components";

export const Section = styled.section`
  max-width: 900px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  font-size: 30px;
  text-wrap: pretty;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  margin: 0;
`;

export const FormContainer = styled.form`
  margin-top: 40px;
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: #6e47db;
  font-style: 13px;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 8px;
  border: 1px solid #000;
  box-sizing: border-box;
  padding: 10px;
  font-size: 14px;
`;

export const Select = styled.select`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
  border: 1px solid #000;
  box-sizing: border-box;
  padding: 10px;
  font-size: 14px;
`;

export const SelectedCountriesList = styled.ul`
  margin-top: 0;
  margin-bottom: 20px;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const CountrySelected = styled.li`
  color: #6e47db;
  background: #f4f3ff;
  width: fit-content;
  border: 1px solid #6e47db;
  border-radius: 10px;
  padding: 0 16px;
  cursor: pointer;
`;

export const SuggestedCountriesList = styled.ul`
  max-height: 300px;
  overflow-y: scroll;
  position: relative;
  z-index: 1;
  background: #fff;
  margin: 0;
  margin-top: -50px;
  padding: 15px 20px;
  list-style: none;
  border: 0.0625rem solid rgb(234, 236, 240);
  border-radius: 10px;
`;

export const SuggestedCountriesItem = styled.li`
  padding: 7px;
  margin: 5px 0;
  border: 0.0625rem solid rgb(234, 236, 240);
  border-radius: 10px;
  cursor: pointer;
`;

export const Button = styled.button`
  background: #ff0;
  color: #000;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 16px;
  text-align: center;
  border: none;
  cursor: pointer;
`;

export const ErrorMessage = styled.span`
  color: rgb(255, 0, 46);
  font-size: 13px;
  text-align: right;
`;
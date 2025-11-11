import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  ${'' /* align-items: center; */}
  justify-content: space-evenly;
  height: 150vh;
  background: #f9fafb;
  padding: 1.5rem;
`;

export const Card = styled.div`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 100%;
  height : 100%;
  max-width: 480px;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const UploadLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed #d1d5db;
  border-radius: 0.75rem;
  padding: 2rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #f3f4f6;
  }
`;

export const FileName = styled.span`
  margin-top: 0.5rem;
  color: #374151;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const JobDescInput = styled.input`
height : 200px;
width : 80%;
`

export const SubmitForm = styled.form`
display : flex;
flex-direction : column;
gap : 10px;
`

export const Button = styled.button`
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.6rem;
  margin-top: 1rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #1d4ed8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
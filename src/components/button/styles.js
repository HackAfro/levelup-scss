import styled from 'styled-components';

export const Button = styled.button`
  background: ${(props) => (props.primary ? 'indigo' : 'green')};
  color: white;
  padding: 10px 14px;
  border-radius: 10px;
  text-align: center;
`;

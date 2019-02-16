import React from 'react';
import { Button } from './styles';

 const MyButton = ({ primary, children }) => {
  return <Button primary={primary}>{children}</Button>;
};

export default MyButton;
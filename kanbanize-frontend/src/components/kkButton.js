import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const StyledButton = styled(Button)`
  && {
    color: white;
    background: #5aac44;
  }
`;

const KKButton = ({ text, onClick }) => {
  return (
    <StyledButton variant="contained" onMouseDown={onClick}>
      {text}
    </StyledButton>
  );
};

export default KKButton;

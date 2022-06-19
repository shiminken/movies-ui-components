import React from "react";
import styled from "@emotion/styled";
import colors from "../../../constants/colors";

const FooterWrapper = styled.div`
  background-color: ${colors.grey};
  font-family: Arial, Helvetica, sans-serif;
  border: 1px solid ${colors.grey1};
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = ({ ...registerProps }) => {
  return (
    <FooterWrapper {...registerProps}>
      I am Footer, you can ignore me
    </FooterWrapper>
  );
};

export default React.memo(Footer);

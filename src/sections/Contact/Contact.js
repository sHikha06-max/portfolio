import React from "react";
import SectionContainer from "../../containers/SectionContainer";
import MessageBox from "../../components/MessageBox/MessageBox";

const Contact = () => {
  return (
    <SectionContainer id="contact" title="Contact" maxWidth="sm" padding="120" reverse>
     
      <MessageBox />
    </SectionContainer>
  );
};

export default Contact;

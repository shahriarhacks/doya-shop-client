import React from "react";
import useTitle from "../../hooks/useTitle";
import Contacts from "./Contacts";

const Contact = () => {
  useTitle("Contact");
  return (
    <div>
      <Contacts />
    </div>
  );
};

export default Contact;

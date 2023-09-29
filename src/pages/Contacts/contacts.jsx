import React from "react";
import { Layout } from "../../layout/layout";
import image from "../../assets/contactsImage.png";
import styles from "./contacts.module.scss";
import { Form } from "../../components/Form/form";
export const Contacts = () => {
  return (
    <Layout>
      <div className={`${styles.contacts} box`}>
        <div>
          <img src={image} alt="contacts bgimg" />
        </div>
        <div>
          <Form/>
        </div>
      </div>
    </Layout>
  );
};

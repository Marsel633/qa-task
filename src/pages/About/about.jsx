import React from "react";
import { Layout } from "../../layout/layout";


export const About = ({aboutImages}) => {
  return (
    <Layout>
      <div>
        <div>
          {aboutImages.map((item) => (
            <img src={item} alt="img" />
          ))}
        </div>
      </div>
    </Layout>
  );
};

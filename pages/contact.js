import Layout from "../components/Layout";

import styled from "styled-components";

import img from "../static/images/saloon.jpg";

import NextSeo from "next-seo";

const ContactDiv = styled.div`
  height: 85vh;

  background-image: url(${img});
  background-size: 100%;
  background-repeat: no-repeat;

  h1 {
    color: white;
  }
`;

const Contact = () => (
  <ContactDiv>
    <Layout>
      <NextSeo
        config={{
          title: "Santa & the Mrs of West Texas",
          description: "Santa and Mrs Claus services for West Texas"
        }}
      />
      <h1>
        RMS Static Website Template
        <br /> w/Server Side Rendering
      </h1>
      <p>Reveler Media Services Base SEO Template</p>
    </Layout>
  </ContactDiv>
);

export default Contact;

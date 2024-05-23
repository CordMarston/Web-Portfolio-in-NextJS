import {
    Body,
    Container,
    Column,
    Head,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  interface EmailProps {
    name?: string;
    email: string,
    message: string,
  }
  export const ContactInternal = ({
    name,
    email,
    message
  }: EmailProps) => {  
    return (
      <Html>
        <Head />
        <Preview>Somebody reached out!</Preview>
        <Body style={main}>
          <Container style={container}>
            <Section style={logoHolder}>
                <Text style={logo}>CM</Text>
            </Section>
            <Section style={sectionsBorders}>
              <Row>
                <Column style={sectionBorder} />
                <Column style={sectionCenter} />
                <Column style={sectionBorder} />
              </Row>
            </Section>
            <Section style={content}>
              <Text style={paragraph}>
                { name } reached out via the contact form on your website.
              </Text>
              <Text style={paragraph}>
                Email: { email }
              </Text>
              <Text style={paragraph}>
                { message }
              </Text>
            </Section>
          </Container>
        </Body>
      </Html>
    );
  };
  
  export default ContactInternal;
  
  const fontFamily = "HelveticaNeue,Helvetica,Arial,sans-serif";
  
  const main = {
    backgroundColor: "#FFF",
    fontFamily,
  };
  
  const paragraph = {
    lineHeight: 1.5,
    fontSize: 14,
  };

  const logo = {
    backgroundColor:"#000000",
    color: "#FFF",
    padding: "20px"
  }
  
  const container = {
    maxWidth: "580px",
    margin: "30px auto",
    backgroundColor: "#ffffff",
  };
  
  const footer = {
    maxWidth: "580px",
    margin: "0 auto",
  };
  
  const content = {
    padding: "5px 20px 10px 20px",
  };
  
  const logoHolder = {
    display: "flex",
    justifyContent: "center",
    alingItems: "center",
    padding: 30,
  };
  
  const sectionsBorders = {
    width: "100%",
    display: "flex",
  };
  
  const sectionBorder = {
    borderBottom: "1px solid rgb(238,238,238)",
    width: "249px",
  };
  
  const sectionCenter = {
    borderBottom: "1px solid rgb(255, 255, 255)",
    width: "102px",
  };
  
  const link = {
    textDecoration: "underline",
  };
  
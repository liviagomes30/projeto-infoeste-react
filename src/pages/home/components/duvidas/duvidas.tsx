import React, { useState } from "react";
import {
  Form,
  FormGroup,
  FormLabel,
  Image,
  Input,
  SubmitButton,
  Title,
  Wrapper,
} from "./duvidas.styles";
import computador from "../../../../assets/icons/desenho.svg";

export const Duvidas = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
  };

  const handleSendClick = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const sheetDBUrl = "https://sheetdb.io/api/v1/p33s9qi7h0f5q";
    const payload = {
      Nome: name,
      Email: email,
      Duvidas: question,
    };

    try {
      const response = await fetch(sheetDBUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log("Enviado para o sheetDB com sucesso!");
        setName("");
        setEmail("");
        setQuestion("");
      } else {
        console.error("Falha ao enviar o sheetDB: ", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao enviar para o sheetDB: ", error);
    }
  };

  return (
    <>
      <Title>Dúvidas?</Title>
      <Wrapper>
        <Image src={computador} />
        <Form action="">
          <FormGroup>
            <FormLabel>Nome</FormLabel>
            <Input type="text" value={name} onChange={handleNameChange} />
          </FormGroup>
          <FormGroup>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={email} onChange={handleEmailChange} />
          </FormGroup>
          <FormGroup>
            <FormLabel>Dúvida</FormLabel>
            <Input
              type="text"
              value={question}
              onChange={handleQuestionChange}
            />
          </FormGroup>
          <SubmitButton type="submit" onClick={handleSendClick}>
            Enviar
          </SubmitButton>
        </Form>
      </Wrapper>
    </>
  );
};

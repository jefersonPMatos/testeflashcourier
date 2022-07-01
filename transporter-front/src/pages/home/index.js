import api from "../../services/Api";

import { ArrowCircleLeft } from "phosphor-react";

import { Button } from "../../components/Button";
import { Box } from "../../components/Box";

import logo from "../../assets/images/logo.png";

import {
  Form,
  StyledInput,
  StyledLabel,
  Title,
  Status,
  TrackId,
  Result,
} from "./styles";
import { useState } from "react";

export default function Home() {
  const [id, setId] = useState("");
  const [trackFound, setTrackFound] = useState(false);
  const [trackData, setTrackData] = useState();

  function handleInputChange(e) {
    e.preventDefault();
    setId(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    api
      .post(`/${id}`)
      .then((res) => {
        setTrackFound(true);
        setTrackData(res.data.tracked);
      })
      .catch((error) => console.log(error));

    console.log(trackData, trackFound);
  }

  function handleNewSearch(e) {
    e.preventDefault();
    setTrackFound(false);
  }

  return (
    <>
      <Box h="50px" />
      <Title>
        <Box w="50px" />
        Transporter <img src={logo} alt="logo" />
      </Title>

      {trackFound ? (
        <Result>
          <Title>Informações de rastreio</Title>
          <Box h="20px" />
          <span>
            <TrackId>
              CÓDIGO DE RASTREIO: <span>{trackData.id}</span>
            </TrackId>
            <Box h="5px" />
            <Status>
              STATUS ATUAL: <span>{trackData.status}</span>
            </Status>
          </span>
          <Box h="50px" />
          <ArrowCircleLeft
            size={50}
            color={"#fff"}
            weight="light"
            cursor={"pointer"}
            onClick={handleNewSearch}
          />
        </Result>
      ) : (
        <Form onSubmit={handleSubmit}>
          <StyledLabel>Rastreie sua encomenda</StyledLabel>
          <Box h="20px" />
          <StyledInput
            type="text"
            placeholder="Código de Rastreio"
            onChange={handleInputChange}
          />
          <Box h="20px" />
          <Button link>Rastrear</Button>
        </Form>
      )}
    </>
  );
}

import { Container } from "@material-ui/core";
import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { clientData } from "./clientData";
import NoteCard from "./noteCard";

const ClientList = () => {
  //   const [updateClient, setupdateClient] = useState([]);

  //   useEffect(() => {
  //         setupdateClient(clientData);
  //   } , [])

  return (
    <Container>
      <h2>Client List : </h2>
      <br />
      <Grid container>
        {clientData.map((note) => (
          <Grid item key={note.id} xs={12} sm={6} md={4}>
            <NoteCard note={note} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ClientList;

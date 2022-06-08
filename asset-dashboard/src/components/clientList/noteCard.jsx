import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useTheme } from "@emotion/react";

const NoteCard = ({ note }) => {
  return (
    <Card
      sx={{
        bgcolor: "#00bdb8",
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography color="white" gutterBottom variant="h5" component="div">
            Name of Client :{" "}
          </Typography>
          <Typography color="white" gutterBottom variant="h5" component="div">
            {note.name}
          </Typography>
          <Typography variant="body2" color="white">
            Client ID :
          </Typography>
          <Typography variant="body2" color="white">
            {note.clientID}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NoteCard;

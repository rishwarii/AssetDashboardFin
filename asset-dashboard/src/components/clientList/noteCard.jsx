import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Link } from "@mui/material";
import { useTheme } from "@emotion/react";
import { CardHeader } from "@material-ui/core";

const NoteCard = ({ note }) => {
  return (
    <Card sx={{ bgColor: "#375f5f" }}>
      <CardActionArea>
        <CardHeader title="Client's Details" />
        <CardContent>
          <Typography color="inherit" gutterBottom variant="h6" component="div">
            Client Name : <span>{note.ClientName}</span>
          </Typography>
          <Typography variant="body2">
            Client ID : <span>{note.ClientID}</span>
          </Typography>
        </CardContent>
        <Link></Link>
      </CardActionArea>
    </Card>
  );
};

export default NoteCard;

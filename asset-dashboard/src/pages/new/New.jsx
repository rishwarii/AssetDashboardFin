import "./new.scss";
import { useState } from "react";
import "./New1.scss";
import { Select } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import React from "react";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import AssetList from "../list/AssetList";
import MiniDrawer from "../../components/sidebar/sidebar2coll2";
import axios from "axios";
import { Box, Grid, MenuItem, TextField, Button } from "@material-ui/core";

const NewAsset = () => {
  const [newAsset, setnewAsset] = useState({
    assetName: "",
    assetSerialNumber: "",
    expectedDeliveryDateTime: null,
    assetType: " ",
    deviceSerialNumber: "",
    endLocationLatitude: "",
    endLocationLongitude: "",
    startLocationLatitude: "",
    startLocationLongitude: "",
  });

  const [status, setStatus] = useState();
  // const [selectDateTime, setselectDateTime] = (useState < Date) | (null > null);

  function onTextFieldChange(e) {
    setnewAsset({
      ...newAsset,
      [e.target.name]: String(e.target.value),
    });

    console.log(newAsset);
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      await axios.post(
        `https://4n53lh55nc.execute-api.ap-south-1.amazonaws.com/prod/asset`,
        newAsset
      );
      setStatus(true);
    } catch (error) {
      console.log("Something is Wrong");
    }
  }

  if (status) {
    return (
      <div>
        <AssetList></AssetList>
      </div>
    );
  }

  return (
    <div className="home">
      <MiniDrawer />
      <div className="homeContainer">
        <div className="widgets">{/* <Widget type="order" /> */}</div>
        <div className="listContainer">
          <div>
            <div className="listTitle">
              <h1>Add New Asset </h1>
            </div>
          </div>

          <form>
            <div>
              <Grid
                spacing={3}
                container
                rowSpacing={10}
                columnSpacing={{ xs: 5, sm: 5, md: 5 }}
                marginRight={10}
              >
                <Grid item xs={6}>
                  <div className="formInput">
                    <TextField
                      autoComplete="assetName"
                      name="assetName"
                      variant="outlined"
                      required
                      fullWidth
                      id="assetName"
                      label=" Asset Name"
                      onChange={(e) => onTextFieldChange(e)}
                    />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="formInput">
                    <TextField
                      autoComplete="assetSerialNumber"
                      name="assetSerialNumber"
                      variant="outlined"
                      required
                      fullWidth
                      id="assetSerialNumber"
                      label="Asset Serial Number"
                      onChange={(e) => onTextFieldChange(e)}
                    />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="formInput">
                    <TextField
                      autoComplete="deviceSerialNumber"
                      name="deviceSerialNumber"
                      variant="outlined"
                      required
                      fullWidth
                      id="deviceSerialNumber"
                      label="deviceSerialNumber"
                      onChange={(e) => onTextFieldChange(e)}
                    />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="formInput">
                    <Select
                      name="Asset Type"
                      label="Asset Type"
                      required
                      value={newAsset.assetType}
                      fullWidth
                      id="assetType"
                      onChange={(e) => onTextFieldChange(e)}
                    >
                      <MenuItem value="">
                        <em>None Selected </em>
                      </MenuItem>
                      <MenuItem value={"Delicate"}>Delicate</MenuItem>
                      <MenuItem value={"Not Delcicate"}>Not Delicate</MenuItem>
                    </Select>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="formInput">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DateTimePicker
                        fullWidth
                        name="Expected Date/Time"
                        required
                        outlined
                        renderInput={(params) => <TextField {...params} />}
                        label="Expected Delivery Date Time"
                        value={newAsset.expectedDeliveryDateTime}
                        onChange={(e) => onTextFieldChange(e)}
                      />
                    </LocalizationProvider>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="formInput">
                    <TextField
                      autoComplete="endLocationLatitude"
                      name="endLocationLatitude"
                      variant="outlined"
                      required
                      fullWidth
                      id="endLocationLatitude"
                      label="End Location Latitude"
                      onChange={(e) => onTextFieldChange(e)}
                    />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="formInput">
                    <TextField
                      autoComplete="endLocationLongitude"
                      name="endLocationLongitude"
                      variant="outlined"
                      required
                      fullWidth
                      id="endLocationLongitude"
                      label=" endLocationLongitude"
                      onChange={(e) => onTextFieldChange(e)}
                    />
                  </div>
                </Grid>

                <Grid item xs={6}>
                  <div className="formInput">
                    <TextField
                      autoComplete="startLocationLatitude"
                      name="startLocationLatitude"
                      variant="outlined"
                      required
                      fullWidth
                      id="startLocationLatitude"
                      label=" startLocationLatitude"
                      onChange={(e) => onTextFieldChange(e)}
                    />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="formInput">
                    <TextField
                      autoComplete="startLocationLongitude"
                      name="startLocationLongitude"
                      variant="outlined"
                      required
                      fullWidth
                      id="startLocationLongitude"
                      label=" Asset startLocationLongitude"
                      onChange={(e) => onTextFieldChange(e)}
                    />
                  </div>
                </Grid>
              </Grid>
            </div>

            <Box m={3}>
              <Button
                width="150px"
                type="submit"
                align="center"
                variant="contained"
                color="primary"
                onClick={(e) => onFormSubmit(e)}
              >
                Add Asset
              </Button>
            </Box>
          </form>
        </div>
      </div>
    </div>
  );
};
export default NewAsset;

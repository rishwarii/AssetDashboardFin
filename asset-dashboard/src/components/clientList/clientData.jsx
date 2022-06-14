import React, { useEffect, useState } from "react";
import axios from "axios";

const ClientData = () => {
  const [clientD, setclientD] = useState([{}]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://x6fxeu21qb.execute-api.ap-south-1.amazonaws.com/test/allclients"
        );

        setclientD(response.data);
        setLoading(false);
        console.log(clientD);
      } catch (err) {
        console.error("ERROR IN client");
      }
    };
    getData();
  }, [clientD]);
};

export default ClientData;

const express = require("express");
const axios = require("axios");
const app = express();

app.listen(8080, () => {
  console.log("Server Running on Port 8080....");
});

// Axios GET Request
axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((result) => {
    console.log(result.data);
  })
  .catch((err) => {
    console.log(err);
  });

//GET Country Request
app.get("/Country", (req, res) => {
  try {
    res.status(200).json({
      status: "sucess",
      data: {
        // Data you need
      },
    });
  } catch (error) {
    res.json(error);
  }
});

//POST {distributorId}/sim/{iccid}/status Request
app.post("/:distributorId/sim/:iccid/status", (req, res) => {
  const distributorId = req.params.distributorId;
  const iccid = req.params.iccid;
  try {
    // Do what you wnat

    res.status(200).json({
      status: "sucess",
      data: {
        // Data you need
      },
    });
  } catch (error) {
    res.json(error);
  }
});

//GET /{distributorId}/sim/{iccid}/info Request
app.get("/:distributorId/sim/:iccid/info", (req, res) => {
  const distributorId = req.params.distributorId;
  const iccid = req.params.iccid;
  try {
    res.status(200).json({
      status: "sucess",
      data: {
        // Data you need
      },
    });
  } catch (error) {
    res.json(error);
  }
});

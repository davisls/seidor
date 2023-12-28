const express = require("express");
const driverRouter = require("./driver");
const vehicleRouter = require("./vehicle");
const vehicleUtilizationRouter = require("./vehicleUtilization");

const app = express();

app.use("/vehicle/", vehicleRouter);
app.use("/driver/", driverRouter);
app.use("/vehicleUtilization/", vehicleUtilizationRouter);

module.exports = app;
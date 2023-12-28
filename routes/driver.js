const express = require("express");
const { validateId } = require('../middlewares');
const DriverController = require("../controllers/DriverController");
const { createValidator } = require('../middlewares/validators/DriverValidator');

const router = express.Router();

router.get("/", DriverController.driverGetAll);
router.get("/filter/", DriverController.driverGetByName);
router.get("/:id", validateId, DriverController.driverGetById);
router.post("/", createValidator, DriverController.driverCreate);
router.put("/:id", validateId, DriverController.driverUpdate);
router.delete("/:id", validateId, DriverController.driverDelete);

module.exports = router;
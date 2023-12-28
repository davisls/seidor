const express = require("express");
const { validateId } = require('../middlewares');
const { createValidator } = require('../middlewares/validators/VehicleUtilizationValidator');
const VehicleUtilizationController = require("../controllers/VehicleUtilizationController");

const router = express.Router();

router.get("/", VehicleUtilizationController.utilizationGetAll);
router.get("/:id", validateId, VehicleUtilizationController.utilizationGetById);
router.post("/", createValidator, VehicleUtilizationController.utilizationCreate);
router.put("/:id", validateId, VehicleUtilizationController.utilizationEnd);

module.exports = router;
const express = require("express");
const { validateId } = require('../middlewares');
const { createValidator } = require('../middlewares/validators/VehicleValidator');
const VehicleController = require("../controllers/VehicleController");

const router = express.Router();

router.get("/", VehicleController.vehicleGetAll);
router.get("/filter/", VehicleController.vehicleGetByColorOrBrand); 
router.get("/:id", validateId, VehicleController.vehicleGetById);
router.post("/", createValidator, VehicleController.vehicleCreate);
router.put("/:id", validateId, VehicleController.vehicleUpdate);
router.delete("/:id", validateId, VehicleController.vehicleDelete);

module.exports = router;
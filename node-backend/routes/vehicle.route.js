const express = require("express");
const router = express.Router();
const passport = require("passport");
const { 
    imageUpload, 
    getAllVehicles, 
    getVehicleById, 
    addNewVehicle, 
    deleteById, 
    updateById, 
    getfilterdVehicles,
    searchVehicles,
    getAllBrands,
    getAllModels} = require("../controllers/vehicle.controller");



router.get('/', getAllVehicles);
router.get('/search', searchVehicles);
router.get('/get-all-brands', getAllBrands);
router.post('/get-all-models', getAllModels);
router.get('/filter', getfilterdVehicles);
router.get('/:id', getVehicleById);
router.post(
    '/new_vehicle', 
    passport.authenticate("jwt", {session: false}), 
    addNewVehicle
);
router.delete(
    '/:id', 
    passport.authenticate("jwt", {session: false}), 
    deleteById
);
router.patch(
    '/:id', 
    passport.authenticate("jwt", {session: false}), 
    updateById
);

router.post(
    '/upload', 
    passport.authenticate("jwt", {session: false}), 
    imageUpload
);




module.exports = router;

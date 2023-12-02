"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
let vehicles = [];
router.get('/', (req, res) => {
    res.render('index');
});
router.get('/hello', (req, res) => {
    res.send("Hello world");
});
router.post('/vehicle/add', (req, res) => {
    const newVehicle = req.body;
    vehicles.push(newVehicle);
    res.status(201).send("Vehicle added");
});
router.get("/vehicle/search/:model", (req, res) => {
    const model = req.params.model;
    for (let vehicle of vehicles) {
        if (vehicle.model == model) {
            res.send(vehicle);
            return;
        }
    }
    res.sendStatus(404);
});
module.exports = router;

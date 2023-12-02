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
    console.log(vehicles);
    res.status(201).send("Vehicle added");
});
module.exports = router;

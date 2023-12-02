import express from "express"
const router = express.Router()

interface Vehicle {
  "model": string;
  "color": string;
  "year": number;
  "power": number;
}

let vehicles: Vehicle[] = [];

router.get('/', (req, res) => {
  res.render('index');
});
 
router.get('/hello', (req, res) => {
  res.send("Hello world")
});

router.post('/vehicle/add', (req, res) => {
  const newVehicle: Vehicle = req.body
  vehicles.push(newVehicle)
  console.log(vehicles)
  res.status(201).send("Vehicle added")
});

module.exports = router;

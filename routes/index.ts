import express from "express"
const router = express.Router()

interface Vehicle {
  model: string,
  color: string,
  year: number,
  power: number,
  bodyType?: string,
  wheelCount?: number,
  draft?: number,
  wingspan?: number,
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
  res.status(201).send("Vehicle added")
});

router.get("/vehicle/search/:model", (req, res) => {
  const model = req.params.model

  for (let vehicle of vehicles) {
    if (vehicle.model == model) {
      res.send(vehicle)
      return
    }
  }
  res.sendStatus(404)
})

module.exports = router;

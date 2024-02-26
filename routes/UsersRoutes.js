
import express from 'express';
import User from '../model/User.js';
const router = express.Router()
router.post('/', function (req, res) {
User.create(req.body)
  .then((user) => res.status(200).json({ user: user, message: "Thank You" }))
  .catch((err) => res.status(500).json({ error: err }));
})
export default router
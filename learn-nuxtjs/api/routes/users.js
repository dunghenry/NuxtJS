const { Router } = require('express');
const router = Router();
const User = require('../../models/User');
router.get('/', async (req, res) => {
  const users = await User.find({})
  res.status(200).json(users);
})
router.get('/:id', async function (req, res) {
  try {
    const id = req.params.id;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      const user = await User.findById(id);
      if (!user) return res.status(403).json("user not found");
      return res.status(200).json(user);
    }
    else {
      return res.status(403).json("Id not found");
    }
  } catch (error) {
    return res.status(500).json(error.message);
  }
})
router.post('/', async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    return res.status(200).json(savedUser);
  } catch (error) {
    return res.status(500).json(error.message);
  }
})
router.delete('/:id', async function (req, res) {
  try {
    const id = req.params.id;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      const user = await User.findByIdAndDelete(id);
      if (!user) return res.status(403).json("user not found");
      return res.status(200).json("Deleted successfully!!");
    }
    else {
      return res.status(403).json("Id not found");
    }
  } catch (error) {
    return res.status(500).json(error.message);
  }
})

router.put('/:id', async function (req, res) {
  try {
    const id = req.params.id;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      const user = await User.findById(id);
      await user.updateOne({ $set: req.body });
      if (!user) return res.status(403).json("user not found");
      return res.status(200).json("Update successfully!!");
    }
    else {
      return res.status(403).json("Id not found");
    }
  } catch (error) {
    return res.status(500).json(error.message);
  }
})
module.exports = router;
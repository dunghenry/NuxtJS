const { Router } = require('express');
const router = Router();
const users = [
  {
    id: 1,
    name: 'Trần Văn Dũng',
  },
  {
    id: 2,
    name: 'Nguyễn Văn A',
  },
  {
    id: 3,
    name: 'Trần Văn B',
  }
]
router.get('/', function (req, res) {
  res.status(200).json(users);
})
router.get('/:id', function (req, res) {
  const id = Number(req.params.id)
  const user = users.find(user => user.id === id);
  console.log(user)
  if (user) {
    return res.status(200).json(user);
  }
  else {
    return res.status(404).json("id not found!!!");
  }
})
module.exports = router;
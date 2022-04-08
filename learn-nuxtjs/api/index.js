const express = require('express');
const userRoute = require('./routes/users');
const todoRoute = require('./routes/todos');
const app = express();
app.use('/users', userRoute);
app.use('/todos', todoRoute);
app.get('/', (req, res) => {
    res.status(200).json(("API Router"));
})
module.exports = app

if (require.main === module) {
  const port = process.env.PORT || 3000
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}

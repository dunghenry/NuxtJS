const express = require('express');
const userRoute = require('./routes/users');
const todoRoute = require('./routes/todos');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users', userRoute);
app.use('/todos', todoRoute);
app.get('/', (req, res) => {
  res.status(200).json(("API Router"));
})

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 3000
    });
    console.log("Connection DB successfully!!")
  } catch (error) {
    console.log(error);
    console.log("Connection DB failed!!")
  }
}
connectDB();
module.exports = app;
if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  });
}

const express = require("express");
const PORT = process.env.PORT || 8000;
const app = express();

app.get('/', (req, res) => {
  // Simulate a delay in processing the request
  setTimeout(() => {
    res.send('Hello, World!');
  }, 5000); // Simulating a delay of 5 seconds
});


app.listen(PORT, function() {
  console.log(`App is running on PORT: ${PORT}`);
});

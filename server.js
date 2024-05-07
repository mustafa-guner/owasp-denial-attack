const express = require("express");
const PORT = process.env.PORT || 8000;
const app = express();

app.get('/test', function(req, res, next) {
  return res.json({
    success: true,
    message: "Test endpoint works !"
  });
});


app.listen(PORT, function() {
  console.log(`App is running on PORT: ${PORT}`);
});

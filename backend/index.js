const express = require("require");

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Sever running on port ${PORT}`);
});

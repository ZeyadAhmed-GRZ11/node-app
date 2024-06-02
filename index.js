const express = require("express");
const cors = require("cors");

const port = 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.listen(port, () => console.log(`Server is running on port ${port}`));
app.use("/", require("./routes"));

const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const path = require("path");
const cors = require("cors");
const flash = require("connect-flash");

//Initializations
const app = express();

//settings
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views"));

//Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(flash());

//Global variables
app.use((req, res, next) => {
  next();
});

//Routes
app.use(require("./src/routes"));
app.use(require("./src/routes/getDate"));
app.use(require("./src/routes/authentications"));
app.use(require("./src/routes/links"));
app.use(require("./src/routes/confirmMail"));
app.use(require("./src/routes/resetPassword"));
app.use(require("./src/routes/resetToken"));
app.use(require("./src/routes/registroInvitados"));

//Starting server
app.listen(app.get("port"), () => {
  console.log("server on port", app.get("port"));
});

const { Router } = require("express");
const getIndexPage = require("../controllers/getIndexPage");

const indexRouter = Router();

indexRouter.get("/", getIndexPage);

//add rest of routes below with respective controller

module.exports = indexRouter;

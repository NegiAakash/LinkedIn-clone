"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
var port = process.env.PORT || 3000;
app.get('/', function (req, res) {
    res.send("Heya from server 🐋");
});
app.listen(port, function () {
    console.log("Listening on ".concat(port));
});

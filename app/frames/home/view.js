"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const neweb_1 = require("neweb");
class HomeView extends neweb_1.Component {
    getTemplate() {
        return require("./template.html");
    }
}
exports.HomeView = HomeView;
exports.default = HomeView;

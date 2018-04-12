"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const neweb_1 = require("neweb");
const React = require("react");
class HomeView extends React.Component {
    render() {
        return React.createElement(neweb_1.Styled, { styles: {
                h1: {
                    "text-align": "center",
                },
            } },
            " ",
            React.createElement("div", null,
                React.createElement("div", { style: { width: "500px", margin: "0 auto" } },
                    React.createElement("h1", { style: {} }, "Neweb"),
                    React.createElement(neweb_1.Styled, { styles: { p: { color: "#2C529C" } } },
                        React.createElement("p", { style: { textAlign: "center", fontSize: "20px" } }, "Era of new Web")))));
    }
}
exports.default = HomeView;
// color: "#2C529C"

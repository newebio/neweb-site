"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class HomeView extends React.Component {
    render() {
        return React.createElement("div", null,
            React.createElement("div", { style: { width: "500px", margin: "0 auto" } },
                React.createElement("h1", { style: {
                        textAlign: "center",
                    } }, "Neweb"),
                React.createElement("p", { style: { textAlign: "center", fontSize: "20px", color: "#2C529C" } }, "Era of new Web"),
                React.createElement("a", { className: "github-button", href: "https://github.com/newebio/neweb", "data-size": "large", "data-show-count": "true", "aria-label": "Star newebio/neweb on GitHub" }, "Star")));
    }
}
exports.default = HomeView;

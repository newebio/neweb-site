"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const neweb_1 = require("neweb");
const React = require("react");
class DocsView extends React.Component {
    render() {
        return (React.createElement("div", { style: {
                display: "grid",
                gridTemplateColumns: "250px auto",
                gridGap: "70px",
            } },
            React.createElement("div", null,
                React.createElement("div", { className: "left-menu", style: {
                        backgroundColor: "#fff5ea",
                        width: "220px",
                        margin: "30px 20px",
                        paddingBottom: "10px",
                    } },
                    React.createElement("div", { className: "left-menu-header" }, "Basic"),
                    React.createElement("ul", null,
                        React.createElement("li", null,
                            React.createElement(neweb_1.Link, { href: "/docs" }, "Getting started")),
                        React.createElement("li", null,
                            React.createElement(neweb_1.Link, { href: "/docs/concept" }, "Concept"))),
                    React.createElement("div", { className: "left-menu-header" }, "Routing"),
                    React.createElement("ul", null,
                        React.createElement("li", null,
                            React.createElement(neweb_1.Link, { href: "/docs/routes" }, "Types of routes")),
                        React.createElement("li", null,
                            React.createElement(neweb_1.Link, { href: "/docs/concept" }, "Concept"))),
                    React.createElement("div", { className: "left-menu-header" }, "Frames"),
                    React.createElement("ul", null,
                        React.createElement("li", null,
                            React.createElement(neweb_1.Link, { href: "/docs/frames" }, "Overview")),
                        React.createElement("li", null,
                            React.createElement(neweb_1.Link, { href: "/docs/view" }, "View")),
                        React.createElement("li", null,
                            React.createElement(neweb_1.Link, { href: "/docs/controller" }, "Controller"))),
                    React.createElement("div", { className: "left-menu-header" }, "Modules"),
                    React.createElement("ul", null,
                        React.createElement("li", null,
                            React.createElement(neweb_1.Link, { href: "/docs/frames" }, "Overview")),
                        React.createElement("li", null,
                            React.createElement(neweb_1.Link, { href: "/docs/view" }, "View")),
                        React.createElement("li", null,
                            React.createElement(neweb_1.Link, { href: "/docs/controller" }, "Controller"))))),
            React.createElement("div", null, this.props.children)));
    }
}
exports.default = DocsView;

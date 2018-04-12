"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const neweb_1 = require("neweb");
const React = require("react");
const styles_1 = require("../../styles");
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
                    React.createElement(neweb_1.Styled, { styles: {
                            "ul": {
                                "list-style": "none",
                                "padding-left": "20px",
                            },
                            "ul li": {
                                display: "block",
                                margin: "5px 0",
                            },
                            "ul li a": {
                                "color": "brown",
                                "font-size": "14px",
                            },
                            ">div": {
                                "background-color": styles_1.backColor,
                                "color": "white",
                                "padding": "10px",
                            },
                        } },
                        React.createElement("div", { className: "header" }, "Basic"),
                        React.createElement("ul", null,
                            React.createElement("li", null,
                                React.createElement(neweb_1.Link, { href: "/docs" }, "Getting started")),
                            React.createElement("li", null,
                                React.createElement(neweb_1.Link, { href: "/docs/concept" }, "Concept")),
                            React.createElement("li", null,
                                React.createElement(neweb_1.Link, { href: "/docs/styles" }, "Styles"))),
                        React.createElement("div", null, "Routing"),
                        React.createElement("ul", null,
                            React.createElement("li", null,
                                React.createElement(neweb_1.Link, { href: "/docs/routes" }, "Types of routes")),
                            React.createElement("li", null,
                                React.createElement(neweb_1.Link, { href: "/docs/concept" }, "Concept"))),
                        React.createElement("div", null, "Frames"),
                        React.createElement("ul", null,
                            React.createElement("li", null,
                                React.createElement(neweb_1.Link, { href: "/docs/frames" }, "Overview")),
                            React.createElement("li", null,
                                React.createElement(neweb_1.Link, { href: "/docs/view" }, "View")),
                            React.createElement("li", null,
                                React.createElement(neweb_1.Link, { href: "/docs/controller" }, "Controller"))),
                        React.createElement("div", null, "Modules"),
                        React.createElement("ul", null,
                            React.createElement("li", null,
                                React.createElement(neweb_1.Link, { href: "/docs/frames" }, "Overview")),
                            React.createElement("li", null,
                                React.createElement(neweb_1.Link, { href: "/docs/view" }, "View")),
                            React.createElement("li", null,
                                React.createElement(neweb_1.Link, { href: "/docs/controller" }, "Controller")))))),
            React.createElement("div", null, this.props.children)));
    }
}
exports.default = DocsView;

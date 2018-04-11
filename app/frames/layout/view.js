"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const neweb_1 = require("neweb");
const React = require("react");
class LayoutView extends React.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement("header", { style: {
                    height: "60px",
                    /*backgroundColor: "#0B766E",*/
                    backgroundColor: "#2C529C",
                } },
                React.createElement("div", { style: {
                        paddingLeft: "45px",
                        maxWidth: "1000px", margin: "auto", display: "grid",
                        alignItems: "center",
                        gridTemplateColumns: "60px 60px auto",
                        gridGap: "0px",
                    } },
                    React.createElement(neweb_1.Link, { href: "/", style: {} },
                        React.createElement("img", { src: "/logo_white2.png", style: { marginTop: "8px", height: "40px" } })),
                    React.createElement(neweb_1.Link, { href: "/", style: {
                            textDecoration: "none",
                            height: "50px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white", fontSize: "25px",
                        } }, "Neweb"),
                    React.createElement("div", { style: {
                            width: "100%", display: "grid",
                            alignItems: "center",
                            justifyContent: "right",
                        } },
                        React.createElement("div", { style: {
                                paddingRight: "40px",
                                listStyle: "none", display: "grid",
                                gridGap: "20px",
                                gridTemplateColumns: "auto auto auto",
                            } },
                            React.createElement("div", null,
                                React.createElement(neweb_1.Link, { style: { color: "white" }, href: "/docs" }, "Docs")),
                            React.createElement("div", null,
                                React.createElement(neweb_1.Link, { style: { color: "white" }, href: "/api" }, "API")),
                            React.createElement("div", null,
                                React.createElement(neweb_1.Link, { style: { color: "white" }, href: "https://github.com/newebio/neweb", target: "_blank" }, "Github")))))),
            React.createElement("div", { style: { maxWidth: "1000px", margin: "auto" } }, this.props.children)));
    }
}
exports.default = LayoutView;

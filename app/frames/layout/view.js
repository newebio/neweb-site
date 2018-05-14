"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const neweb_1 = require("neweb");
const React = require("react");
class LayoutView extends React.Component {
    render() {
        return (React.createElement(neweb_1.Styled, { styles: { ".white": { color: "white" } } },
            React.createElement("div", null,
                React.createElement("header", { style: {
                        height: "60px",
                        /*backgroundColor: "#0B766E",*/
                        backgroundColor: "#2C529C",
                        position: "fixed",
                        width: "100%",
                    } },
                    React.createElement("div", { style: {
                            paddingLeft: "45px",
                            maxWidth: "1000px",
                            margin: "auto", display: "grid",
                            alignItems: "center",
                            gridTemplateColumns: "60px 60px auto",
                            gridGap: "0px",
                        } },
                        React.createElement(neweb_1.Link, { href: "/", style: {} },
                            React.createElement("img", { src: "/logo_white3.png", style: { marginTop: "8px", height: "40px" } })),
                        React.createElement(neweb_1.Link, { className: "white", href: "/", style: {
                                textDecoration: "none",
                                height: "50px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "25px",
                                color: "white",
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
                                    React.createElement(neweb_1.Link, { className: "white", href: "/docs" }, "Docs")),
                                React.createElement("div", null,
                                    React.createElement(neweb_1.Link, { className: "white", href: "/api" }, "API")),
                                React.createElement("div", null,
                                    React.createElement(neweb_1.Link, { className: "white", href: "https://github.com/newebio/neweb", target: "_blank" }, "Github")))))),
                React.createElement("div", { style: {
                        maxWidth: "1000px",
                        margin: "auto",
                        paddingTop: "60px",
                    } }, this.props.children),
                React.createElement("div", { style: {
                        marginTop: "50px", height: "250px",
                        position: "relative",
                        boxSizing: "border-box",
                        border: "none",
                        fontWeight: 400,
                        color: "#202020",
                        fontSize: "15px",
                        lineHeight: "24px",
                        background: "#808080",
                        boxShadow: "inset 0 10px 10px -5px rgba(0,0,0,0.2)",
                        paddingTop: "2em",
                        paddingBottom: "2em",
                    } }))));
    }
}
exports.default = LayoutView;

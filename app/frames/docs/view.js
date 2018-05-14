"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const neweb_1 = require("neweb");
const React = require("react");
const styles_1 = require("../../styles");
const menu = [{
        header: "Basic",
        items: [{
                title: "Getting started",
                link: "/docs",
            }, {
                title: "Concept",
                link: "/docs/concept",
            }, {
                title: "Styles",
                link: "/docs/styles",
            }],
    }, {
        header: "Routing",
        items: [{
                title: "Types of routes",
                link: "/docs/routes",
            }],
    }, {
        header: "Frames",
        items: [{
                title: "Overview",
                link: "/docs/frames",
            }, {
                title: "View",
                link: "/docs/view",
            }, {
                title: "Controller",
                link: "/docs/controller",
            }],
    }];
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
                            ">div>div": {
                                "background-color": styles_1.backColor,
                                "color": "white",
                                "padding": "10px",
                            },
                        } }, menu.map(({ header, items }, key2) => {
                        const headerBlock = React.createElement("div", null, header);
                        const itemsBlock = React.createElement("ul", null, items.map((item, key) => {
                            return React.createElement("li", { key: key },
                                React.createElement(neweb_1.Link, { href: item.link }, item.title));
                        }));
                        return React.createElement("div", { key: key2 },
                            headerBlock,
                            itemsBlock);
                    })))),
            React.createElement("div", null, this.props.children)));
    }
}
exports.default = DocsView;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const neweb_1 = require("neweb");
const React = require("react");
const styles_1 = require("../../styles");
class DocpageView extends React.Component {
    render() {
        return (React.createElement(neweb_1.Styled, { styles: {
                p: {
                    "font-size": "15px",
                },
                strong: {
                    "color": styles_1.linkColor,
                    "font-weight": "normal",
                },
            } },
            React.createElement("div", { dangerouslySetInnerHTML: { __html: this.props.data.body } })));
    }
}
exports.default = DocpageView;

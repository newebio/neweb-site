"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Styled extends React.Component {
    componentWillMount() {
        this.id = ++Styled.id;
    }
    render() {
        return React.createElement("div", { className: "s" + this.id },
            React.createElement("style", { type: "text/css" }, Object.keys(this.props.styles).map((selector) => {
                return ".s" + this.id + " " + selector + "{" + this.props.styles[selector] + "}";
            })),
            this.props.children);
    }
}
Styled.id = 0;
exports.default = Styled;

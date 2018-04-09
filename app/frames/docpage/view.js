"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class DocpageView extends React.Component {
    render() {
        return React.createElement("div", { dangerouslySetInnerHTML: { __html: this.props.data.body } });
    }
}
exports.default = DocpageView;

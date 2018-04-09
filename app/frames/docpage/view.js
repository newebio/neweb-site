"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactMarkdown = require("react-markdown");
class DocpageView extends React.Component {
    render() {
        return React.createElement("div", null,
            React.createElement(ReactMarkdown, { source: this.props.data.body }));
    }
}
exports.default = DocpageView;

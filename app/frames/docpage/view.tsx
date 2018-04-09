import { IViewProps } from "neweb";
import React = require("react");
import ReactMarkdown = require("react-markdown");
import { IData, IParams } from "./controller";
export default class DocpageView extends React.Component<IViewProps<IParams, IData>, {}> {
    render() {
        return <div>
            <ReactMarkdown source={this.props.data.body} /></div>;
    }
}

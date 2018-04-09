import { IViewProps } from "neweb";
import React = require("react");
import { IData, IParams } from "./controller";
export default class DocpageView extends React.Component<IViewProps<IParams, IData>, {}> {
    render() {
        return <div dangerouslySetInnerHTML={{ __html: this.props.data.body }}></div>;
    }
}

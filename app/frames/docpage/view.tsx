import { IViewProps, Styled } from "neweb";
import React = require("react");
import { linkColor } from "../../styles";
import { IData, IParams } from "./controller";
export default class DocpageView extends React.Component<IViewProps<IParams, IData>, {}> {
    render() {
        return (<Styled styles={{
            p: {
                "font-size": "15px",
            },
            strong: {
                "color": linkColor,
                "font-weight": "normal",
            },
        }}>
            <div dangerouslySetInnerHTML={{ __html: this.props.data.body }}></div>
        </Styled>);
    }
}

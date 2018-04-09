import { IViewProps } from "neweb";
import React = require("react");
import { IData, IParams } from "./controller";
export default class HomeView extends React.Component<IViewProps<IParams, IData>, {}> {
    render() {
        return <div>
            <img src="/logo.png" />
            THE BEST</div>;
    }
}

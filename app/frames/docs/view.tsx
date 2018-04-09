import { IViewProps, Link } from "neweb";
import React = require("react");
import { IData, IParams } from "./controller";
export default class DocsView extends React.Component<IViewProps<IParams, IData>, {}> {
    render() {
        return (<div style={{
            display: "grid",
            gridTemplateColumns: "250px auto",
            gridGap: "70px",
        }}>
            <div>
                <div className="left-menu" style={{
                    backgroundColor: "#fff5ea",
                    width: "220px",
                    margin: "30px 20px",
                }}>
                    <div className="left-menu-header">
                        Basic
                    </div>
                    <ul>
                        <li><Link href="/docs">Getting started</Link></li>
                        <li><Link href="/docs/concept">Concept</Link></li>
                    </ul>
                    <div className="left-menu-header">
                        Routing
                    </div>
                    <ul>
                        <li><Link href="/docs">Getting started</Link></li>
                        <li><Link href="/docs/concept">Concept</Link></li>
                    </ul>
                    <div className="left-menu-header">
                        Data transfering
                    </div>
                    <ul>
                        <li><Link href="/docs">Getting started</Link></li>
                        <li><Link href="/docs/concept">Concept</Link></li>
                    </ul>
                </div>
            </div>
            <div>{this.props.children}</div>
        </div>);
    }
}

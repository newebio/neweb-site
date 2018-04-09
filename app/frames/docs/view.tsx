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
                    paddingBottom: "10px",
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
                        <li><Link href="/docs/routes">Types of routes</Link></li>
                        <li><Link href="/docs/concept">Concept</Link></li>
                    </ul>
                    <div className="left-menu-header">
                        Frames
                    </div>
                    <ul>
                        <li><Link href="/docs/frames">Overview</Link></li>
                        <li><Link href="/docs/view">View</Link></li>
                        <li><Link href="/docs/controller">Controller</Link></li>
                    </ul>
                    <div className="left-menu-header">
                        Modules
                    </div>
                    <ul>
                        <li><Link href="/docs/frames">Overview</Link></li>
                        <li><Link href="/docs/view">View</Link></li>
                        <li><Link href="/docs/controller">Controller</Link></li>
                    </ul>
                </div>
            </div>
            <div>{this.props.children}</div>
        </div>);
    }
}

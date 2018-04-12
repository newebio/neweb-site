import { IViewProps, Link, Styled } from "neweb";
import React = require("react");
import { backColor } from "../../styles";
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
                    <Styled styles={{
                        "ul": {
                            "list-style": "none",
                            "padding-left": "20px",
                        },
                        "ul li": {
                            display: "block",
                            margin: "5px 0",
                        },
                        "ul li a": {
                            "color": "brown",
                            "font-size": "14px",
                        },
                        ">div": {
                            "background-color": backColor,
                            "color": "white",
                            "padding": "10px",
                        },
                    }}>
                        <div className="header">
                            Basic
                        </div>
                        <ul>
                            <li><Link href="/docs">Getting started</Link></li>
                            <li><Link href="/docs/concept">Concept</Link></li>
                            <li><Link href="/docs/styles">Styles</Link></li>
                        </ul>
                        <div>
                            Routing
                        </div>
                        <ul>
                            <li><Link href="/docs/routes">Types of routes</Link></li>
                            <li><Link href="/docs/concept">Concept</Link></li>
                        </ul>
                        <div>
                            Frames
                        </div>
                        <ul>
                            <li><Link href="/docs/frames">Overview</Link></li>
                            <li><Link href="/docs/view">View</Link></li>
                            <li><Link href="/docs/controller">Controller</Link></li>
                        </ul>
                        <div>
                            Modules
                        </div>
                        <ul>
                            <li><Link href="/docs/frames">Overview</Link></li>
                            <li><Link href="/docs/view">View</Link></li>
                            <li><Link href="/docs/controller">Controller</Link></li>
                        </ul></Styled>
                </div>
            </div>
            <div>{this.props.children}</div>
        </div>);
    }
}

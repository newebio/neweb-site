import { IViewProps, Link } from "neweb";
import React = require("react");
import { IData, IParams } from "./controller";
export default class LayoutView extends React.Component<IViewProps<IParams, IData>, {}> {
    render() {
        return (<div>
            <header style={{
                height: "60px", backgroundColor: "#2C529C",
            }}>
                <div style={{
                    paddingLeft: "30px",
                    maxWidth: "1000px", margin: "auto", display: "grid",
                    alignItems: "center",
                    gridTemplateColumns: "60px 60px auto",
                    gridGap: "5px",
                }}>
                    <Link
                        href="/"
                        style={{}}><img src="/logo_white.png" style={{ height: "50px" }} /></Link>
                    <Link href="/" style={{
                        textDecoration: "none",
                        height: "50px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white", fontSize: "25px",
                    }}>Neweb</Link>
                    <div style={{
                        width: "100%", display: "grid",
                        alignItems: "center",
                        justifyContent: "right",
                    }}>
                        <div style={{
                            paddingRight: "40px",
                            listStyle: "none", display: "grid",
                            gridGap: "20px",
                            gridTemplateColumns: "auto auto auto",
                        }}>
                            <div>
                                <Link style={{ color: "white" }} href="/docs">Docs</Link></div>
                            <div><Link style={{ color: "white" }} href="/api">API</Link></div>
                            <div><Link style={{ color: "white" }} href="https://github.com/newebio/neweb"
                                target="_blank">Github</Link></div>
                        </div>
                    </div>
                </div>
            </header>
            <div style={{ maxWidth: "1000px", margin: "auto" }}>{this.props.children}</div>
        </div >);
    }
}

import { IViewProps, Link, Styled } from "neweb";
import React = require("react");

export default class LayoutView extends React.Component<IViewProps<{}, {}>, {}> {
    render() {
        return (
            <Styled styles={{ ".white": { color: "white" } }}>
                <div>
                    <header style={{
                        height: "60px",
                        /*backgroundColor: "#0B766E",*/
                        backgroundColor: "#2C529C",
                        position: "fixed",
                        width: "100%",
                    }}>
                        <div style={{
                            paddingLeft: "45px",
                            maxWidth: "1000px",
                            margin: "auto", display: "grid",
                            alignItems: "center",
                            gridTemplateColumns: "60px 60px auto",
                            gridGap: "0px",
                        }}>
                            <Link
                                href="/"
                                style={{}}><img src="/logo_white3.png"
                                    style={{ marginTop: "8px", height: "40px" }} /></Link>
                            <Link className="white" href="/" style={{
                                textDecoration: "none",
                                height: "50px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "25px",
                                color: "white",
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
                                        <Link className="white" href="/docs">Docs</Link></div>
                                    <div><Link className="white" href="/api">API</Link></div>
                                    <div><Link className="white" href="https://github.com/newebio/neweb"
                                        target="_blank">Github</Link></div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div style={{
                        maxWidth: "1000px",
                        margin: "auto",
                        paddingTop: "60px",
                    }}>{this.props.children}</div>
                    <div style={{
                        marginTop: "50px", height: "250px",
                        position: "relative",
                        boxSizing: "border-box",
                        border: "none",
                        fontWeight: 400,
                        color: "#202020",
                        fontSize: "15px",
                        lineHeight: "24px",
                        background: "#808080",
                        boxShadow: "inset 0 10px 10px -5px rgba(0,0,0,0.2)",
                        paddingTop: "2em",
                        paddingBottom: "2em",
                    }}>

                    </div>
                </div></Styled>);
    }
}

import { IViewProps, Link, Styled } from "neweb";
import React = require("react");
import { backColor } from "../../styles";

const menu = [{
    header: "Basic",
    items: [{
        title: "Getting started",
        link: "/docs",
    }, {
        title: "Concept",
        link: "/docs/concept",
    }, {
        title: "Styles",
        link: "/docs/styles",
    }],
}, {
    header: "Routing",
    items: [{
        title: "Types of routes",
        link: "/docs/routes",
    }],
}, {
    header: "Frames",
    items: [{
        title: "Overview",
        link: "/docs/frames",
    }, {
        title: "View",
        link: "/docs/view",
    }, {
        title: "Controller",
        link: "/docs/controller",
    }],
}];

export default class DocsView extends React.Component<IViewProps<{}, {}>, {}> {
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
                        ">div>div": {
                            "background-color": backColor,
                            "color": "white",
                            "padding": "10px",
                        },
                    }}>{menu.map(({ header, items }, key2) => {
                        const headerBlock = <div>{header}</div>;
                        const itemsBlock = <ul>{items.map((item, key) => {
                            return <li key={key}><Link href={item.link}>{item.title}</Link></li>;
                        })}</ul>;
                        return <div key={key2}>{headerBlock}{itemsBlock}</div>;
                    })}
                    </Styled>
                </div>
            </div>
            <div>{this.props.children}</div>
        </div>);
    }
}

import { IViewProps } from "neweb";
import React = require("react");
import { IData, IParams } from "./controller";
export default class HomeView extends React.Component<IViewProps<IParams, IData>, {}> {
    render() {
        return <div>
            <div style={{ width: "500px", margin: "0 auto" }}>
                <h1 style={{
                    textAlign: "center",
                }}>Neweb</h1>
                <p style={{ textAlign: "center", fontSize: "20px", color: "#2C529C" }}>Era of new Web</p>
                <a className="github-button"
                    href="https://github.com/newebio/neweb"
                    data-size="large" data-show-count="true"
                    aria-label="Star newebio/neweb on GitHub">Star</a>
            </div>
        </div >;
    }
}

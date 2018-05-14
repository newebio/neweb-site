import { IViewProps, Styled } from "neweb";
import React = require("react");

export default class HomeView extends React.Component<IViewProps<{}, {}>, {}> {
    render() {
        return <Styled styles={{
            h1: {
                "text-align": "center",
            },
        }}> <div>
                <div style={{ width: "500px", margin: "0 auto" }}>
                    <h1 style={{

                    }}>Neweb</h1>
                    <Styled styles={{ p: { color: "#2C529C" } }}>
                        <p style={{ textAlign: "center", fontSize: "20px" }}>Era of new Web</p>
                    </Styled>
                </div>
            </div>
        </Styled>;
    }
}
// color: "#2C529C"

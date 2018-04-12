import React = require("react");
export default class Styled extends React.Component<{
    styles: {
        [index: string]: string;
    };
}, {}> {
    static id: number = 0;
    id: number;
    componentWillMount() {
        this.id = ++Styled.id;
    }
    render() {
        return <div className={"s" + this.id}>
            <style type="text/css">{Object.keys(this.props.styles).map((selector) => {
                return ".s" + this.id + " " + selector + "{" + this.props.styles[selector] + "}";
            })}</style>
            {this.props.children}
        </div>;
    }
}

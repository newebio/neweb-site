import { Component, DynamicComponent } from "neweb";

export class LayoutView extends Component<{
    children: {
        children: Component<any>;
    };
}> {
    beforeMount() {
        this.addElement("children", new DynamicComponent({
            component: this.props.children.children,
        }));
    }
    getTemplate() {
        return require("./template.html");
    }
}
export default LayoutView;

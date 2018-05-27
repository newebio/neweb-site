"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const neweb_1 = require("neweb");
class LayoutView extends neweb_1.Component {
    beforeMount() {
        this.addElement("children", new neweb_1.DynamicComponent({
            component: this.props.children.children,
        }));
    }
    getTemplate() {
        return require("./template.html");
    }
}
exports.LayoutView = LayoutView;
exports.default = LayoutView;

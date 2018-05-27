"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const neweb_1 = require("neweb");
class DocPageView extends neweb_1.ElementComponent {
    beforeMount() {
        this.addElement("doc", new neweb_1.ElementComponent({
            innerHTML: this.props.data.body,
        }));
    }
    getTemplate() {
        return require("./template.html");
    }
}
exports.default = DocPageView;

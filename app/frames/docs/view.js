"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const neweb_1 = require("neweb");
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
        header: "Components",
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
class MenuBlockItem extends neweb_1.ElementComponent {
    beforeMount() {
        this.addElement("link", new neweb_1.Link({
            innerHTML: this.props.title,
            url: this.props.link,
        }));
    }
    getTemplate() {
        return `<li><a name="link"></a></li>`;
    }
}
class MenuItem extends neweb_1.ElementComponent {
    beforeMount() {
        this.addElement("header", new neweb_1.TextNode({
            value: this.props.header,
        }));
        this.addElement("menuBlock", new neweb_1.List({
            items: this.props.items,
            renderItem: (item) => new MenuBlockItem({
                title: item.title,
                link: item.link,
            }),
        }));
    }
    getTemplate() {
        return `<div><div><template name="header"></template></div><ul name="menuBlock"></ul></div>`;
    }
}
class DocsView extends neweb_1.ElementComponent {
    beforeMount() {
        this.addElement("menu", new neweb_1.List({
            items: menu,
            renderItem: (item) => new MenuItem({
                items: item.items,
                header: item.header,
            }),
        }));
        this.addElement("children", new neweb_1.DynamicComponent({
            component: this.props.children.children,
        }));
    }
    getTemplate() {
        return require(`./template.html`);
    }
}
exports.default = DocsView;

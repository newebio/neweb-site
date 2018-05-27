import { DynamicComponent, ElementComponent, Link, List, TextNode } from "neweb";
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
class MenuBlockItem extends ElementComponent<{
    title: string;
    link: string;
}> {
    beforeMount() {
        this.addElement("link", new Link({
            innerHTML: this.props.title,
            url: this.props.link,
        }));
    }
    getTemplate() {
        return `<li><a name="link"></a></li>`;
    }
}
class MenuItem extends ElementComponent<{
    header: string;
    items: Array<{ title: string; link: string; }>;
}> {
    beforeMount() {
        this.addElement("header", new TextNode({
            value: this.props.header,
        }));
        this.addElement("menuBlock", new List({
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
class DocsView extends ElementComponent<any> {
    beforeMount() {
        this.addElement("menu", new List({
            items: menu,
            renderItem: (item) => new MenuItem({
                items: item.items,
                header: item.header,
            }),
        }));
        this.addElement("children", new DynamicComponent({
            component: this.props.children.children,
        }));
    }
    getTemplate() {
        return require(`./template.html`);
    }
}
export default DocsView;

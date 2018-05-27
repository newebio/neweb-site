import { ElementComponent } from "neweb";
import { Observable } from "rxjs";

class DocPageView extends ElementComponent<{
    data: {
        body: Observable<string>;
    };
}> {
    beforeMount() {
        this.addElement("doc", new ElementComponent({
            innerHTML: this.props.data.body,
        }));
    }
    getTemplate() {
        return require("./template.html");
    }
}
export default DocPageView;

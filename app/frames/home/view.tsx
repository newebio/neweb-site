import { Component } from "neweb";

export class HomeView extends Component<{}> {
    getTemplate() {
        return require("./template.html");
    }
}
export default HomeView;

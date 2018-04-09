import { FrameController } from "neweb";
import fetch from "node-fetch";
export interface IData {
    body: string;
}
export interface IParams {
    url: string;
}
export default class DocpageController extends FrameController<IParams, IData, {}> {
    async getInitialData() {
        return {
            body: await (await fetch("https://raw.githubusercontent.com/" + this.config.params.url)).text(),
        };
    }
}

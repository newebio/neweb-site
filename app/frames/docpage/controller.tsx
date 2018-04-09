import { FrameController } from "neweb";
import fetch from "node-fetch";
import showdown = require("showdown");
export interface IData {
    body: string;
}
export interface IParams {
    url: string;
}
export default class DocpageController extends FrameController<IParams, IData, {}> {
    async getInitialData() {
        const converter = new showdown.Converter();
        const text = await (await fetch("https://raw.githubusercontent.com/" + this.config.params.url)).text();
        const body = converter.makeHtml(text);
        return {
            body,
        };
    }
}

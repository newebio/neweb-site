import { readFile } from "fs";
import { FrameController } from "neweb";
import showdown = require("showdown");
import { promisify } from "util";
export interface IData {
    body: string;
}
export interface IParams {
    doc: string;
}
export default class DocpageController extends FrameController<IParams, IData, {}, {}> {
    async onInit() {
        const converter = new showdown.Converter();
        const text = (await promisify(readFile)(
            __dirname + "/../../../docs/" + this.config.params.doc + ".md")).toString();
        const body = converter.makeHtml(text);
        this.data$.next({ body });
    }
}

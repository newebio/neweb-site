"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const neweb_1 = require("neweb");
const rxjs_1 = require("rxjs");
const showdown = require("showdown");
const util_1 = require("util");
class DocpageController extends neweb_1.FrameController {
    constructor() {
        super(...arguments);
        this.data = {
            body: new rxjs_1.Subject(),
        };
    }
    onInit() {
        return __awaiter(this, void 0, void 0, function* () {
            const converter = new showdown.Converter();
            const text = (yield util_1.promisify(fs_1.readFile)(__dirname + "/../../../docs/" + this.config.params.doc + ".md")).toString();
            const body = converter.makeHtml(text);
            this.data.body.next(body);
        });
    }
}
exports.default = DocpageController;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const neweb_1 = require("neweb");
class Router extends neweb_1.ClassicRouter {
    onInit() {
        this.addRoute(neweb_1.MatchedRoute({ path: "/docs/:url" }, neweb_1.PageRouteByFrame({
            frameName: "docpage",
        })));
        this.addRoute(neweb_1.MatchedRoute({ path: "/" }, neweb_1.PageRouteByFrame({
            frameName: "home",
        })));
    }
}
exports.default = Router;

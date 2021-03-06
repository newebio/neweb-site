"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const neweb_1 = require("neweb");
class Router extends neweb_1.ClassicRouter {
    onInit() {
        this.addRoute(neweb_1.MatchedRoute({ path: "/docs/:doc" }, neweb_1.PageRouteWithParent({ parentFrame: "layout" }, neweb_1.PageRouteWithParent({ parentFrame: "docs" }, neweb_1.PageRouteByFrame({
            frameName: "docpage",
        })))));
        this.addRoute(neweb_1.MatchedRoute({ path: "/api/:doc" }, neweb_1.PageRouteWithParent({ parentFrame: "layout" }, neweb_1.PageRouteWithParent({ parentFrame: "api" }, neweb_1.PageRouteByFrame({
            frameName: "docpage",
        })))));
        this.addRoute(neweb_1.MatchedRoute({ path: "/" }, neweb_1.PageRouteWithParent({ parentFrame: "layout" }, neweb_1.PageRouteByFrame({
            frameName: "home",
        }))));
        this.addRoute(neweb_1.MatchedRoute({ path: "/docs" }, neweb_1.PageRouteWithParent({ parentFrame: "layout" }, neweb_1.PageRouteWithParent({ parentFrame: "docs" }, neweb_1.PageRouteByFrame({
            frameName: "docpage",
            params: () => ({ doc: "GettingStarted" }),
        })))));
    }
}
exports.default = Router;

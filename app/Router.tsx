import { ClassicRouter, MatchedRoute, PageRouteByFrame, PageRouteWithParent } from "neweb";

export default class Router extends ClassicRouter {
    onInit() {
        this.addRoute(MatchedRoute({ path: "/docs/:doc" },
            PageRouteWithParent({ parentFrame: "layout" }, PageRouteWithParent({ parentFrame: "docs" },
                PageRouteByFrame({
                    frameName: "docpage",
                })))));
        this.addRoute(MatchedRoute({ path: "/" }, PageRouteWithParent({ parentFrame: "layout" }, PageRouteByFrame({
            frameName: "home",
        }))));
        this.addRoute(MatchedRoute({ path: "/docs" },
            PageRouteWithParent({ parentFrame: "layout" }, PageRouteWithParent({ parentFrame: "docs" },
                PageRouteByFrame({
                    frameName: "docpage",
                    params: () => ({ doc: "GettingStarted" }),
                })))));
    }
}

import { ClassicRouter, MatchedRoute, PageRouteByFrame, PageRouteWithParent } from "neweb";

export default class Router extends ClassicRouter<any, any> {
    onInit() {
        this.addRoute(MatchedRoute({ path: "/docs/:doc" },
            PageRouteWithParent({ parentFrame: "layout" }, PageRouteWithParent({ parentFrame: "docs" },
                PageRouteByFrame({
                    frameName: "docpage",
                })))));
        this.addRoute(MatchedRoute({ path: "/api/:doc" },
            PageRouteWithParent({ parentFrame: "layout" }, PageRouteWithParent({ parentFrame: "api" },
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

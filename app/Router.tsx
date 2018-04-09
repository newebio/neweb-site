import { ClassicRouter, MatchedRoute, PageRouteByFrame } from "neweb";

export default class Router extends ClassicRouter {
    onInit() {
        this.addRoute(MatchedRoute({ path: "/docs/:url" }, PageRouteByFrame({
            frameName: "docpage",
        })));
        this.addRoute(MatchedRoute({ path: "/" }, PageRouteByFrame({
            frameName: "home",
        })));
    }
}

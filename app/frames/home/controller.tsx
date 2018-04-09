import { FrameController } from "neweb";
export interface IData {

}
export interface IParams {

}
export default class HomeController extends FrameController<IParams, IData, {}> {
    async getInitialData() {
        return { } ;
    }
}

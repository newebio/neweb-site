import { FrameController } from "neweb";
export interface IData {

}
export interface IParams {

}
export default class LayoutController extends FrameController<IParams, IData, {}> {
    async getInitialData() {
        return { } ;
    }
}

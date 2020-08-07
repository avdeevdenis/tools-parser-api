import { ISberLentaState } from './sbermarket/lenta/typings';

export interface IGlobalReduxAction {
    type: string;
    payload?: any;
}

export type IDisplatch = (_: IGlobalReduxAction) => IGlobalReduxAction;

export interface IAppState {
    sberLenta: ISberLentaState;
}

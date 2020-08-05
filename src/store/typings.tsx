export interface IGlobalReduxAction {
    type: string;
    payload?: any;
}

export type IDisplatch = (_: IGlobalReduxAction) => IGlobalReduxAction;

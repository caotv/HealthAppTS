import * as React from "react";

export default interface IGlobalContextInterface {
    percent: number,
    meal: {
        name: string,
        uv: number,
        pv: number,
        amt: number,
    }[]
}

export const AppCtx = React.createContext<IGlobalContextInterface | null>(null);

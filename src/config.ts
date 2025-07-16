import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "Flexo Token Exchange",
    chainId: "galileo-4",
    createdDate: "2025-07-31T19:01:01.148Z",
    modifiedDate: "2025-07-31T19:01:01.148Z",
    id: "andromeda",
    collections: [
        {
            exchange:
                "andr1j9cxp59ky9wfw63he3g57naqvm3yzjzkf2jzd382kqfhgh88ngnsf97dpr",
            cw20: "andr10tewwtssldlqsfvx3t2vwuhz3dpmcs3ssv9uyke0fmvql2y8njkqmw5hw5",
            name: "Flexo Exchange dApp",
            type: ICollectionType.EXCHANGE,
            id: "exchange",
        },
    ],
};

export default CONFIG;

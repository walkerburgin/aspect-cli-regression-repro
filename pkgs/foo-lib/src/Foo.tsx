import React, { useEffect } from "react";

export const Foo: React.FC = () => {
    useEffect(() => {
        (async () => {
            const moment = await import(/* webpackChunkName: "moment" */ "moment").then(m => m.default);
            console.log(moment());
        })();
    });
    return <div>Hello, world</div>;
};

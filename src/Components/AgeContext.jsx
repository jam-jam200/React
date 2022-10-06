import React from "react";

const AgeContext = React.createContext(13);

const AgeProvider = AgeContext.Provider;
const AgeConsumer = AgeContext.Consumer;

export { AgeProvider, AgeConsumer };
export default AgeContext;

import React, { useState } from "react";
const ListContext =React.createContext({
    viewType:true,
    setViewtype:function(){}
})
export default ListContext;
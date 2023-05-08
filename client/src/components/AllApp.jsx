import React from 'react';
import Toolbar from "./Toolbar";
import Settings from "./Settings";
import Canvas from "./Canvas";

const AllApp = () => {
    return (
        <div>
            <Toolbar />
            <Settings />
            <Canvas />
        </div>
    );
};

export default AllApp;
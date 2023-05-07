import React from 'react';
import toolState from "../store/toolState";

const Settings = () => {
    return (
        <div className="settings">
            <label htmlFor="line-width" style={{marginLeft: '15px'}}>Толщина линии</label>
            <input style={{margin: '0 10px'}}
                   onChange={e => toolState.setLineWidth(e.target.value)}
                   id="line-width"
                   type="number"
                   defaultValue={1}
                   min={1}
                   max={50}/>
            <label htmlFor="color-stroke">Цвет обводки</label>
            <input type="color" onChange={e => toolState.setStrokeColor(e.target.value)} id="color-stroke"/>
        </div>
    );
};

export default Settings;
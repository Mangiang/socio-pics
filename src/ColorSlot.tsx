import {SketchPicker} from "react-color";
import React, {useState} from "react";

interface Props {
    item: any,
    modalIdx: () => number,
    setModalIdx: (id: number) => void
}

export const ColorSlot = (props: Props) => {
    const [currentColor, setCurrentColor] = useState<string>('#fff')
    const popover: any = {
        position: 'absolute',
        zIndex: 2,
    }
    const cover: any = {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
    }

    return (<>
        <div style={{
            border: '1px solid black',
            backgroundColor: currentColor,
            height: '50px'
        }} onClick={() => props.setModalIdx(props.item.id)}/>
        {props.modalIdx() === props.item.id &&
        <div style={popover}>
            <div style={cover} onClick={() => props.setModalIdx(-1)}/>
            <SketchPicker
                disableAlpha={true}
                color={currentColor}
                onChange={(color: any) => setCurrentColor(color.hex)}/>
        </div>
        }</>)
}
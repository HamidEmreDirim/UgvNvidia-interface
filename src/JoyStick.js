import React, { useEffect, useState } from 'react';
import { Joystick } from 'react-joystick-component';

export default function Joystickv2() {

    const [joystickData, setJoystickData] = useState({ x: 0.0, y: 0.0 })

    function ParseFloat(str, val) {
        str = str.toString();
        str = str.slice(0, (str.indexOf(".")) + val + 1);
        return Number(str);
    }

    const handleMove = (data) => {
        console.log(ParseFloat(data.x, 1), ParseFloat(data.y, 1), ParseFloat(data.y * 0.1, 2))

        if (joystickData.x != ParseFloat(data.x, 1) || joystickData.y != ParseFloat(data.y, 1)) {
            setJoystickData({ x: ParseFloat(data.x, 1), y: ParseFloat(data.y, 1) })
        }
        //setJoystickData({ x: ParseFloat(data.x, 1), y: ParseFloat(data.y, 1) })
    };

    const handleStop = () => {
        setJoystickData({ x: 0, y: 0 })
    };

    return (
        <>
            <div style={{ justifyContent: 'center', display: 'flex', marginTop: '30px', marginBottom: '30px' }}>
                <Joystick size={160} baseColor="#1a1a1a" stickColor="white" move={handleMove} stop={handleStop}></Joystick>
            </div>
        </>
    )
}
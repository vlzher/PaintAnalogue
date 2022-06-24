import React from 'react';
import "../styles/canvas.scss"

const Canvas = () => {
    return (
        <div className="canvas">
            <canvas width={1000} height={800}></canvas>
        </div>
    );
};

export default Canvas;
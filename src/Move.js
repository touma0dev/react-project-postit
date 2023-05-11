import React, { useEffect, useState } from 'react';

const MousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const handleMouseDown = () => {
    if(isDragging===false){
      setIsDragging(true);
    }else if(isDragging===true){
      setIsDragging(false);
    }
  };
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (isDragging) {
        setPosition({
          x: event.clientX,
          y: event.clientY,
          left: event.clientX,
          top: event.clientY,
          right: window.innerWidth - event.clientX,
          bottom: window.innerHeight - event.clientY
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDragging]);
  return (
    <div onClick={handleMouseDown} style={{ position: 'absolute', left: position.left, right: position.right, top: position.top, bottom: position.bottom }}>
      Mouse position:
      <ul>
        <li>X: {position.x}</li>
        <li>Y: {position.y}</li>
        <li>Left: {position.left}</li>
        <li>Top: {position.top}</li>
        <li>Right: {position.right}</li>
        <li>Bottom: {position.bottom}</li>
      </ul>
    </div>
  );
};

export default MousePosition;

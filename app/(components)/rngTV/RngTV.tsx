'use client'

import { useState, useEffect } from 'react'

import styles from './rngTV.module.css'
import TvScreen from './(subComps)/TvScreen/TvScreen'

const RngTV = () => {

  const [position, setPosition] = useState({ left: 0, top: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ left: 0, top: 0 });


  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setDragging(true);
    setOffset({
      left: event.clientX - position.left,
      top: event.clientY - position.top,
    });
  };

  const handleDrag = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    if (dragging) {
      setPosition({
        left: event.clientX - offset.left,
        top: event.clientY - offset.top,
      });
    }
  };
  
  const handleDragEnd = () => {
    setDragging(false);
  };

  return (
    <div 
      className={styles.rngTV} 
      style={{
        left: `${position.left}px`,
        top: `${position.top}px`,
      }}
      draggable
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
    >
      <div className={styles.innerLeft}>
        <TvScreen />
      </div>
      <div className={styles.innerRight}> </div>

    </div>
  )
}

export default RngTV


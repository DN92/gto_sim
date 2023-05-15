'use client';

import { useState, useEffect } from 'react';
import styles from './TvScreen.module.css'

function generateKey(length: number = 8) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

function padNumberWithZeros(num: number, desiredLength: number): string {
  let numString = num.toString();
  
  while (numString.length < desiredLength) {
    numString = '0' + numString;
  }
  
  return numString;
}


const TvScreen = () => {

  function getRandomNumber(inputRange: number = 100) {
    return Math.floor(Math.random() * (inputRange))
  }

  const [rgn, setRgn] = useState(getRandomNumber());

  useEffect(() => {
    const rgnSetter = setInterval(() => {
      setRgn(getRandomNumber()) 
    }, 3 * 1000)

    return () => clearInterval(rgnSetter)
  }, [])


  return (
    <div className={styles.tvScreen} >
      <div className={styles.tvDisplayOuter}>
        <div className={styles.tvDisplayInner}>
          {padNumberWithZeros(rgn, 3).split('').map(ele => (
            <span key={generateKey()}>
              {ele}
            </span>
          ))}
        </div>
      </div>
    </div>
  ) 
}

export default TvScreen
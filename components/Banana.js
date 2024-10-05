import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';

const BananaContainer = styled('div')({
  position: 'absolute',
  width: 50,
  height: 50,
  borderRadius: '50%',
  backgroundColor: 'yellow',
  transform: 'rotate(45deg)',
});

const Banana = () => {
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);
  const [directionX, setDirectionX] = useState(null);
  const [directionY, setDirectionY] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setX(Math.random() * window.innerWidth);
      setY(Math.random() * window.innerHeight);
      setDirectionX(Math.random() < 0.5 ? -1 : 1);
      setDirectionY(Math.random() < 0.5 ? -1 : 1);
    }
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setX(x => x + directionX * 2);
      setY(y => y + directionY * 2);

      if (x + 50 > window.innerWidth || x - 50 < 0) {
        setDirectionX(directionX => -directionX);
      }
      if (y + 50 > window.innerHeight || y - 50 < 0) {
        setDirectionY(directionY => -directionY);
      }
    }, 16);

    return () => clearInterval(intervalId);
  }, [x, y, directionX, directionY]);

  return (
    <BananaContainer style={{ left: x, top: y }} />
  );
};

export default Banana;
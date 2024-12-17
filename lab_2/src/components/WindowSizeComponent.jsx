import React from 'react';
import useWindowSize from '../hooks/useWindowSize';

const WindowSizeComponent = () => {
  const { width, height } = useWindowSize();

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd' }}>
      <h2>Window Size</h2>
      <p>
        <strong>Width:</strong> {width}px
      </p>
      <p>
        <strong>Height:</strong> {height}px
      </p>
    </div>
  );
};

export default WindowSizeComponent;

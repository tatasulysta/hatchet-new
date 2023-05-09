import LoaderAnimation from 'assets/Loader.json';
import Lottie from 'lottie-react';
import React from 'react';

export default function Loader() {
  return (
    <div
      style={{
        margin: '0 auto',
        height: 'calc(100vh - 316px)',
        alignItems: 'center',
        display: 'flex',
      }}
    >
      <div style={{ width: '200px' }}>
        <Lottie animationData={LoaderAnimation} loop />
      </div>
    </div>
  );
}

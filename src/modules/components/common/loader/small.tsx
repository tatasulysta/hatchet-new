import LoaderAnimationSmall from 'assets/loadingsmall.json';
import Lottie from 'lottie-react';
import React from 'react';

export default function LoaderSmall() {
  return (
    <div style={{ width: '65px', height: '65px' }}>
      <Lottie animationData={LoaderAnimationSmall} loop />
    </div>
  );
}

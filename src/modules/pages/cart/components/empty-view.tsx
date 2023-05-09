import { Typography } from '@mui/joy';
import NoFace from 'assets/NoFace.json';
import Lottie from 'lottie-react';
import { useRouter } from 'next/router';
import React from 'react';

import { emptyViewStyles } from './styles.css';

export default function EmptyView({ isNotLogin }: { isNotLogin: boolean }) {
  const router = useRouter();
  return (
    <div className={emptyViewStyles.container}>
      <Typography
        variant="soft"
        level="body2"
        bgcolor="#EBF4F1"
        textColor="#152258"
      >
        {isNotLogin ? 'Please Login' : 'There is no items here'}
      </Typography>
      <div
        className={emptyViewStyles.animationContainer}
        style={{ margin: '0 auto' }}
      >
        <Lottie animationData={NoFace} loop />
      </div>
      {isNotLogin ? (
        <Typography
          // variant="soft"
          level="body2"
          // bgcolor="#EBF4F1"
          textColor="#152258"
        >
          Unfortunately you haven't login Click here to{' '}
          <span
            className={emptyViewStyles.link}
            onClick={() => router.push('/register')}
          >
            register
          </span>{' '}
          or{' '}
          <span
            className={emptyViewStyles.link}
            onClick={() => router.push('/login')}
          >
            login
          </span>{' '}
          to continue shopping
        </Typography>
      ) : (
        <Typography
          // variant="soft"
          level="body2"
          // bgcolor="#EBF4F1"
          textColor="#152258"
        >
          Click{' '}
          <span
            className={emptyViewStyles.link}
            onClick={() => router.push('/')}
          >
            here
          </span>{' '}
          to continue shopping
        </Typography>
      )}
    </div>
  );
}

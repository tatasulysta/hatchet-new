import { Typography } from '@mui/joy';
import { useRouter } from 'next/router';
import React from 'react';

import { headerStyles } from './styles.css';

export default function HeaderDefault() {
  const router = useRouter();
  return (
    <div className={headerStyles.container}>
      <Typography
        level="body1"
        textColor="common.white"
        fontWeight="Bold"
        style={{
          cursor: 'pointer',
        }}
        onClick={() => router.push('/')}
      >
        Hatchet
      </Typography>
    </div>
  );
}

import { Button } from '@mui/joy';
import { User } from 'iconsax-react';
import { useGetMe } from 'modules/api-hooks/auth/query';
import { moduleStyles } from 'modules/styles/module.css';
import { useRouter } from 'next/router';
import React from 'react';

import Separator from '../../separator';

export default function UserInformation() {
  const { data } = useGetMe();
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push('/profile')}
      variant="outlined"
      size="sm"
    >
      <div className={moduleStyles.flexCenter}>
        <div>
          <User size={18} variant="Outline" />
        </div>
        <Separator direction="horizontal" gap={4} />
        {data?.data.email}
      </div>
    </Button>
  );
}

import { Typography } from '@mui/joy';
import { moduleStyles } from 'modules/styles/module.css';
import Link from 'next/link';
import React from 'react';

import UserInformation from './user-information';
import Separator from '../../separator';
import { headerStyles } from '../styles.css';

export default function HeaderTop() {
  const [isMounted, setIsMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (isMounted) {
    return (
      <div className={headerStyles.upperContainer}>
        <div className={moduleStyles.flexCenter}>
          <Typography level="body5" textColor="common.white" fontWeight="sm">
            Call us 24/7 : (+62) 0123 567 789
          </Typography>
          <Separator gap={4} direction="horizontal" />
          <Separator gap={4} direction="horizontal" />
          <div
            style={{ borderLeft: '1px solid white', width: 4, height: 16 }}
          />

          <Separator gap={4} direction="horizontal" />
          <Link href="/help">
            <Typography
              level="body5"
              textColor="common.white"
              fontWeight="md"
              className={headerStyles.link}
            >
              Help Center
            </Typography>
          </Link>
        </div>
        <div className={moduleStyles.flexCenter}>
          {!localStorage.getItem('auth') ? (
            <>
              <Link href="/register">
                <Typography
                  level="body5"
                  textColor="common.white"
                  fontWeight="md"
                  className={headerStyles.link}
                >
                  Register
                </Typography>
              </Link>
              <Separator gap={4} direction="horizontal" />
              <Separator gap={4} direction="horizontal" />

              <div
                style={{ borderLeft: '1px solid white', width: 4, height: 16 }}
              />
              <Separator gap={4} direction="horizontal" />
              <Link href="/login">
                <Typography
                  level="body5"
                  textColor="common.white"
                  fontWeight="md"
                  className={headerStyles.link}
                >
                  Sign In
                </Typography>
              </Link>
            </>
          ) : (
            <UserInformation />
          )}
        </div>
      </div>
    );
  }
  return <></>;
}

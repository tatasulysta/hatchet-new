import { Typography } from '@mui/joy';
import classNames from 'classnames';
import { ProfileCircle } from 'iconsax-react';
import { useGetMe } from 'modules/api-hooks/auth/query';
import Separator from 'modules/components/common/separator';
import { color } from 'modules/styles/colors';
import { moduleStyles } from 'modules/styles/module.css';
import Link from 'next/link';
import React from 'react';

import { profileStyles } from '../styles.css';

export default function UserInfo({
  showEditProfile,
}: {
  showEditProfile?: boolean;
}) {
  const { data } = useGetMe();

  return (
    <div
      className={classNames(moduleStyles.flexCenter, profileStyles.fitContent)}
    >
      <ProfileCircle color={color.neutral2} size={60} />
      <Separator gap={12} />
      <div>
        <Typography level="body3" textColor="common.black">
          {data?.data.email && data.data.email.length > 8
            ? data?.data.email.substring(0, 8) + '...'
            : data?.data.email}
        </Typography>
        {showEditProfile && (
          <Link href="/profile/edit">
            <Typography level="body4" textColor="neutral.400">
              edit profile
            </Typography>
          </Link>
        )}
      </div>
    </div>
  );
}

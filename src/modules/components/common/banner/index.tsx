import { Typography } from '@mui/joy';
import { BoxTick, Crown, ShieldSecurity } from 'iconsax-react';
import { color } from 'modules/styles/colors';
import React from 'react';

import { bannerStyles } from './styles.css';
import Separator from '../separator';

function BannerItem({
  title,
  desc,
  Icon,
}: {
  title: string;
  desc: string;
  Icon: (size: number, color: string) => React.ReactNode;
}) {
  return (
    <div className={bannerStyles.itemContainer}>
      {Icon(42, color.warning1)}
      <Separator gap={24} direction="horizontal" />
      <div>
        <Typography level="body2" textColor="common.white">
          {title}
        </Typography>
        <Typography level="body4" textColor="common.white" fontWeight="sm">
          {desc}
        </Typography>
      </div>
    </div>
  );
}
export default function Banner() {
  const items = React.useMemo(() => {
    return [
      {
        title: 'Fast Pick Up',
        desc: 'fast Service',
        Icon: (size, color) => (
          <BoxTick size={size} color={color} variant="Bold" />
        ),
      },
      {
        title: 'Best Quality',
        desc: 'best quality in low price',
        Icon: (size, color) => (
          <Crown size={size} color={color} variant="Bold" />
        ),
      },
      {
        title: 'Trusted Score',
        desc: 'shop with confidence',
        Icon: (size, color) => (
          <ShieldSecurity size={size} color={color} variant="Bold" />
        ),
      },
    ];
  }, []);
  return (
    <div className={bannerStyles.container}>
      {/* <BannerItem
        title="Fast Pick Up"
        desc="Fast Service"
        Icon={(size, color) => <BoxTick size={size} color={color} />}
      /> */}
      <div className={bannerStyles.innerContainer}>
        {items.map((item, index) => (
          <BannerItem {...item} key={index} />
        ))}
      </div>
    </div>
  );
}

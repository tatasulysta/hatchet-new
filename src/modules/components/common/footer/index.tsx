import { Button, Typography } from '@mui/joy';
import { Headphone, Send2 } from 'iconsax-react';
import { color } from 'modules/styles/colors';
import { moduleStyles } from 'modules/styles/module.css';
import React from 'react';

import { footerStyles } from './styles.css';
import Separator from '../separator';

export default function Footer() {
  return (
    <div className={footerStyles.container}>
      <div className={footerStyles.innerContainer}>
        <div className={footerStyles.titleContainer}>
          <Typography fontWeight="xl" level="body1" textColor="primary.200">
            HAtchet
          </Typography>
        </div>
        <div className={footerStyles.rightContainer}>
          <Button endDecorator={<Send2 />} className={footerStyles.button}>
            <Typography level="body5" textColor="common.white">
              hatchet@gmail.com
            </Typography>
          </Button>
          <div className={moduleStyles.flex}>
            <Headphone size={32} color={color.warning1} />
            <Separator gap={16} />
            <span>
              <Typography level="body5">Call us 24/7 :</Typography>
              <Typography level="body5">(+62) 0123 567 789</Typography>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

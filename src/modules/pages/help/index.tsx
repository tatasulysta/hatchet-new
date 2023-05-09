import { Typography } from '@mui/joy';
import DefaultLayout from 'modules/components/common/layout';
import Separator from 'modules/components/common/separator';
import Image from 'next/image';
import React from 'react';

import { helpStyles } from './style.css';

function LinkComponent({ link, name }) {
  const handleClickScroll = () => {
    const element = document.getElementById(link.substring(1));
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div onClick={handleClickScroll} style={{ cursor: 'pointer' }}>
      <Typography
        level="body2"
        textColor="common.neutral5"
        fontWeight="md"
        className={helpStyles.button}
      >
        {name}
      </Typography>
    </div>
  );
}

function SectionItem({ id, src, title }) {
  return (
    <section id={id}>
      <div
        style={{
          width: '100%',
        }}
      >
        <Separator direction="vertical" gap={64} />
        <Typography
          level="body2"
          textColor="common.neutral5"
          fontWeight="md"
          className={helpStyles.title}
        >
          {title}
        </Typography>
        <Separator direction="vertical" gap={32} />
        <div
          style={{
            width: '80%',
            margin: '0 auto',
          }}
        >
          <div className="image-container">
            <Image src={src} fill className="image" alt="homepage-guide" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default function Help() {
  return (
    <DefaultLayout isAuth={false}>
      <div className={helpStyles.container}>
        <div style={{ flex: 1 }}>
          <div className="image-container">
            <Image
              src="/assets/guide-cover.png"
              fill
              className="image"
              alt="fdjsaj"
            />
          </div>
        </div>
        <Separator gap={32} />
        <div style={{ flex: 1 }}>
          <Typography level="h1" textColor="common.neutral5">
            Website Functionality Guide
          </Typography>
          <LinkComponent link="#top-part" name="Top Part" />
          <LinkComponent link="#product-item" name="Product Item" />
          <LinkComponent
            link="#product-detail"
            name="Product Detail, Add Item to Cart"
          />
          <LinkComponent link="#cart" name="Cart" />
          <LinkComponent
            link="#profile-transaction"
            name="Profile and Transaction History"
          />
          <LinkComponent link="#edit-profile" name="Edit Profile" />
        </div>
      </div>

      <SectionItem
        id="top-part"
        src="/assets/guide-homepage.png"
        title="Top Part"
      />
      <SectionItem
        id="product-item"
        src="/assets/guide-product-item.png"
        title="Product Item"
      />
      <SectionItem
        id="product-detail"
        src="/assets/guide-product-detail.png"
        title="Product Detail, Add Item to Cart"
      />
      <SectionItem id="cart" src="/assets/guide-carts.png" title="Cart" />
      <SectionItem
        id="profile-transaction"
        src="/assets/guide-profile-history.png"
        title="Profile and Transaction History"
      />
      <SectionItem
        id="edit-profile"
        src="/assets/guide-edit-profile.png"
        title="Edit Profile"
      />
    </DefaultLayout>
  );
}

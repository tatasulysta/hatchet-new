import { Button, Grid, Typography } from '@mui/joy';
import { string2moneyDefault } from 'common/helpers/format';
import { ArrowCircleLeft, ArrowCircleRight, Location } from 'iconsax-react';
import { useAddCarts } from 'modules/api-hooks/cart';
import { useGetProduct } from 'modules/api-hooks/product';
import DefaultLayout from 'modules/components/common/layout';
import ProductCard from 'modules/components/common/product-card';
import Separator from 'modules/components/common/separator';
import { color } from 'modules/styles/colors';
import { moduleStyles } from 'modules/styles/module.css';
import { useRouter } from 'next/router';
import React from 'react';
import ImageGallery from 'react-image-gallery';
import { toast } from 'react-toastify';

import QuantityInput from './components';
import StoreIcon from './components/store-icon';
import { productDetailStyle } from './styles.css';

export default function ProductDetail() {
  const router = useRouter();
  const { data } = useGetProduct(router.query.id as string);
  const [quantity, setQuantity] = React.useState<number>(0);
  const { mutateAsync } = useAddCarts();

  const handleAddCart = React.useCallback(async () => {
    try {
      const res = await mutateAsync({
        qty: quantity,
        product_id: router.query.id,
      } as any);
      toast.success(res.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setQuantity(0);
    } catch (error) {
      toast.error(error?.response?.data?.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }, [mutateAsync, quantity, router.query.id]);

  return (
    <DefaultLayout isAuth>
      <Separator direction="vertical" gap={32} />
      <Grid container spacing={{ xs: 5 }}>
        <Grid xs={6}>
          <ImageGallery
            items={
              data?.data.images.map((item) => {
                return {
                  thumbnail: item.url,
                  original: item.url,
                  originalHeight: '300px',
                };
              }) || []
            }
            showPlayButton={false}
            showFullscreenButton={false}
            showBullets
            renderLeftNav={(onClick, disabled) => (
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  zIndex: 88,
                  cursor: 'pointer',
                }}
              >
                <ArrowCircleLeft onClick={onClick} variant="Bulk" />
              </div>
            )}
            renderRightNav={(onClick, disabled) => (
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: 0,
                  zIndex: 88,
                  cursor: 'pointer',
                }}
              >
                <ArrowCircleRight onClick={onClick} variant="Bulk" />
              </div>
            )}
          />
        </Grid>
        <Grid xs={6}>
          <Typography
            level="bodyDefault"
            fontWeight="lg"
            textColor="primary.100"
            textTransform="capitalize"
          >
            {data?.data.name}
          </Typography>
          <Typography level="body1" textColor="neutral.500" fontWeight="lg">
            Rp. {string2moneyDefault(Number(data?.data.price))}
          </Typography>
          <Separator direction="vertical" gap={12} />
          <Typography level="body3" fontWeight="md" textColor="common.black">
            Availablity: {data?.data.stock}
          </Typography>
          <Separator direction="vertical" gap={12} />
          {data?.data?.minQty ? (
            <Typography level="body4" fontWeight="md" textColor="neutral.300">
              Minimal order {data?.data?.minQty}{' '}
              {data?.data?.minQty > 1 ? 'pcs' : 'pc'}
            </Typography>
          ) : (
            <></>
          )}
          <Separator direction="vertical" gap={24} />
          <div className={productDetailStyle.separator} />
          <Separator direction="vertical" gap={24} />
          <Typography level="body3" fontWeight="md" textColor="common.black">
            Description:
          </Typography>
          <Separator direction="vertical" gap={8} />
          <Typography
            level="body3"
            fontWeight="md"
            textColor="common.black"
            sx={{ minHeight: '110px' }}
          >
            {data?.data.description}
          </Typography>
          <Separator direction="vertical" gap={16} />
          <div className={moduleStyles.flexCenter}>
            <Typography level="body3" fontWeight="md" textColor="common.black">
              Quantity
            </Typography>
            <Separator direction="horizontal" gap={32} />
            <Typography level="body3" fontWeight="md" textColor="common.black">
              :
            </Typography>
            <Separator direction="horizontal" gap={24} />
            <QuantityInput
              quantity={quantity}
              setQuantity={setQuantity}
              maxValue={data?.data.stock || 0}
            />
          </div>
          <Separator direction="vertical" gap={24} />
          <Button
            size="lg"
            onClick={() => handleAddCart()}
            disabled={
              data?.data?.minQty ? quantity < data?.data?.minQty : false
            }
          >
            Add to Cart
          </Button>
          <Separator direction="vertical" gap={12} />

          <Typography level="body3" fontWeight="md" textColor="common.black">
            Category:{'   '}
            <Typography level="body4" fontWeight="sm" textColor="common.black">
              {data?.data.category}
            </Typography>
          </Typography>
        </Grid>
      </Grid>
      <Separator direction="vertical" gap={42} />
      <Grid container>
        <Typography
          level="body4"
          fontWeight="lg"
          textColor="primary.200"
          className={productDetailStyle.information}
        >
          SELLER INFORMATION
        </Typography>

        <div className={productDetailStyle.separator} />
        <Grid>
          <Separator direction="vertical" gap={24} />
          <div className={moduleStyles.flexCenter}>
            <StoreIcon />
            <Separator direction="horizontal" gap={20} />
            <Typography level="body4" fontWeight="lg" textColor="primary.100">
              {data?.data.store.name}
            </Typography>
          </div>
          <Separator direction="vertical" gap={12} />
          <div className={moduleStyles.flexCenter}>
            <Location variant="Bold" color={color.primary1} size={30} />
            <Separator direction="horizontal" gap={24} />
            <Typography level="body4" fontWeight="lg" textColor="primary.100">
              {data?.data.store.address}
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Separator direction="vertical" gap={42} />
      <Grid>
        <Typography level="body2" fontWeight="lg" textColor="primary.200">
          Related Product
        </Typography>

        <Grid spacing={2} container>
          {data?.data.relatedProduct.length ? (
            <>
              <Separator direction="vertical" gap={24} />
              {data?.data.relatedProduct.map((item) => (
                <Grid xs={2}>
                  <ProductCard {...item} />
                </Grid>
              ))}
            </>
          ) : (
            <Grid>
              <Separator direction="vertical" gap={12} />
              <div
                style={{
                  display: 'grid',
                  placeItems: 'center',
                  width: 'calc(100vw - 316px)',
                }}
              >
                <Typography level="body4" fontWeight="sm">
                  No Related Product...
                </Typography>
              </div>
            </Grid>
          )}
        </Grid>
      </Grid>
      <Separator direction="vertical" gap={20} />
    </DefaultLayout>
  );
}

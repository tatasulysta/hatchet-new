import { Grid, Typography } from '@mui/joy';
import { useGetProducts } from 'modules/api-hooks/product';
import Banner from 'modules/components/common/banner';
import DefaultLayout from 'modules/components/common/layout';
import ProductCard from 'modules/components/common/product-card';
import Separator from 'modules/components/common/separator';
import React from 'react';

export default function Home() {
  const [search, setSearch] = React.useState<string>('');
  const { data } = useGetProducts(search);

  return (
    <DefaultLayout isAuth setSearch={setSearch}>
      <Typography
        level="body2"
        textColor="primary.100"
        fontWeight="medium"
        sx={{
          fontWeight: 600,
        }}
      >
        Popular Products
      </Typography>
      <Separator gap={12} />
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 2, md: 12, lg: 12 }}
        sx={{ flexGrow: 1 }}
      >
        {data?.data.map((item, index) => (
          <>
            {Math.round(data.data.length / 1) === index + 1 ? (
              <>
                <Grid xs={12}>
                  <Separator gap={24} />
                  <Banner />
                  <Separator gap={24} />
                </Grid>
                <Grid xs={2}>
                  <ProductCard {...item} />
                </Grid>
              </>
            ) : (
              <Grid xs={2}>
                <ProductCard {...item} />
              </Grid>
            )}
          </>
        ))}
      </Grid>
    </DefaultLayout>
  );
}

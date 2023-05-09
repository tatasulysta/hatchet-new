import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import { string2moneyDefault } from 'common/helpers/format';
import { ProductLite, ProductLiteModel } from 'modules/api-hooks/product';
import Image from 'next/image';
import { useRouter } from 'next/router';
import * as React from 'react';

import Separator from '../separator';

export default function ProductCard(props: ProductLite | ProductLiteModel) {
  const { id, name, price } = props;
  const router = useRouter();
  const fileName = props.hasOwnProperty('fileName')
    ? (props as any).fileName
    : (props as any).file_name;

  return (
    <Card
      variant="outlined"
      style={{ cursor: 'pointer' }}
      onClick={() => router.push(`/product/${id}`)}
    >
      <CardOverflow>
        <AspectRatio ratio="2">
          <Image
            src={fileName || '/placeholder.jpeg'}
            loading="lazy"
            fill
            alt={name}
          />
        </AspectRatio>
      </CardOverflow>
      <Separator gap={8} />
      <Typography level="body4" textColor="primary.100">
        {name.length > 19 ? name.substring(0, 19) + '...' : name}
      </Typography>
      <Separator gap={3} />
      <Typography level="body4" textColor="neutral.500">
        {string2moneyDefault(price)}
      </Typography>
      <Separator gap={3} />
      <Typography level="body4" textColor="info.200">
        see details
      </Typography>
    </Card>
  );
}

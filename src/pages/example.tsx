import { Button, Chip } from '@mui/joy';
import Banner from 'modules/components/common/banner';
import Footer from 'modules/components/common/footer';
import Form from 'modules/components/common/form/form';
import Header from 'modules/components/common/header';
import Input from 'modules/components/common/input';
import DefaultLayout from 'modules/components/common/layout';
import ProductCard from 'modules/components/common/product-card';
import React from 'react';
import { useForm } from 'react-hook-form';

export default function Example() {
  const methods = useForm({
    defaultValues: {
      date: new Date(),
      single: false,
    },
    mode: 'onChange',
  });

  return (
    <>
      <Chip color="neutral">Menunggu Konfirmasi</Chip>
      <Chip color="danger">Dibatalkan</Chip>
      <Chip color="info">Dikemas</Chip>
      <Chip color="success">Selesai</Chip>
      <Chip color="warning">Hutang</Chip>

      <br />

      {/* <DefaultLayout>
        <Form methods={methods} onSubmit={(val) => console.log(val)}>
          <Input name="hello" style={{ width: '500px' }} />
          <Button variant="outlined">hdhdh</Button>
        </Form>
        <ProductCard />
        <Banner />
      </DefaultLayout>
      <Footer /> */}
    </>
  );
}

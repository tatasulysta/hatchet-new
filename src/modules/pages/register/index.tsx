import { Button, Typography, colors } from '@mui/joy';
import useYupValidationResolver from 'common/hooks/use-yup-validation-resolver';
import _ from 'lodash';
import { useRegister } from 'modules/api-hooks/auth';
import Alert from 'modules/components/common/alert';
import Form from 'modules/components/common/form/form';
import Input from 'modules/components/common/input';
import DefaultLayout from 'modules/components/common/layout';
import Separator from 'modules/components/common/separator';
import { moduleStyles } from 'modules/styles/module.css';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { registerStyles } from './styles.css';

export default function Register() {
  const { isLoading, mutateAsync, data, isSuccess, error, isError } =
    useRegister();

  const schema = React.useMemo(
    () =>
      Yup.object().shape({
        email: Yup.string().required(),
        password: Yup.string().required(),
        phoneNumber: Yup.number().required(),
      }),
    [],
  );

  const initialValues = React.useMemo(() => {
    return {
      email: '',
      password: '',
      phoneNumber: null,
    };
  }, []);

  const resolver = useYupValidationResolver(schema);

  const methods = useForm({
    defaultValues: initialValues,
    resolver,
    mode: 'all',
  });

  const onSubmit = React.useCallback(
    async (values) => {
      try {
        const res = await mutateAsync({
          ...values,
          phone_number: values.phoneNumber.toString(),
        });
        toast.success(res?.data?.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      } catch (error) {
        toast.error(error?.response?.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    },
    [mutateAsync],
  );

  return (
    <DefaultLayout noFooter noBottomPadding>
      {!!isSuccess && (
        <div style={{ position: 'relative', top: 0 }}>
          <Alert title="Success" color="success">
            Successfully Registered! Click here toast
            <Separator gap={4} />
            <Link
              href="/sign-up"
              style={{
                textDecoration: 'underline',
                color: colors.blue[500],
              }}
            >
              Sign In
            </Link>
          </Alert>
        </div>
      )}
      <div className={moduleStyles.centerDiv}>
        {!!isSuccess && <Separator direction="vertical" gap={48} />}
        <div className={registerStyles.container}>
          <div className={moduleStyles.card}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <Image
                src="/assets/register.png"
                width={433}
                height={350}
                alt="register.png"
                className={registerStyles.imageContainer}
              />
              <div className={registerStyles.rightContainer}>
                <Typography
                  level="body2"
                  textColor="neutral.400"
                  fontWeight="bold"
                >
                  Register
                </Typography>
                <Typography level="body3" textColor="neutral.300">
                  Please fill in required data
                </Typography>
                <Separator gap={32} />
                <Form methods={methods} onSubmit={onSubmit}>
                  <Input type="email" placeholder="Email" name="email" />
                  <Separator gap={24} />
                  <Input
                    type="password"
                    placeholder="Password"
                    name="password"
                  />
                  <Separator gap={24} />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    name="phoneNumber"
                  />
                  <Separator gap={32} />

                  <Button type="submit" size="lg">
                    <Typography textColor="white" level="body3">
                      Register
                    </Typography>
                  </Button>
                </Form>
                <Separator gap={24} />

                <Typography level="body4" className={registerStyles.text}>
                  Already have account?{' '}
                  <Link href="/sign-up" className={registerStyles.link}>
                    Sign In
                  </Link>
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

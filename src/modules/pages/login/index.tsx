import { Button, Typography } from '@mui/joy';
import useYupValidationResolver from 'common/hooks/use-yup-validation-resolver';
import { useLogin, Auth } from 'modules/api-hooks/auth';
import Alert from 'modules/components/common/alert';
import Form from 'modules/components/common/form/form';
import Input from 'modules/components/common/input';
import DefaultLayout from 'modules/components/common/layout';
import Separator from 'modules/components/common/separator';
import { moduleStyles } from 'modules/styles/module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { loginStyles } from './styles.css';

export default function Login() {
  const { isLoading, mutateAsync, error, isError } = useLogin();

  const schema = React.useMemo(
    () =>
      Yup.object().shape({
        email: Yup.string().required(),
        password: Yup.string().required(),
      }),
    [],
  );

  const initialValues = React.useMemo(() => {
    return {
      email: '',
      password: '',
    };
  }, []);

  const resolver = useYupValidationResolver(schema);

  const methods = useForm({
    defaultValues: initialValues,
    resolver,
    mode: 'all',
  });

  const router = useRouter();
  const onSubmit = React.useCallback(
    async (values) => {
      try {
        const res = await mutateAsync({
          ...values,
        });
        await localStorage.setItem(
          'auth',
          (res.data as Auth).authorization.token,
        );
        await router.push('/');
      } catch (error) {
        console.log(error);
      }
    },
    [mutateAsync, router],
  );

  return (
    <DefaultLayout noFooter noBottomPadding>
      {!!isError && (
        <Alert title="Error" color="danger">
          {error.response?.data.message}
        </Alert>
      )}
      <div className={moduleStyles.centerDiv}>
        {!!isError && <Separator direction="vertical" gap={48} />}

        <div className={loginStyles.container}>
          <div className={moduleStyles.card}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <Image
                src="/assets/login.png"
                width={519}
                height={318}
                alt="register.png"
                className={loginStyles.imageContainer}
              />

              <div className={loginStyles.rightContainer}>
                <Typography
                  level="body2"
                  textAlign="center"
                  textColor="neutral.400"
                  fontWeight="bold"
                >
                  Welcome Back!
                </Typography>
                <Typography level="body3" textColor="neutral.300">
                  Sign in and let’s get started
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
                  <Separator gap={32} />

                  <Button type="submit" loading={isLoading}>
                    <Typography textColor="white" level="body3">
                      Sign In
                    </Typography>
                  </Button>
                </Form>
                <Separator gap={24} />

                <Typography level="body4">
                  Don't have account yet?{' '}
                  <Link href="/sign-up" className={loginStyles.link}>
                    Sign Up
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

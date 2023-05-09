import { Button, Typography } from '@mui/joy';
import classNames from 'classnames';
import useYupValidationResolver from 'common/hooks/use-yup-validation-resolver';
import { useEditProfile } from 'modules/api-hooks/auth';
import { useGetMe } from 'modules/api-hooks/auth/query';
import Form from 'modules/components/common/form/form';
import Input from 'modules/components/common/input';
import DefaultLayout from 'modules/components/common/layout';
import Separator from 'modules/components/common/separator';
import { moduleStyles } from 'modules/styles/module.css';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import UserInfo from './components/user-info';
import { profileStyles } from './styles.css';
import { productDetailStyle } from '../product-detail/styles.css';

export default function ProfileEdit() {
  const { data } = useGetMe();
  const { mutateAsync } = useEditProfile();
  const schema = React.useMemo(
    () =>
      Yup.object().shape({
        email: Yup.string().required(),
        password: Yup.string().required(),
        phone_number: Yup.string().required(),
      }),
    [],
  );

  const initialValues = React.useMemo(() => {
    return {
      email: data?.data.email || '',
      password: '',
      phone_number: data?.data.phone_number || '',
    };
  }, []);

  const resolver = useYupValidationResolver(schema);

  const methods = useForm({
    defaultValues: initialValues,
    resolver,
    mode: 'all',
  });

  const onSubmit = React.useCallback(async (values) => {
    try {
      const res = await mutateAsync({
        ...values,
      } as any);
      await toast.success((res as any)?.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (e) {
      toast.error(e?.response?.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }, []);

  return (
    <DefaultLayout isAuth>
      <div className={profileStyles.container}>
        <UserInfo />
        <Separator direction="horizontal" gap={48} />
        <div className={classNames(profileStyles.card, profileStyles.flex1)}>
          <Typography level="body2" textColor="common.black" fontWeight="lg">
            My Profile
          </Typography>
          <Typography level="body4" textColor="neutral.300">
            Manage your profile information to control, protect and secure your
            account
          </Typography>
          <Separator direction="vertical" gap={8} />
          <div className={productDetailStyle.separator}>
            <Separator direction="vertical" gap={18} />

            <Form methods={methods} onSubmit={onSubmit}>
              <div className={moduleStyles.flexCenter}>
                <div className={profileStyles.left}>
                  <Typography level="body3" textColor="common.black">
                    Email
                  </Typography>
                </div>
                <Separator direction="horizontal" gap={24} />
                <div className={profileStyles.right}>
                  <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className={profileStyles.flex1}
                  />
                </div>
              </div>
              <Separator gap={18} />
              <div className={moduleStyles.flexCenter}>
                <div className={profileStyles.left}>
                  <Typography level="body3" textColor="common.black">
                    Password
                  </Typography>
                </div>
                <Separator direction="horizontal" gap={24} />
                <div className={profileStyles.right}>
                  <Input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className={profileStyles.flex1}
                  />
                </div>
              </div>
              <Separator gap={18} />
              <div className={moduleStyles.flexCenter}>
                <div className={profileStyles.left}>
                  <Typography level="body3" textColor="common.black">
                    Phone Number
                  </Typography>
                </div>
                <Separator direction="horizontal" gap={24} />
                <div className={profileStyles.right}>
                  <Input
                    type="text"
                    placeholder="Phone Number"
                    name="phone_number"
                    className={profileStyles.flex1}
                  />
                </div>
              </div>

              <Separator gap={32} />
              <div className={moduleStyles.flexCenter}>
                <div className={profileStyles.left} />
                <Separator direction="horizontal" gap={24} />

                <Button type="submit" className={profileStyles.wFitContent}>
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

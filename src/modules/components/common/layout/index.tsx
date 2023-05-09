import { setToken } from 'common/helpers/auth';
import React, { SetStateAction } from 'react';
import { useJwt } from 'react-jwt';
import { ToastContainer } from 'react-toastify';

import { layoutStyles } from './styles.css';
import Footer from '../footer';
import Header from '../header';

interface Props {
  children: React.ReactNode;
  noFooter?: boolean;
  noBottomPadding?: boolean;
  isAuth?: boolean;
  search?: string;
  setSearch?: React.Dispatch<SetStateAction<string>>;
}
export default function DefaultLayout(props: Props) {
  const { children, noFooter, noBottomPadding } = props;

  const { isExpired } = useJwt(localStorage.getItem('auth') || '');

  React.useEffect(() => {
    if (isExpired) {
      localStorage.removeItem('auth');
    }
  }, [isExpired]);

  setToken();
  return (
    <div>
      <Header isAuth={!props.isAuth} setSearch={props.setSearch} />
      <div
        className={layoutStyles.innerContainer}
        style={{
          paddingBottom: noBottomPadding ? 0 : 32,
        }}
      >
        {children}
      </div>
      {!noFooter && <Footer />}
      <ToastContainer />
    </div>
  );
}

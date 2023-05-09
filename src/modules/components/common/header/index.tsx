import React, { SetStateAction } from 'react';

import HeaderAuth from './auth';
import HeaderDefault from './no-auth';

interface Props {
  isAuth: boolean;
  setSearch?: React.Dispatch<SetStateAction<string>>;
}
export default function Header(props: Props) {
  const { isAuth, ...rest } = props;
  return isAuth ? <HeaderDefault /> : <HeaderAuth {...rest} />;
}

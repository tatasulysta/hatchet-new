import { Button, Input, Typography } from '@mui/joy';
import classNames from 'classnames';
import { moduleStyles } from 'modules/styles/module.css';
import { useRouter } from 'next/router';
import React from 'react';

import CartIcon from './components/cart';
import HeaderTop from './components/top';
import { headerStyles } from './styles.css';
import Separator from '../separator';

interface Props {
  setSearch?: React.Dispatch<React.SetStateAction<string>>;
}
export default function HeaderAuth(props: Props) {
  const router = useRouter();
  const [input, setInput] = React.useState<string>('');

  const handleSearch = React.useCallback(() => {
    if (router.pathname === '/product/[id]') {
      router.push('/');
    }
    props?.setSearch?.(input);
  }, [input, props, router]);

  return (
    <div className={headerStyles.outerContainer}>
      <HeaderTop />
      <div className={classNames(headerStyles.innerContainer)}>
        <Typography
          level="body1"
          textColor="common.white"
          fontWeight="Bold"
          className={moduleStyles.pointer}
          onClick={() => router.push('/')}
        >
          Hatchet
        </Typography>
        <div
          className={classNames(
            moduleStyles.flex,
            headerStyles.searchContainer,
          )}
          style={{
            cursor: !(
              router.pathname === '/' ||
              (router.pathname as string) === '/product/[id]'
            )
              ? 'not-allowed'
              : 'default',
          }}
        >
          <Input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            sx={{
              borderRadius: 20,
              border: 'none',
              '--Input-focusedThickness': '0px',
              flexBasis: '90%',
              paddingLeft: '20px',
            }}
            disabled={
              !(
                router.pathname === '/' ||
                (router.pathname as string) === '/product/[id]'
              )
            }
            placeholder="Search here..."
          />
          <Button
            onClick={handleSearch}
            disabled={
              !(
                router.pathname === '/' ||
                (router.pathname as string) === '/product/[id]'
              )
            }
          >
            Search
          </Button>
        </div>
        <div className={classNames(moduleStyles.flexCenter, headerStyles.btn)}>
          <Button
            variant="outlined"
            onClick={() => router.push('/cart')}
            size="sm"
          >
            <div className={moduleStyles.flexCenter}>
              <div>
                <CartIcon size={24} />
              </div>
              <Separator direction="horizontal" gap={4} />
              My Cart
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}

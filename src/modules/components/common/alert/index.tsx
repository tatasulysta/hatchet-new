import { Alert as RawAlert, AlertProps as RawAlertProps } from '@mui/joy';
import { CloseCircle } from 'iconsax-react';
import React from 'react';

interface Props extends RawAlertProps {}

export default function Alert(props: Props) {
  const [state, setState] = React.useState<boolean>(true);
  if (state) {
    return (
      <RawAlert
        {...props}
        endDecorator={<CloseCircle onClick={() => setState(false)} />}
      />
    );
  }
  return <></>;
}

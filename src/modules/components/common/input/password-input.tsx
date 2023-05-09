import { Input as RawInput } from '@mui/joy';
import { Eye, EyeSlash } from 'iconsax-react';
import { color } from 'modules/styles/colors';
import React from 'react';

export default function PasswordInput(props: any) {
  const [state, setState] = React.useState<boolean>(true);

  return (
    <RawInput
      {...props}
      type={state ? 'password' : 'text'}
      endDecorator={
        state ? (
          <Eye
            onClick={() => setState((prev) => !prev)}
            size={20}
            color={color.neutral4}
          />
        ) : (
          <EyeSlash
            onClick={() => setState((prev) => !prev)}
            size={20}
            color={color.neutral4}
          />
        )
      }
    />
  );
}

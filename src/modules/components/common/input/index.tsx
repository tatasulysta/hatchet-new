import { Input as RawInput, InputProps as RawInputProps } from '@mui/joy';
import React from 'react';
import { useController, useFormContext } from 'react-hook-form';

import PasswordInput from './password-input';

interface InputProps extends RawInputProps {
  name: string;
}
export default function Input(props: InputProps) {
  const { control } = useFormContext<any>();
  const { field } = useController({
    control,
    name: props.name,
  });

  return props.type === 'password' ? (
    <PasswordInput {...field} {...props} />
  ) : (
    <RawInput {...field} {...props} />
  );
}

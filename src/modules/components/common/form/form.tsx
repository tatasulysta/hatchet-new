import * as React from 'react';
import {
  FormProvider,
  FormProviderProps,
  SubmitHandler,
} from 'react-hook-form';

export interface FormStateProps {
  editable: boolean;
  setIsEditable: React.Dispatch<React.SetStateAction<boolean>>;
}

enum RequestMethod {
  GET = 'GET',
  HEAD = 'HEAD',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
  OPTIONS = 'OPTIONS',
}

interface FormProps {
  methods: Omit<FormProviderProps<any>, 'children'>;
  children: React.ReactNode;
  method?: RequestMethod;
  action?: string;
  style?: any;
  defaultEditable?: boolean;
  onSubmit: SubmitHandler<any>;
}

export const FormContext = React.createContext<FormStateProps>({
  editable: false,
  setIsEditable: () => {},
});

export default function Form(props: FormProps) {
  const [isEditable, setIsEditable] = React.useState(
    props.defaultEditable !== undefined ? props.defaultEditable : true,
  );
  const { methods, style, children, action, method = 'POST', onSubmit } = props;

  const value = React.useMemo<FormStateProps>(
    () => ({
      editable: isEditable && !methods.formState.isSubmitting,
      setIsEditable,
    }),
    [isEditable, methods.formState.isSubmitting],
  );

  return (
    <FormContext.Provider value={value}>
      <FormProvider {...methods}>
        <form
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            ...style,
          }}
          method={method}
          action={action}
          onSubmit={(e) => {
            if (!action) {
              e.preventDefault();
              methods.handleSubmit(onSubmit)();
            }
          }}
        >
          {children}
        </form>
      </FormProvider>
    </FormContext.Provider>
  );
}

interface Props {
  children: (context: FormStateProps) => any;
}

export function FormState(props: Props) {
  const context = React.useContext(FormContext);
  return props.children(context);
}

export function useFormState(): FormStateProps {
  const context = React.useContext(FormContext);
  return context;
}

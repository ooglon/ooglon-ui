import { createContext, ReactNode, useContext, useState } from "react";

interface FormContextProps {
  initialValues: Record<string, any>;
  setFieldValue: (key: string, value: any) => void;
  getFieldValue: (key: string) => any;
  setFieldError: (key: string, value: string) => void;
  getFieldError: (key: string) => string;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

interface FormContextProviderProps {
  initialValues: Record<string, any>;
  children: ReactNode;
}

function FormContextProvider({
  initialValues,
  children,
}: FormContextProviderProps) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const setFieldValue = (key: string, value: any) => {
    //TODO: validate here! setError(key, value)

    setValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const getFieldValue = (key: string) => values[key];

  const setFieldError = (key: string, value: string) => {
    setErrors((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const getFieldError = (key: string) => errors[key];

  const value = {
    initialValues,
    setFieldValue,
    getFieldValue,
    setFieldError,
    getFieldError,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}

export { FormContextProvider as Form };

export function useForm() {
  const ctx = useContext(FormContext);

  if (!ctx) throw new Error("useForm must be used inside Form");

  return ctx;
}

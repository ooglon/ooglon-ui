import { useState } from "react";
import z from "zod";

type UseFormProps = {
  initialValues: Record<string, any>;
  validations?: Record<string, z.ZodType>;
  onSubmit: (values: Record<string, any>) => void;
};

export default function useForm({
  initialValues,
  validations = {},
  onSubmit,
}: UseFormProps) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  const setFieldValue = (key: string, value: any) => {
    if (validations[key]) {
      const result = validations[key].safeParse(value);

      setErrors((prev) => ({
        ...prev,
        [key]: result.success
          ? []
          : result.error.issues.map((issue) => issue.message),
      }));
    }

    setValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const getInputProps = (name: string) => {
    if (!(name in initialValues)) {
      throw new Error(`Field "${name}" not found in initialValues`);
    }

    return {
      value: values[name],
      onChangeText: (value: string) => setFieldValue(name, value),
      errors: errors[name],
    };
  };

  const isNotFilled =
    Object.keys(errors).length !== Object.keys(initialValues).length;
  const someFieldHasError = Object.values(errors).some(
    (error) => error.length > 0
  );

  return {
    getInputProps,
    hasErrors: isNotFilled || someFieldHasError,
    submit: () => onSubmit(values),
  };
}

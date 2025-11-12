// import { useState } from "react";

// type UseFormProps = {
//   initialValues: Record<string, any>;
//   onSubmit: (values: Record<string, any>) => void;
// };

// export default function useForm({ initialValues, onSubmit }: UseFormProps) {
//   const [values, setValues] = useState(initialValues);
//   const [errors, setErrors] = useState<Record<string, string>>({});

//   const setFieldValue = (key: string, value: any) => {
//     //TODO: validate here! setError(key, value)

//     setValues((prev) => ({
//       ...prev,
//       [key]: value,
//     }));
//   };

//   const setFieldError = (key: string, value: string) => {
//     setErrors((prev) => ({
//       ...prev,
//       [key]: value,
//     }));
//   };

//   const getFieldError = (key: string) => errors[key];

//   const getInputProps = (name: string) => {
//     if (!(name in initialValues)) {
//       throw new Error(`Field "${name}" not found in initialValues`);
//     }

//     return {
//       value: (key: string) => values[key],
//       onChangeText: (value: string) => setFieldValue(name, value),
//       error: getFieldError(name),
//       setError: setFieldError,
//     };
//   };

//   return {
//     getInputProps,
//     values,
//   };
// }

import { useState } from "react";
import z from "zod";

type UseFormProps = {
  initialValues: Record<string, any>;
  validate?: Record<string, z.ZodType>;
  onSubmit: (values: Record<string, any>) => void;
};

export default function useForm({
  initialValues,
  validate,
  onSubmit,
}: UseFormProps) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});

  console.log("\n\n\nrender useForm", values);

  const setFieldValue = (key: string, value: any) => {
    if (validate && key in validate) {
      const result = validate[key].safeParse(value);

      if (result.success) {
        setFieldError(key, "");
      } else {
        console.log(result.error.issues);

        setFieldError(
          key,
          result.error.issues.map((issue) => issue.message).join("; ")
        );
        return;
      }
    }

    setValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const setFieldError = (key: string, message: string) => {
    setErrors((prev) => ({
      ...prev,
      [key]: message,
    }));
  };

  const getFieldError = (key: string) => errors[key];

  const getInputProps = (name: string) => {
    if (!(name in initialValues)) {
      throw new Error(`Field "${name}" not found in initialValues`);
    }

    return {
      defaultValue: initialValues[name],
      onChangeText: (value: string) => setFieldValue(name, value),
      error: getFieldError(name),
    };
  };

  return {
    getInputProps,
    onSubmit: () => onSubmit(values),
  };
}

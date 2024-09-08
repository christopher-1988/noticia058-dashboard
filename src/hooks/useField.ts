import { useState, useEffect } from "react";

interface Formulario {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
/**
 * @params initialState: objeto
 **/
export const useField = (initialState: Formulario = {}) => {
  const [fields, setFields] = useState<Formulario>(initialState);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (isMounted) {
      setFields((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const onProps = (key: string, value: string | boolean) => {
    if (isMounted) {
      setFields((prev) => ({ ...prev, [key]: value }));
    }
  };

  const onReset = () => {
    if (isMounted) {
      setFields(initialState);
    }
  };

  return {
    fields,
    onChange,
    onProps,
    onReset,
  };
};

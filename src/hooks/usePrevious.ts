import { useRef } from 'react';

export default function usePrevious(value: any) {
  const current = useRef(value);
  const previous = useRef();

  if (current.current !== value) {
    previous.current = current.current;
    current.current = value;
  }

  return previous.current;
}

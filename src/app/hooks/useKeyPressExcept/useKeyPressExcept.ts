import { useCallback, useEffect, useState } from 'react';

type ReturnValue = {
  pressed: boolean;
  key: string;
};

/**
 * https://usehooks.com/useKeyPress/
 * @param except
 * @returns
 */
export const useKeyPressExcept = (except: Array<string>): ReturnValue => {
  const [pressed, setPressed] = useState(false);
  const [key, setKey] = useState('');

  // If pressed key is our target key then set to true
  const downHandler = useCallback(
    (e: KeyboardEvent): void => {
      const { key } = e;
      if (key && !except.includes(key)) {
        setPressed(true);
        setKey(key);
      }
    },
    [setPressed, except]
  );

  // If released key is our target key then set to false
  const upHandler = useCallback(
    (e: KeyboardEvent): void => {
      const { key } = e;
      if (key && !except.includes(key)) {
        setPressed(false);
        setKey('');
      }
    },
    [setPressed, except]
  );

  // Add event listeners
  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [downHandler, upHandler]); // Empty array ensures that effect is only run on mount and unmount
  return {
    key,
    pressed
  };
};

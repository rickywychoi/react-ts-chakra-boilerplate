import { useCallback, useEffect, useState } from 'react';

/**
 * https://usehooks.com/useKeyPress/
 * @param targetKey
 * @returns
 */
export const useKeyPress = (targetKey: string): boolean => {
  const [keyPressed, setKeyPressed] = useState(false);
  // If pressed key is our target key then set to true
  const downHandler = useCallback(
    (e: KeyboardEvent): void => {
      const { key } = e;
      if (key === targetKey) {
        setKeyPressed(true);
      }
    },
    [setKeyPressed, targetKey]
  );

  // If released key is our target key then set to false
  const upHandler = useCallback(
    (e: KeyboardEvent): void => {
      const { key } = e;
      if (key === targetKey) {
        setKeyPressed(false);
      }
    },
    [setKeyPressed, targetKey]
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
  return keyPressed;
};

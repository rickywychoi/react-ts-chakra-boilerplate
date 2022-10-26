import { useMemo } from 'react';
import { useComponentDimensionsContext } from '~/app/context/ComponentDimensions/useComponentDimensionsContext';
import { PADDING_Y } from '~/app/layout/WithDefaultStyle/constants';
import useWindowDimensions from '../useWindowDimensions/useWindowDimensions';

/**
 * Calculates the height excluding Navbar from the screen.
 * @returns height
 */
export const useMainComponentHeight = () => {
  const { height: windowHeight } = useWindowDimensions();
  const { ref: navbarRef } = useComponentDimensionsContext();
  const height = useMemo(
    () => windowHeight - navbarRef?.current.clientHeight - PADDING_Y * 2,
    [windowHeight, navbarRef]
  );

  return height;
};

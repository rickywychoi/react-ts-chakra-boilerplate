import React from 'react';
import { WarningTwoIcon } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/react';

type Props = {
  text: string;
};

const WarningMessage: React.FunctionComponent<Props> = ({ text }) => {
  return (
    <Flex alignItems="center" backgroundColor="#ececec" mb="16px">
      <WarningTwoIcon color="red" mr="4px" />
      <Text color="red">{text}</Text>
    </Flex>
  );
};

export default WarningMessage;

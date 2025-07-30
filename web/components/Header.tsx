import { Flex, IconButton, Text } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

export default function Header() {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      padding="4"
      bg="gray.100"
      borderBottom="1px solid"
      borderColor="gray.200"
    >
      <Text fontSize="xl" fontWeight="bold">
        MyMarketplace Dashboard
      </Text>
      <IconButton aria-label="Menu" icon={<HamburgerIcon />} />
    </Flex>
  );
}
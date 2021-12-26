import { Tabs, TabList, TabPanels, Tab, TabPanel, HStack, Box, Link, Text } from '@chakra-ui/react';

import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';

import NextLink from 'next/link';

export default function TheHeader() {
  return (
    <Box>
      <Text align='center' mt='2em' fontSize='2xl'>
        mofu.dev
      </Text>
      <Tabs mt='1em'>
        <TabList ml='4em'>
          <Tab>
            <NextLink href='/' passHref>
              <Link>Home</Link>
            </NextLink>
          </Tab>
          <Tab>
            <NextLink href='/about'>
              <Link>About</Link>
            </NextLink>
          </Tab>
          <Tab>
            <NextLink href='/contact'>
              <Link>Contact</Link>
            </NextLink>
          </Tab>
        </TabList>
      </Tabs>
    </Box>
  );
}

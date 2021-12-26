import { Tabs, TabList, TabPanels, Tab, TabPanel, HStack, Box, Text } from '@chakra-ui/react';

import Link from 'next/link';

export default function Home() {
  const profile = JSON.parse([{ name: 'Tomoyuki Kumagai' }, { location: 'Aichi' }]);

  return (
    <Box>
      <Text fontSize='2xl' align='center' justify='center' mt='2rem'>
        {profile.map(({ name, location }, i) => {
          return { name };
        })}
      </Text>
    </Box>
  );
}

import React from 'react';
import {
  Box,
  Avatar,
  NativeBaseProvider,
  Center,
  HStack,
  Heading,
  Text,
} from 'native-base';
import Zocial from 'react-native-vector-icons/Zocial';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {StyleSheet} from 'react-native';

const App = () => {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Box style={styles.mainCard}>
          <Center>
            <Box style={styles.subCard}>
              <Box style={styles.avatarCard}>
                <Center flex={1}>
                  <Avatar
                    bg="pink.600"
                    size="2xl"
                    borderWidth={5}
                    borderColor="white"
                    source={{
                      uri: 'https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg',
                    }}>
                    GG
                  </Avatar>
                </Center>
              </Box>
              <Center p={5}>
                <Heading mb={3}>Abudu Bayorwor</Heading>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  sequi totam perspiciatis eius commodi, voluptatem non rem cum.
                  Ullam.
                </Text>
                <HStack space={3} pt={5}>
                  <Zocial name="facebook" size={14} style={styles.icons} />
                  <Zocial name="twitter" size={14} style={styles.icons} />
                  <AntDesign name="googleplus" size={14} style={styles.icons} />
                  <AntDesign name="googleplus" size={14} style={styles.icons} />
                  <AntDesign name="googleplus" size={14} style={styles.icons} />
                </HStack>
              </Center>
            </Box>
          </Center>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  mainCard: {
    height: 500,
    width: 250,
    backgroundColor: '#000',
    paddingTop: 20,
  },
  subCard: {
    height: 460,
    width: 220,
    backgroundColor: '#fefefe',
  },
  avatarCard: {
    width: 220,
    height: 230,
    backgroundColor: '#dedede',
  },
  icons: {
    borderWidth: 1,
    borderRadius: 13,
    width: 25,
    height: 25,
    display: 'flex',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

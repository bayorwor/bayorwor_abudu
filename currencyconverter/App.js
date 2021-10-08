import React, {useState} from 'react';
import {
  Input,
  NativeBaseProvider,
  Select,
  CheckIcon,
  Heading,
  Container,
  Center,
  HStack,
} from 'native-base';
import converter from './src/utils/converter';

const App = () => {
  const [currency, setCurrency] = useState('USD');
  const [val, setVal] = useState(1);

  return (
    <NativeBaseProvider>
      <Center width={'90%'} flex={1}>
        <HStack justifyContent="center" alignItems="center" space={4}>
          <Heading size={'sm'}>Ghana Cedis (GH₵)</Heading>
          <Input
            width={'40%'}
            placeholder="enter amount"
            type="number"
            value={val}
            onChangeText={text => setVal(text)}
          />
        </HStack>
        <Heading size={'xs'} m={5}>
          Showing for {currency}
        </Heading>
        <HStack justifyContent="center" alignItems="center" space={4}>
          <Select
            defaultValue={currency}
            selectedValue={currency}
            minWidth="200"
            accessibilityLabel="choose a currency"
            placeholder="Choose a currency"
            _selectedItem={{
              bg: 'teal.600',
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={itemValue => setCurrency(itemValue)}>
            <Select.Item label="UK Pound Sterling " value="GBP" />
            <Select.Item label="United State Dollar" value="USD" />
            <Select.Item label="Canadian Dollar" value="CAD" />
            <Select.Item label="Chinese Yuan" value="CNY" />
          </Select>
          <Input value={converter(currency, val).toFixed(2)} />
          <Heading></Heading>
        </HStack>
      </Center>
    </NativeBaseProvider>
  );
};

export default App;

import { Text, VStack } from '@expo/ui/swift-ui';
import { font } from '@expo/ui/swift-ui/modifiers';
import { createWidget } from 'expo-widgets';

type Props = { count: number };

const MyWidget = (props: Props) => {
  'widget';
  return (
    <VStack>
      <Text modifiers={[font({ weight: 'bold', size: 20 })]}>🔢 Count</Text>
      <Text modifiers={[font({ size: 36 })]}>{props.count}</Text>
    </VStack>
  );
};

export default createWidget('MyWidget', MyWidget);
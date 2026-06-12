import { Text, VStack, HStack } from '@expo/ui/swift-ui';
import { font, foregroundStyle } from '@expo/ui/swift-ui/modifiers';
import { createLiveActivity } from 'expo-widgets';

type Props = { status: string; timeLeft: number };

const MyActivity = (props: Props) => {
  'widget';
  return {
    banner: (
      <VStack>
        <Text modifiers={[font({ weight: 'bold' })]}>{props.status}</Text>
        <Text>{props.timeLeft} min remaining</Text>
      </VStack>
    ),
    compactLeading: <Text>⏱</Text>,
    compactTrailing: <Text modifiers={[font({ weight: 'bold' })]}>{props.timeLeft}m</Text>,
    minimal: <Text>⏱</Text>,
    expandedLeading: <Text modifiers={[font({ size: 14 })]}>⏱ Timer</Text>,
    expandedTrailing: (
      <VStack>
        <Text modifiers={[font({ weight: 'bold', size: 24 })]}>{props.timeLeft}</Text>
        <Text modifiers={[font({ size: 12 })]}>min</Text>
      </VStack>
    ),
    expandedBottom: <Text>{props.status}</Text>,
  };
};

export default createLiveActivity('MyActivity', MyActivity);
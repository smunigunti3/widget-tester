import { Text, VStack, HStack, Image } from '@expo/ui/swift-ui';
import { font, frame } from '@expo/ui/swift-ui/modifiers';
import { createLiveActivity } from 'expo-widgets';

// imageUri: pass a file:// URI from the main app (e.g. stored in the App Group shared container)
// to display custom team icons or brand logos. Falls back to an SF Symbol when not provided.
type Props = { status: string; timeLeft: number; imageUri?: string };

const MyActivity = (props: Props) => {
  'widget';
  return {
    banner: (
      <HStack>
        {props.imageUri
          ? <Image uiImage={props.imageUri} modifiers={[frame({ width: 40, height: 40 })]} />
          : <Image systemName="trophy.fill" size={40} />
        }
        <VStack>
          <Text modifiers={[font({ weight: 'bold' })]}>{props.status}</Text>
          <Text>{props.timeLeft} min remaining</Text>
        </VStack>
      </HStack>
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
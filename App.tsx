import { useState } from 'react';
import { Button, View, StyleSheet } from 'react-native';
import MyWidget from './Widget';
import MyActivity from './LiveActivity';

export default function App() {
  const [activity, setActivity] = useState<any>(null);

  return (
    <View style={styles.container}>
      {/* Widget controls */}
      <Button title="Update Widget (count=5)" onPress={() => MyWidget.updateSnapshot({ count: 5 })} />

      {/* Live Activity controls */}
      <Button
        title="Start Live Activity"
        onPress={() => {
          const inst = MyActivity.start({ status: 'Timer running', timeLeft: 10 });
          setActivity(inst);
        }}
      />
      <Button
        title="Update Live Activity"
        onPress={() => activity?.update({ status: 'Almost done!', timeLeft: 2 })}
      />
      <Button
        title="End Live Activity"
        onPress={() => activity?.end('immediate')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', gap: 12, padding: 24 },
});
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={PlayerScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function PlayerScreen({ navigation }: any) {
  const [player1, setPlayer1] = useState<string>('');
  const [player2, setPlayer2] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Tic-Tac-Toe!</Text>
      <TextInput placeholder="Player 1 Name" value={player1} onChangeText={setPlayer1} style={styles.input} />
      <TextInput placeholder="Player 2 Name" value={player2} onChangeText={setPlayer2} style={styles.input} />
      <Button title="Start Game" onPress={() => navigation.navigate('Game', { player1, player2 })} />
    </View>
  );
}

function GameScreen({ route }: any) {
  const { player1, player2 } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{player1} vs. {player2}</Text>
      <View>
        <View style={styles.row}>
          <TouchableHighlight style={styles.cell}><Text style={styles.cellText}></Text></TouchableHighlight>
          <TouchableHighlight style={styles.cell}><Text style={styles.cellText}></Text></TouchableHighlight>
          <TouchableHighlight style={styles.cell}><Text style={styles.cellText}></Text></TouchableHighlight>
        </View>
        <View style={styles.row}>
          <TouchableHighlight style={styles.cell}><Text style={styles.cellText}></Text></TouchableHighlight>
          <TouchableHighlight style={styles.cell}><Text style={styles.cellText}></Text></TouchableHighlight>
          <TouchableHighlight style={styles.cell}><Text style={styles.cellText}></Text></TouchableHighlight>
        </View>
        <View style={styles.row}>
          <TouchableHighlight style={styles.cell}><Text style={styles.cellText}></Text></TouchableHighlight>
          <TouchableHighlight style={styles.cell}><Text style={styles.cellText}></Text></TouchableHighlight>
          <TouchableHighlight style={styles.cell}><Text style={styles.cellText}></Text></TouchableHighlight>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginVertical: 12 },
  input: { borderWidth: 1, borderColor: '#ccc', paddingHorizontal: 12, paddingVertical: 8, marginVertical: 8, width: '80%' },
  row: { flexDirection: 'row' , marginTop: 12},
  cell: { width: 80, height: 80, borderWidth: 1, borderColor: '#333', justifyContent: 'center', alignItems: 'center', margin: 4 },
  cellText: { fontSize: 32, fontWeight: 'bold' },
});
const [block1, setBlock1] = useState<number>(0);
const [block2, setBlock2] = useState<number>(0);
const [block3, setBlock3] = useState<number>(0);
const [block4, setBlock4] = useState<number>(0);
const [block5, setBlock5] = useState<number>(0);
const [block6, setBlock6] = useState<number>(0);
const [block7, setBlock7] = useState<number>(0);
const [block8, setBlock8] = useState<number>(0);
const [block9, setBlock9] = useState<number>(0);

let block1Content: string;
switch (block1) {
  case 1: block1Content = 'X'; break;
  case 2: block1Content = 'O'; break;
  default: block1Content = '';
}

let block2Content: string;
switch (block2) {
  case 1: block2Content = 'X'; break;
  case 2: block2Content = 'O'; break;
  default: block2Content = '';
}

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
  // Board state: 0 empty, 1 X, 2 O
  const [blocks, setBlocks] = useState<number[]>(Array(9).fill(0));
  const [player1Turn, setPlayer1Turn] = useState<boolean>(true);

  const handlePress = (index: number) => {
    if (blocks[index] !== 0) return;
    const newBlocks = [...blocks];
    newBlocks[index] = player1Turn ? 1 : 2;
    setBlocks(newBlocks);
    setPlayer1Turn(!player1Turn);
  };

  const contentFor = (v: number) => (v === 1 ? 'X' : v === 2 ? 'O' : '');

  const checkWinner = (): number => {
    const [b0, b1, b2, b3, b4, b5, b6, b7, b8] = blocks;
    if (b0 > 0 && b0 === b1 && b1 === b2) return b0;
    if (b3 > 0 && b3 === b4 && b4 === b5) return b3;
    if (b6 > 0 && b6 === b7 && b7 === b8) return b6;
    if (b0 > 0 && b0 === b3 && b3 === b6) return b0;
    if (b1 > 0 && b1 === b4 && b4 === b7) return b1;
    if (b2 > 0 && b2 === b5 && b5 === b8) return b2;
    if (b0 > 0 && b0 === b4 && b4 === b8) return b0;
    if (b2 > 0 && b2 === b4 && b4 === b6) return b2;
    return 0;
  };

  const winner = checkWinner();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{player1} vs. {player2}</Text>
      {winner === 1 && <Text style={styles.title}>{player1} Wins!</Text>}
      {winner === 2 && <Text style={styles.title}>{player2} Wins!</Text>}
      <View>
        <View style={styles.row}>
          <TouchableHighlight style={styles.cell} onPress={() => handlePress(0)}>
            <Text style={styles.cellText}>{contentFor(blocks[0])}</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.cell} onPress={() => handlePress(1)}>
            <Text style={styles.cellText}>{contentFor(blocks[1])}</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.cell} onPress={() => handlePress(2)}>
            <Text style={styles.cellText}>{contentFor(blocks[2])}</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.row}>
          <TouchableHighlight style={styles.cell} onPress={() => handlePress(3)}>
            <Text style={styles.cellText}>{contentFor(blocks[3])}</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.cell} onPress={() => handlePress(4)}>
            <Text style={styles.cellText}>{contentFor(blocks[4])}</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.cell} onPress={() => handlePress(5)}>
            <Text style={styles.cellText}>{contentFor(blocks[5])}</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.row}>
          <TouchableHighlight style={styles.cell} onPress={() => handlePress(6)}>
            <Text style={styles.cellText}>{contentFor(blocks[6])}</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.cell} onPress={() => handlePress(7)}>
            <Text style={styles.cellText}>{contentFor(blocks[7])}</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.cell} onPress={() => handlePress(8)}>
            <Text style={styles.cellText}>{contentFor(blocks[8])}</Text>
          </TouchableHighlight>
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
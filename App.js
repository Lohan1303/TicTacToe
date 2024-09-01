import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import styles from './Styles';
import { useState } from 'react';

export default function App() {

  const [primeiroJogador, setPrimeiroJogador] = useState("X");
  const [matriz, setMatriz] = useState([['', '', ''], ['', '', ''], ['', '', '']]);
  const [vezJogador, setVezJogador] = useState(primeiroJogador);
  const [qtdJogadas, setQtdJogadas] = useState(9);
  const [qtdVencedorX, setQtdVencedorX] = useState(0);
  const [qtdVencedorO, setQtdVencedorO] = useState(0);
  const [qtdVelhas, setQtdVelhas] = useState(0);

  function jogada(rowIndex, colIndex) {
    if (matriz[rowIndex][colIndex] !== '' || qtdJogadas === 0) {
      return;
    }

    const newMatriz = matriz.map((row, rIndex) =>
      row.map((item, cIndex) =>
        rIndex === rowIndex && cIndex === colIndex ? vezJogador : item
      )
    );

    // Verifica se há um vencedor
    const checkWinner = () => {
      // Checa linhas
      for (let r = 0; r < 3; r++) {
        if (newMatriz[r][0] === vezJogador && newMatriz[r][1] === vezJogador && newMatriz[r][2] === vezJogador) {
          return true;
        }
      }

      // Checa colunas
      for (let c = 0; c < 3; c++) {
        if (newMatriz[0][c] === vezJogador && newMatriz[1][c] === vezJogador && newMatriz[2][c] === vezJogador) {
          return true;
        }
      }

      // Checa diagonais
      if (newMatriz[0][0] === vezJogador && newMatriz[1][1] === vezJogador && newMatriz[2][2] === vezJogador) {
        return true;
      }
      if (newMatriz[0][2] === vezJogador && newMatriz[1][1] === vezJogador && newMatriz[2][0] === vezJogador) {
        return true;
      }

      return false;
    };

    setMatriz(newMatriz);
    setQtdJogadas(qtdJogadas - 1);
    setVezJogador(vezJogador === "X" ? "O" : "X");

    if (checkWinner()) {
      Alert.alert(
        'Vencedor!',
        `O jogador ${vezJogador} ganhou!`,
        [{ text: 'OK', onPress: () => {
          if (vezJogador === "X") {
            setQtdVencedorX(qtdVencedorX + 1);
          } else {
            setQtdVencedorO(qtdVencedorO + 1);
          }
          setMatriz([['', '', ''], ['', '', ''], ['', '', '']]);
          setQtdJogadas(9);
          setVezJogador(primeiroJogador === "X" ? "O" : "X");
          setPrimeiroJogador(primeiroJogador === "X" ? "O" : "X");
        }}]
      );
      return; 
    }

    if(qtdJogadas === 1){
      Alert.alert(
        'DEU VELHA !!',
        '',
        [{ text: 'OK', onPress: () => {
          setQtdVelhas(qtdVelhas + 1);
          setMatriz([['', '', ''], ['', '', ''], ['', '', '']]);
          setQtdJogadas(9);
          setVezJogador(primeiroJogador === "X" ? "O" : "X");
          setPrimeiroJogador(primeiroJogador === "X" ? "O" : "X");
        }}]
      );
      return; 
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.tittle}>Jogo da Velha</Text>
        <Text style={styles.vezJogador}>
          Rodada do jogador:
          <Text style={{ color: vezJogador === "X" ? "red" : "blue", fontWeight: 'bold' }}>
            {"  " + vezJogador}
          </Text>
        </Text>
        <Text style={styles.vezJogador}>
          Quantidade de jogadas: {qtdJogadas}
        </Text>
      </View>

      <View style={styles.container2}>
        <View style={styles.aling}>
          {matriz.map((row, rowIndex) => (
            <View style={styles.ticTacToe} key={rowIndex}>
              {row.map((item, colIndex) => (
                <TouchableOpacity
                  style={styles.place}
                  key={colIndex}
                  onPress={() => jogada(rowIndex, colIndex)}>
                  <Text style={{ color: item === "X" ? "red" : "blue", fontWeight: 'bold', fontSize: 50, textAlign: 'center', lineHeight: 100 }}>
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </View>

      <View style={styles.rodape}>
        <Text style={styles.placar}>Placar</Text>
        <Text style={[styles.vezJogador, { color: "red", fontWeight: 'bold', fontSize: 30 }]}>
          X: {qtdVencedorX}
        </Text>

        <Text style={[styles.vezJogador, { color: "blue", fontWeight: 'bold', fontSize: 30 }]}>
          O: {qtdVencedorO}
        </Text>

        <Text style={[styles.vezJogador, { color: "black", fontWeight: 'bold', fontSize: 30 }]}>
          Velha: {qtdVelhas}
        </Text>
      </View>
    </View>
  );
}

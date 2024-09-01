import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  head: {
    backgroundColor: "#e6e6e6",
    width: "100%",
    height: "20%",
    minHeight: 250,
    justifyContent: 'flex-start', // Alinha o conteúdo verticalmente no final

    padding: 10, // Adiciona algum espaço ao redor do conteúdo
  },
  tittle: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 50,
  },
  vezJogador: {
    color: "black",
    fontSize: 30,
    textAlign: "left",
    marginLeft: 10,
    fontWeight: "400",
  
  },
  ticTacToe: {
    flexDirection: "row",
  },
  place: {
    width: 100, // Ajuste o tamanho das células
    height: 100, // Ajuste o tamanho das células
    borderColor: "#474747",
    borderWidth: 1, // Define a largura da borda
    backgroundColor: "#e6e6e6",
    justifyContent: "center",
    alignItems: "center",
  },
  aling:{
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent:"center",

  },
  container2:{
    flex: 1, // Permite que a `View` ocupe o espaço disponível
    justifyContent: "center", // Centraliza as células verticalmente
    alignItems: "center", // Centraliza as células horizontalmente
  },
  iconsXO: {
    textAlign: "center",
    fontSize: 50,
    fontWeight: "bold", 

  },
  rodape:{
    backgroundColor: "#e6e6e6",
    width: "100%",
    height: "20%",
    minHeight: 150,
    justifyContent: 'flex-start', // Alinha o conteúdo verticalmente no final

    padding: 10, // Adiciona algum espaço ao redor do conteúdo
  },
  placar:{
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
  }
});

export default styles;

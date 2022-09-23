import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
// Biblioteca com valor proprio para definir exatamente a distancia do header para status bar
import Constants from 'expo-constants';

import Header from './components/Header';
import Stories from './components/Stories';
import Feed from './components/Feed';

export default function App() {
  return (
    //ELEMENTOS GRAFICOS NO QUAL COMPOEM O MEU CODIGO/APP

    //Agrupa minha status bar 
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header/>      
      <Stories/>
      <Feed/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {

    flex:1,

    //Caso flex nao possua valor ira ocupar o minimo espaco possivel,
    // flex: 1 ira ocupar o MAXIMO de espaco possivel

    //backgroundColor: 'pink', //muda a cor do fundo do background

    marginTop: Constants.statusBarHeight,
  }
});


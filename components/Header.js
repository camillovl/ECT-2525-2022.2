import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

// Biblioteca com valor proprio para definir exatamente a distancia do header para status bar

import {FontAwesome5} from '@expo/vector-icons';

export default function Header(){
    return (

        <View style={styles.header}>
            <Image style = {styles.ura} source = {require('../assets/ura.png')}  />
            <FontAwesome5 name="paper-plane" size={24} color ="black" />
        </View>

    );
}

const styles = StyleSheet.create({
 
    header: {
  
      flexDirection: 'row', //Coloca os elementos em direcao de linha
      padding: 10, // define uma distancia minima de um elemento para algo ao seu redor
      height: 60, //A altura, o tamanho do meu header
      backgroundColor: 'white',
  
      alignItems: 'center',  //Lida com o eixo X
      // flex-start alinha para esquerda; flex-end alinha para direita
      // center os objetos em relacao ao header
  
      justifyContent: 'space-between', //Lida com o eixo Y
      // flex-start alinha pra cima; flex-end alinha para baixo
      //space_between coloca um espaco entre os elementos
    },
  
    ura: {
      resizeMode: 'contain',
      height: 70,
      width: 70,
    },
  
});

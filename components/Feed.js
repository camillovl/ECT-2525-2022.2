import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
// Biblioteca com valor proprio para definir exatamente a distancia do header para status bar
import {FontAwesome5} from '@expo/vector-icons';

export default function Feed(){


  const feed = [
    {
      id:1,
      nome: 'Camillo',
      imgPerfil: require('../IntegrantesUra/Camillo.jpg'),
      imgPost: require('../assets/PrimeiraAulaUra.jpg'),
      aspectRatio: 1.33,
    },
    {
      id:2,
      nome: 'Camillo',
      imgPerfil: require('../IntegrantesUra/Livia.jpg'),
      imgPost: require('../assets/PostLivia.png'),
      aspectRatio: 1.33,
    },
    {
      id:3,
      nome: 'Larissa',
      imgPerfil: require('../IntegrantesUra/Larissa.jpg'),
      imgPost: require('../assets/RutilenoEnsinando.png'),
      aspectRatio: 1.33,
    },
  ];


  function renderItem({ item }) {

    return  <View style={styles.post}>
    <View style={styles.postheader}>
      <View style={styles.postheaderesquerda}>            
      <Image style={styles.postheaderimg} source={item.imgPerfil}></Image>
      <Text> {item.nome} </Text>
      </View>

      <FontAwesome5 name="ellipsis-h" size={16} color="black"></FontAwesome5>
    </View>
    <Image style= {styles.postimg} aspectRatio={item.aspectRatio} source ={item.imgPost}></Image>
    <View style={styles.footer}>
      <FontAwesome5 style={styles.footericon} name="heart" size={30} color = "black"></FontAwesome5>
      <FontAwesome5 style={styles.footericon} name="comment" size={30} color = "black"></FontAwesome5>
      </View>
  </View>

  }

    return(

        <View style={styles.feed}>
          <FlatList
          data = {feed}
          renderItem = {renderItem}
          keyExtractor = {item => item.id}
          showsHorizontalScrollIndicator={false}
          />
      </View>

    );
}

const styles = StyleSheet.create({

    feed:{
      flex: 1,
      backgroundColor: 'white',
    },
    post:{
      backgroundColor:'white',
    },
    postheader: {
      height:60,
      flexDirection: 'row',
      alignItems: 'center', //alinhou os itens no centro
      justifyContent: 'space-between', //separou os itens em distancias iguais
      margin: 5,
    },
    postheaderimg:{
      height:50,
      width:50,
      borderRadius:25,
      marginRight: 5,
    },
    postheaderesquerda:{
      flexDirection: 'row',
      alignItems: 'center',
    },
    postimg:{
      width: '100%',
      height:undefined
      
    },
    footer:{
      height:60,
      backgroundColor:'white',
      flexDirection: 'row',
      alignItems:'center',
      padding:5,
  
    },
    footericon:{
      margin:5,
    },
  
  });
  
  
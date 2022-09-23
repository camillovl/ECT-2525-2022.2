import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
// Biblioteca com valor proprio para definir exatamente a distancia do header para status bar

export default function Stories(){
  const [stories, setStories] =useState([]);
  // linha de codigo que se conecta com servidor e usa a funcao setStories 
  //para atualizar a variavel useState()

 
//funcao hook para pegar informacoes do servidor web
 useEffect(function(){
  async function getData() {   
      const response = await fetch('https://mobile.ect.ufrn.br:3000/stories');
      const storiesServidor = await response.json();
      setStories(storiesServidor)
    }
    getData();
 }, [])


  /*const stories = [
    {
      id1: 1,
      nome: 'Camillo',
      src: require('../IntegrantesUra/Camillo.jpg')
    },
    {
      id1: 2,
      nome: 'Livia',
      src: require('../IntegrantesUra/Livia.jpg')
    },
    {
      id1: 3,
      nome: 'Luiz',
      src: require('../IntegrantesUra/Luiz.jpg')
    },
    {
      id1: 4,
      nome: 'Duda',
      src: require('../IntegrantesUra/Duda.jpg')
    },
    {
      id1: 5,
      nome: 'Larissa',
      src: require('../IntegrantesUra/Larissa.jpg')
    },
    {
      id1: 6,
      nome: 'Gustavo',
      src: require('../IntegrantesUra/Gustavo.jpg')
    },
    {
      id1: 7,
      nome: 'Kaiky',
      src: require('../IntegrantesUra/Kaiky.jpg')
    },
    
 
  ]; */

  function renderItem ({ item }) {
    
    return  <View style={styles.story}>
              <Image style = {styles.imgstory} source ={{uri : item.imgPerfilUri}} ></Image>
              <Text> {item.nomeUsuario} </Text>
            </View>
}


    return(
      <View style={styles.stories}>
        <FlatList
          data={stories}
          renderItem={renderItem}
          keyExtractor = {item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
        
    );
  }

const styles = StyleSheet.create({

    stories:{
      flexDirection: 'row',
      height: 90,
    },
  
    story: {
      height: 90,
      width: 90,
      backgroundColor: 'white',
      alignItems: 'center',
    },
    imgstory:{
      resizeMode: 'contain',
      height:70,
      width:70,
      borderRadius: 35,
    },
});
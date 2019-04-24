import React from 'react'
import { StyleSheet, Text, ImageBackground } from 'react-native'

function Category(props){
    return(
        <ImageBackground 
            style={styles.wrapper}
            source={{uri: props.background_image}}
        >
            <Text style={styles.genre}>{props.genres[0]}</Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    wrapper: {
      width: 250,
      height: 100,
      borderRadius: 10,
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
    },
    genre: {
      color: 'white',
      fontSize: 40,
      fontWeight: 'bold'
    }
  })

export default Category

import React from 'react'
import { View, Text,ImageBackground } from 'react-native'
import styles from './styles'

const CarItem = () => {
    return (
        <View style={styles.carContainer}>

        <ImageBackground
          source={require('../../assets/image/1.jpg')}
          style={styles.images}
          />

          

        <View style={styles.titles}>
          <Text style={styles.title} >Model S</Text>
          <Text style={styles.subtitle}>Starting at $546666</Text>
        </View>

        
      </View>
    )
}

export default CarItem;

import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

function Home(props) {
  return (
    <View>
      <ImageBackground source={require('../assets/images/cliff-fjord.jpg')} style={styles.image}>
        {/* Title */}
        <Text>Reise Norge</Text>
      </ImageBackground>
      <Text>
        Löksås ipsum nu tiden genom färdväg strand oss trevnadens, att fram blev kom tiden både när, för i det dunge genom
        vad blivit.
      </Text>
      <ImageBackground source={require('../assets/images/fjord-ice.jpg')} style={styles.image}>
        {/* Title */}
        <Text>Reise Norge</Text>
      </ImageBackground>
      <Text>
        Ordningens sorgliga själv hav blivit mjuka sorgliga vad ingalunda samtidigt, precis bland göras är dimma ingalunda i
        år, omfångsrik tiden att gamla blivit vi kanske fram.
      </Text>
      <ImageBackground source={require('../assets/images/coast.jpg')} style={styles.image}>
        {/* Title */}
        <Text>Reise Norge</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
  },
});

export default Home;

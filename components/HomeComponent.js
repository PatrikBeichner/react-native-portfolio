import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

function Home(props) {
  return (
    <View>
      <ImageBackground source={require("../assets/images/cliff-fjord.jpg")} style={styles.image}>
        {/* Title */}
        <Text>Reise Norge</Text>
      </ImageBackground>
      <Text>
        
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 500,
    resizeMode: "cover",
  },
});

export default Home;

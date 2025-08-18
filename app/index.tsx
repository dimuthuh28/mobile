import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import {reactLogo} from "@/assets/images/react-logo.png"

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style = {styles.text}>Edit app/index.tsx tor edit this screen.</Text>

      <Image source={reactLogo}
      style= {{
        width: 100,
        height: 100
      }}
      />

      <TextInput
      placeholder="youremail"
      secureTextEntry
      style= {{
        borderWidth: 1,
        padding: 10
      }}
      />

      <TouchableOpacity>
        <Text>Click me</Text>
      </TouchableOpacity>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "red",
    fontSize: 40
  }
})

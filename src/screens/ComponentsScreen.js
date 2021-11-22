import React from "react";
import { Text, StyleSheet , View} from "react-native";

const greetings = "Hi there!";

const ComponentScreen = () => {
    return <View>
    <Text style={styles.textStyles} >{greetings}</Text>
    <Text>Hey good to see you!</Text>
    </View>
}

const styles  = StyleSheet.create({
    textStyles: {
        fontSize: 20,
        color: "red"
    }
});

export default ComponentScreen;
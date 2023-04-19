import * as React from "react";
import { View } from "react-native";
import { Avatar, Text, TextInput } from "react-native-paper";

const Account = () => {
    const [username, setUsername] = React.useState("user");
    const [height, setHeight] = React.useState("5'11''");
    const [weight, setWeight] = React.useState("65");

    return (
        <View style={{ alignItems: "center", marginTop: 50 }}>
            <Avatar.Icon size={100} icon="account" />
            <Text variant="titleMedium" style={{ marginTop: 30 }}>Username:</Text>
            <TextInput value={username} style={{ width: "70%" }} onChangeText={text => setUsername(text)} />

            <Text variant="titleLarge" style={{ marginTop: 30 }}>Health Details</Text>
            <Text variant="titleMedium" style={{ marginTop: 30 }}>Height:</Text>
            <TextInput value={height} style={{ width: 100 }} onChangeText={text => setHeight(text)} />

            <Text variant="titleMedium" style={{ marginTop: 30 }}>Weight:</Text>
            <TextInput value={weight} style={{ width: 100 }} onChangeText={text => setWeight(text)} />
        </View>
    )
}

export default Account;
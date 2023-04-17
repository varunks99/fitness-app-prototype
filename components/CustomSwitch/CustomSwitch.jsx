import * as React from "react";
import { View, Switch } from "react-native";
import { Text } from "react-native-paper";

const CustomSwitch = ({ text }) => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    return (
        <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 5 }}>
            <Text style={{ width: "75%" }}>{text}</Text>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        </View>
    );
}

export default CustomSwitch;
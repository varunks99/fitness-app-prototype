import * as React from "react";
import { View, Switch } from "react-native";
import { Text, Provider, Portal, Modal, Button } from "react-native-paper";

const CustomSwitch = ({ text, children }) => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const [visible, setVisible] = React.useState(false);
    const containerStyle = { backgroundColor: 'white', padding: 20, margin: 20, borderRadius: 10 };

    const onToggleSwitch = () => {
        setIsSwitchOn(state => {
            if (!state) {
                setVisible(true);
            }
            return !state;
        });
    }
    return (
        <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 5 }}>
            <Text style={{ width: "75%" }}>{text}</Text>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
            <Portal>
                <Modal visible={visible} onDismiss={() => setVisible(false)} contentContainerStyle={containerStyle}>
                    {children}
                    <Button mode="contained" onPress={() => setVisible(false)} style={{ marginTop: 10 }}>OK</Button>
                </Modal>
            </Portal>
        </View>
    );
}

export default CustomSwitch;
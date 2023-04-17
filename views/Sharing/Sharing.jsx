import * as React from "react";
import { View } from "react-native";
import { Text, List, IconButton, Modal, Portal, Provider } from "react-native-paper";
import CustomSwitch from "../../components/CustomSwitch/CustomSwitch";
import { ScrollView } from "react-native";

const Sharing = () => {
    const friends = [{ name: "John Doe" }, { name: "Jane Austen" }, { name: "Jill Hilden" }, { name: "Jack Sparrow" }];
    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20, margin: 20, borderRadius: 10 };

    return (
        <Provider>
            <ScrollView style={{ margin: 20 }}>
                <Text variant="titleLarge" style={{ textAlign: "center", margin: 10, color: "#8454ac", fontWeight: 500 }}>Sharing is caring!</Text>
                <Text variant="titleLarge" style={{ textAlign: "center", marginBottom: 20, color: "#8454ac", fontWeight: 500 }}>Share your progress with friends and family, and reach your goals together.</Text>

                <View style={{ backgroundColor: "#fff", padding: 20, borderRadius: 10 }}>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <Text variant="titleLarge" style={{ textAlign: "center", margin: 10, color: "#6c7ccc", fontWeight: 500 }}>Your Friends</Text>
                        <IconButton
                            icon="card-account-phone"
                            size={22}
                            iconColor="#eee"
                            containerColor="#6c7ccc"
                            onPress={showModal}
                        />
                    </View>
                    {friends.map((friend, i) => (
                        <List.Item
                            key={i}
                            title={friend.name}
                            style={{ backgroundColor: "#f7f7f7", margin: 1, borderRadius: 10 }}
                            left={props => <List.Icon {...props} icon="account-circle" />}
                        />
                    ))}
                </View>

                <View style={{ backgroundColor: "#fff", padding: 20, borderRadius: 10, marginTop: 20 }}>
                    <Text variant="titleLarge" style={{ color: "#6c7ccc", fontWeight: 500 }}>Control your data</Text>
                    <Text variant="titleMedium" style={{ color: "#6c7ccc" }}>Choose what you want to let your friends see</Text>
                    <CustomSwitch text="Your profile information like your age, weight and height" />
                    <CustomSwitch text="Your daily step count and distance covered" />
                    <CustomSwitch text="A heatmap of your previous activities" />
                    <CustomSwitch text="Your challenges and goals" />
                </View>
                <Portal>
                    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                        <Text>This app has access to your contents to search for and add new friends.</Text>
                    </Modal>
                </Portal>
            </ScrollView>
        </Provider>
    );
}

export default Sharing;
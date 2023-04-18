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
                        <Text variant="titleMedium">This app has access to your contents to search for and add new friends.</Text>
                        <Text variant="titleMedium" style={{ fontStyle: "italic", marginTop: 10 }}>What are the risks of sharing your contacts?</Text>
                        <Text>1. The app can access the information you store about a contact like their email address, birthday and so on. It may be used to send spam or unwanted messages to your friends and family</Text>
                        <Text style={{ marginTop: 10 }}>2. If a malicious actor gains access to your contacts, they may be able to use that information to steal your identity or carry out phishing attacks on your contacts.</Text>

                        <Text variant="titleMedium" style={{ fontStyle: "italic", marginTop: 10 }}>What can I do?</Text>
                        <Text>Adding your contact manually without giving contact permission is a safer option. Ask your friend for their username.</Text>
                    </Modal>
                </Portal>
            </ScrollView>
        </Provider>
    );
}

export default Sharing;
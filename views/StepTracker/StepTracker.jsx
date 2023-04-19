import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import { ProgressChart, BarChart } from "react-native-chart-kit";
// import { CopilotStep, useCopilot, walkthroughable } from "react-native-copilot";
import { FAB, Text, Dialog, Modal, Portal, IconButton, Provider, Button } from "react-native-paper";
import OpenURLButton from "../../components/OpenURLButton/OpenURLButton";

const progressData = [0.4, 0.6]
const barData = {
    labels: ["Jan", "Feb", "March", "April"],
    datasets: [
        {
            data: [20, 45, 28, 80]
        }
    ]
};
// const CopilotText = walkthroughable(RNText);

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 5,
        padding: 4
    },
})

const StepTracker = () => {
    const [visible, setVisible] = React.useState(false);
    const [modal1, setModal1] = React.useState(false);
    const [modal2, setModal2] = React.useState(false);
    const [modal3, setModal3] = React.useState(false);
    const [modal4, setModal4] = React.useState(false);
    const [modal5, setModal5] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20, margin: 20, borderRadius: 10 };

    const chartConfig = {
        backgroundGradientFrom: '#8454ac',
        backgroundGradientTo: '#6c7ccc',
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    }

    return (
        <Provider>
            <View style={{ alignItems: "center", flex: 1 }}>
                <ProgressChart
                    data={progressData}
                    width={Dimensions.get("window").width}
                    height={250}
                    radius={64}
                    hideLegend={true}
                    chartConfig={chartConfig}
                />

                <View style={{ backgroundColor: "#fff", padding: 20, borderRadius: 10, marginTop: 30 }}>
                    <Text variant="headlineMedium" style={{ fontWeight: 600, color: "#8454ac" }}>Move: 362/330cal</Text>
                    <Text variant="headlineMedium" style={{ fontWeight: 600, color: "#8454ac" }}>Steps: 4,032</Text>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <Text variant="headlineMedium" style={{ fontWeight: 600, color: "#8454ac" }}>Distance: 4.4km  </Text>
                        <IconButton
                            icon="map-marker-alert"
                            size={22}
                            iconColor="#eee"
                            containerColor="#6c7ccc"
                            onPress={showModal}
                        />
                    </View>
                </View>

                <IconButton style={{ marginTop: 30 }} icon="play" size={30} iconColor="#fff" containerColor="#8454ac" />
                <Text variant="titleMedium" style={{ color: "#8454ac" }}>Start Activity</Text>

                <Portal>
                    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                        <Text variant="titleMedium">This app tracks your location to infer this metric.</Text>
                    </Modal>
                </Portal>
                <Portal>
                    <Dialog theme={{ animation: { scale: 2.5 } }} visible={modal1} onDismiss={() => setModal1(false)} dismissable={false}>
                        <Dialog.Content>
                            <Text variant="titleMedium">Privacy Tutorial</Text>
                            <Text>We value your privacy. Here is a short tutorial to help you understand the options you have to protect your privacy in this application</Text>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button mode="contained" onPress={() => { setModal1(false); setModal2(true); }}>Next</Button>
                            <Button mode="contained-tonal" onPress={() => setModal1(false)}>Skip</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
                <Portal>
                    <Dialog theme={{ animation: { scale: 2.5 } }} visible={modal2} dismissable={false}>
                        <Dialog.Content>
                            <Text variant="titleLarge">1. Make use of the fine-grain control in Privacy Settings</Text>
                            <Text variant="titleMedium">Data sharing</Text>
                            <Text>To ensure your privacy, disable data sharing with third parties.</Text>
                            <Text>However, if you want to access a service which requires third-party support, like in-app music, enable only the "Profile data" option for sharing</Text>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button mode="contained" onPress={() => { setModal2(false); setModal3(true); }}>Next</Button>
                            <Button mode="contained-tonal" onPress={() => setModal2(false)}>Skip</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
                <Portal>
                    <Dialog theme={{ animation: { scale: 2.5 } }} visible={modal3} dismissable={false}>
                        <Dialog.Content>
                            <Text variant="titleMedium">Location preferences</Text>
                            <Text>It is best to not allow the app to track your location.</Text>
                            <Text>The app can still calculate your step count without accessing location. However, if you want more accurate results, enable only the option "To calculate your distance, speed and elevation during an activity"</Text>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button mode="contained" onPress={() => { setModal3(false); setModal4(true); }}>Next</Button>
                            <Button mode="contained-tonal" onPress={() => setModal3(false)}>Skip</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
                <Portal>
                    <Dialog theme={{ animation: { scale: 2.5 } }} visible={modal4} dismissable={false}>
                        <Dialog.Content>
                            <Text variant="titleMedium">Ad preferences</Text>
                            <Text>Disable this setting to prevent the app from tracking your online behavior and preferences.</Text>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button mode="contained" onPress={() => { setModal4(false); setModal5(true); }}>Next</Button>
                            <Button mode="contained-tonal" onPress={() => setModal4(false)}>Skip</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
                <Portal>
                    <Dialog theme={{ animation: { scale: 2.5 } }} visible={modal5} dismissable={false}>
                        <Dialog.Content>
                            <Text variant="titleLarge">2. Share wisely!</Text>
                            <Text>GoFit allows you to share your health progress with family and friends.</Text>
                            <Text>Make sure you know what you are sharing. Select what data you would like to share under the Sharing tab</Text>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button mode="contained-tonal" onPress={() => setModal5(false)}>Finish</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </View>
            <FAB
                icon="book-open-variant"
                style={styles.fab}
                onPress={() => setModal1(true)}
            />
            <Text style={{ position: "absolute", right: 0, bottom: 2, marginRight: 22, color: "#8454ac" }}>Tutorial</Text>
        </Provider>
    )
}

export default StepTracker;
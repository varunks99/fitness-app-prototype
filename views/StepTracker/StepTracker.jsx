import * as React from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";
import { Dimensions } from "react-native";
import { ProgressChart } from "react-native-chart-kit";
import { CopilotProvider, CopilotStep, useCopilot, walkthroughable } from "react-native-copilot";
import { FAB, Text, Modal, Portal, IconButton, Provider, Button } from "react-native-paper";
const data = [0.4, 0.6]

const CopilotText = walkthroughable(Text);

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
})

const StepTracker = () => {
    const { start, copilotEvents } = useCopilot();
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20, margin: 20, borderRadius: 10 };

    const chartConfig = {
        backgroundColor: '#e26a00',
        backgroundGradientFrom: '#fb8c00',
        backgroundGradientTo: '#ffa726',
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    }

    React.useEffect(() => {
        copilotEvents.on("start", () => { console.log('start') });
        start();
    }, [])
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Provider>
                <View style={{ alignItems: "center", flex: 1 }}>
                    <ProgressChart
                        data={data}
                        width={Dimensions.get("window").width}
                        height={250}
                        radius={64}
                        hideLegend={true}
                        chartConfig={chartConfig}
                    />
                    <CopilotStep text="test" order={1} name="test">
                        <CopilotText>Move: 362/330cal</CopilotText>
                    </CopilotStep>
                    <Text variant="headlineMedium">Steps: 4,032</Text>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <Text variant="headlineMedium">Distance: 4.4km  </Text>
                        <IconButton
                            icon="map-marker-alert"
                            size={22}
                            containerColor="#ddd"
                            onPress={showModal}
                        />
                    </View>
                    <Button onPress={() => start()}>Start</Button>
                    <Portal>
                        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                            <Text>Your location was used to infer this metric.</Text>
                        </Modal>
                    </Portal>
                </View>
                <FAB
                    icon="book-open-variant"
                    style={styles.fab}
                    onPress={() => console.log('Pressed')}
                />
            </Provider>
        </SafeAreaView>
    )
}

export default StepTracker;
import * as React from 'react';
import { Text, HelperText, Button, Dialog, Portal, Provider, Surface } from 'react-native-paper';
import { ScrollView, View, SafeAreaView } from 'react-native';
import DropDown from 'react-native-paper-dropdown';
import CustomSwitch from '../../components/CustomSwitch/CustomSwitch';
// import { CopilotStep, walkthroughable } from 'react-native-copilot';



const Settings = () => {
    const [dialog1, setDialog1] = React.useState(false);
    const [dialog2, setDialog2] = React.useState(false);
    const [dialog3, setDialog3] = React.useState(false);
    const [dropdown, setDropdown] = React.useState(false);
    const [value, setValue] = React.useState(6);

    return (
        <Provider>
            <ScrollView style={{ margin: 20 }}>
                <View style={{ backgroundColor: "#fff", padding: 15, borderRadius: 10 }}>
                    <Text variant="titleLarge" style={{ color: "#8454ac", fontWeight: 500 }}>Data Sharing</Text>
                    <CustomSwitch text={"Share data with third parties"} />
                    <HelperText type="info">Data needs to be shared with third parties to access services like workout music or health week challenges</HelperText>
                    <Text variant="titleMedium" style={{ color: "#6c7ccc" }}>Share only the following...</Text>
                    <CustomSwitch text={"Profile data"} />
                    <HelperText type="info">Your name, username and gender.</HelperText>
                    <CustomSwitch text={"Activity data"} />
                    <HelperText type="info">Information about your past activities</HelperText>
                </View>

                <View style={{ backgroundColor: "#fff", padding: 15, borderRadius: 10, marginTop: 10 }}>
                    <Text variant="titleLarge" style={{ color: "#8454ac", fontWeight: 500 }}>Location preferences</Text>
                    <CustomSwitch text={"Location tracking"} />
                    <Text variant="titleMedium" style={{ color: "#6c7ccc" }}>Control for what purposes you would like your location to be tracked</Text>
                    <CustomSwitch text={"To calculate your distance, speed and elevation during an activity"} />
                    <CustomSwitch text={"To recommend friends in your area"} />
                    <CustomSwitch text={"To analyze your performance over time and provide insights into your training"} />
                </View>

                <View style={{ backgroundColor: "#fff", padding: 15, borderRadius: 10, marginTop: 10 }}>
                    <Text variant="titleLarge" style={{ color: "#8454ac", fontWeight: 500 }}>Ad preferences</Text>
                    <CustomSwitch text={"Show me personalized ads"} />
                    <HelperText type="info">We use your personal information and activity to customize the ads you see</HelperText>
                </View>

                <View style={{ backgroundColor: "#fff", padding: 15, borderRadius: 10, marginTop: 10 }}>
                    <Text variant="titleLarge" style={{ color: "#8454ac", fontWeight: 500 }}>Data retention</Text>
                    <Text>Select the number of months you would like us to retain your data</Text>
                    <SafeAreaView style={{ flex: 1, margin: 2, justifyContent: "center" }}>
                        <DropDown label={'Select duration'} value={value} setValue={setValue} list={[{ label: "1", value: 1 }, { label: "2", value: 2 }, { label: "4", value: 4 }, { label: "6", value: 6 }, { label: "8", value: 8 }, { label: "10", value: 10 }, { label: "12", value: 12 }]} visible={dropdown} showDropDown={() => setDropdown(true)} onDismiss={() => setDropdown(false)} />
                    </SafeAreaView>
                    <HelperText>You can choose how long we keep your data. We recommend keeping your data for at least 1 year to ensure you have access to your data in case you need it.</HelperText>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 30, flexWrap: "wrap" }}>
                    <Button mode="contained" onPress={() => setDialog1(true)}>Download my data</Button>
                    <Button mode="contained" onPress={() => setDialog2(true)}>Delete all data</Button>
                    <Button style={{ margin: 10 }} mode="contained" onPress={() => setDialog3(true)}>Delete my account</Button>
                </View>
                <Portal>
                    <Dialog visible={dialog1} onDismiss={() => setDialog1(false)}>
                        <Dialog.Title>Download data</Dialog.Title>
                        <Dialog.Content>
                            <Text variant="bodyMedium">You can download your activity data, including details such as time, distance, speed, heart rate, elevation, and more. You can choose to export your data in several formats, including CSV, FIT, GPX, or TCX.
                            </Text>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={() => setDialog1(false)}>Cancel</Button>
                            <Button onPress={() => setDialog1(false)}>Download</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>

                <Portal>
                    <Dialog visible={dialog2} onDismiss={() => setDialog1(false)}>
                        <Dialog.Title>Delete data</Dialog.Title>
                        <Dialog.Content>
                            <Text variant="bodyMedium">You can delete all your activity data, including details such as time, distance, speed, heart rate, elevation, and more.</Text>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={() => setDialog2(false)}>Cancel</Button>
                            <Button onPress={() => setDialog2(false)}>Delete</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>

                <Portal>
                    <Dialog visible={dialog3} onDismiss={() => setDialog3(false)}>
                        <Dialog.Title>Delete data</Dialog.Title>
                        <Dialog.Content>
                            <Text variant="bodyMedium">This will permanently delete your account. We may, for a certain period, retain your profile information and a history of your activity for legal purposes.</Text>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={() => setDialog3(false)}>Cancel</Button>
                            <Button onPress={() => setDialog3(false)}>Delete Account</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </ScrollView>
        </Provider>
    );
};
export default Settings;
import * as React from 'react';
import { Switch, Text, HelperText, Button, Dialog, Portal, Provider, Surface } from 'react-native-paper';
import { ScrollView, View, SafeAreaView } from 'react-native';
import DropDown from 'react-native-paper-dropdown';


const SettingSwitch = ({ text }) => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    return (
        <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 5 }}>
            <Text style={{ width: "75%" }}>{text}</Text>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        </View>
    );
}

const Settings = () => {
    const [dialog1, setDialog1] = React.useState(false);
    const [dialog2, setDialog2] = React.useState(false);
    const [dropdown, setDropdown] = React.useState(false);
    const [value, setValue] = React.useState(6);

    return (
        <Provider>
            <ScrollView>
                <View>
                    <Text variant="titleLarge">Data Sharing</Text>
                    <SettingSwitch text={"Share data with third parties"} />
                    <HelperText type="info">Data needs to be shared with third parties to access services like workout music or health week challenges</HelperText>
                    <Text variant="titleMedium">Share only the following...</Text>
                    <SettingSwitch text={"Profile data"} />
                    <HelperText type="info">Your name, username and gender.</HelperText>
                    <SettingSwitch text={"Activity data"} />
                    <HelperText type="info">Information about your past activities</HelperText>
                </View>

                <View>
                    <Text variant="titleLarge">Location preferences</Text>
                    <SettingSwitch text={"Location tracking"} />
                    <Text variant="titleMedium">Control for what purposes you would like your location to be tracked</Text>
                    <SettingSwitch text={"To calculate your distance, speed and elevation during an activity"} />
                    <SettingSwitch text={"To recommend friends in your area"} />
                    <SettingSwitch text={"To analyze your performance over time and provide insights into your training"} />
                </View>

                <View>
                    <Text variant="titleLarge">Ad preferences</Text>
                    <SettingSwitch text={"Show me personalized ads"} />
                    <HelperText type="info">We use your personal information and activity to customize the ads you see</HelperText>
                </View>

                <View>
                    <Text variant="titleLarge">Data retention</Text>
                    <Text>Select the number of months you would like us to retain your data</Text>
                    <SafeAreaView style={{ flex: 1, margin: 2, justifyContent: "center" }}>
                        <DropDown label={'Select duration'} value={value} setValue={setValue} list={[{ label: "1", value: 1 }, { label: "2", value: 2 }, { label: "4", value: 4 }, { label: "6", value: 6 }, { label: "8", value: 8 }, { label: "10", value: 10 }, { label: "12", value: 12 }]} visible={dropdown} showDropDown={() => setDropdown(true)} onDismiss={() => setDropdown(false)} />
                    </SafeAreaView>
                    <HelperText>You can choose how long we keep your data. We recommend keeping your data for at least 1 year to ensure you have access to your data in case you need it.</HelperText>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
                    <Button mode="contained" onPress={() => setDialog1(true)}>Download my data</Button>
                    <Button mode="contained" onPress={() => setDialog2(true)}>Delete all data</Button>
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
            </ScrollView>
        </Provider>
    );
};
export default Settings;
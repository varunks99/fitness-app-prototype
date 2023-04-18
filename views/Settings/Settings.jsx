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
                    <CustomSwitch text={"Allow data sharing with third parties"} children={
                        <>
                            <Text style={{ fontStyle: "italic", color: "red", marginTop: 10 }}>What are the privacy risks? </Text>
                            <Text>1. Third-party companies may send you targeted ads based on your interests, behaviors, and preferences.</Text>
                            <Text style={{ marginVertical: 10 }}>2. Your data is in the control of the third-party. Your information could be exposed in a third-party data breach.</Text>
                            <Text>3. They can create a user profile of you which can be used to make decisions about you, like denying you a loan or job based on your online activity.</Text>

                            <Text style={{ fontStyle: "italic", color: "#6c7ccc", marginTop: 10 }}>What features won't work if disabled? </Text>
                            <Text>1. In-app activity music, which depends on Apple Music</Text>
                            <Text style={{ marginVertical: 10 }}>2. Activity challenges, hosted by Runthrox.</Text>
                            <Text>If you want some of these features, look at the more specific controls below</Text>
                        </>
                    } />
                    <HelperText type="info">Data needs to be shared with third parties to access services like workout music or health week challenges</HelperText>
                    <Text variant="titleMedium" style={{ color: "#6c7ccc" }}>Share only the following...</Text>
                    <CustomSwitch text={"Profile data"} children={
                        <>
                            <Text>Use this if you only want to access the in-app music feature. Apple Music requires your name, username and gender.</Text>
                            <Text style={{ fontStyle: "italic", color: "red", marginTop: 10 }}>What is the potential risk? </Text>
                            <Text>This information can be used to identify and track your online activities, potentially leading to targeted advertising or even identity theft.</Text>
                        </>
                    } />
                    <HelperText type="info">Your name, username and gender.</HelperText>
                    <CustomSwitch text={"Activity data"} children={<>
                        <Text>Enable this if you want recommendations on challenges based on your past activities. If disabled, you will still get recommendations, but not tailored to you.</Text>
                        <Text style={{ fontStyle: "italic", color: "red", marginTop: 10 }}>What are the risks? </Text>
                        <Text>The third party will get access to your activity routes and maps. They can infer locations you frequent with this data. The third-party is responsible for handling this data. If leaked, it can be used for cyberstalking and similar activities.</Text>
                    </>} />
                    <HelperText type="info">Information about your past activities</HelperText>
                    <CustomSwitch text={"Health data"} children={<>
                        <Text>Enable this if you want insights on your health and fitness level</Text>
                        <Text style={{ fontStyle: "italic", color: "red", marginTop: 10 }}>What are the risks? </Text>
                        <Text>1. If the third-party does not have sufficient data protection, your sensitive health information can be exposed in a breach</Text>
                        <Text style={{ marginVertical: 10 }}>2. Third-parties may be able to infer health conditions you want to keep private</Text>
                        <Text>3. Insurance companies could use this information to manipulate your premium</Text>
                    </>} />
                    <HelperText type="info">Your heart rate data, body metrics and exercise data like calories burned.</HelperText>
                </View>

                <View style={{ backgroundColor: "#fff", padding: 15, borderRadius: 10, marginTop: 10 }}>
                    <Text variant="titleLarge" style={{ color: "#8454ac", fontWeight: 500 }}>Location preferences</Text>
                    <CustomSwitch text={"Location tracking"} children={<>
                        <Text style={{ fontStyle: "italic", color: "red", marginTop: 10 }}>What are the privacy risks?</Text>
                        <Text>1. Your daily habits and behaviors may be exposed, such as where you live, work and travel. This may be used for targeted advertising, cyberstalking, or to steal your identity</Text>
                        <Text>2. Breaches or hacks can expose your location data to unauthorized parties, who can use it for economic gain.</Text>
                        <Text style={{ fontStyle: "italic", color: "#6c7ccc", marginTop: 10 }}>What features won't work if disabled? </Text>
                        <Text style={{ marginVertical: 10 }}>1. The app can't track your accurate distance and will have to infer it based on your step count.</Text>
                        <Text>2. Similarly, the calories you burn cannot be predicted completely accurately as the app cannot measure your speed and elevation</Text>

                    </>} />
                    <Text variant="titleMedium" style={{ color: "#6c7ccc" }}>Control for what purposes you would like your location to be tracked</Text>
                    <CustomSwitch text={"Only when I start an activity"} children={<>
                        <Text>Enable this if you want more accurate activity information. Your location will be used to calculate your distance, speed and elevation.</Text>
                        <Text style={{ fontStyle: "italic", color: "red", marginTop: 10 }}>What are the privacy risks?</Text>
                        <Text>The app stores your location data after an activity. This gives a trace of the locations you visited and can be used for cyberstalking.</Text>
                    </>} />
                    <CustomSwitch text={"To recommend friends in your area"} children={<>
                        <Text>Friends who share a nearby location will be recommended.</Text>
                        <Text style={{ fontStyle: "italic", color: "red", marginTop: 10 }}>What are the privacy risks?</Text>
                        <Text>You could be exposing your approximate location to unknown and potentially malicious people</Text>
                    </>} />
                    <CustomSwitch text={"To analyze your performance over time and provide insights into your training"} children={<>
                        <Text>Your past routes along with your heart rate information will be analyzed to provide you with interesting and useful performance analysis</Text>
                    </>} />
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
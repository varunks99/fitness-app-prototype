
import { Text, List, View } from 'react-native-paper';

const FAQ = () => {
    return (
        <List.AccordionGroup>
            <List.Accordion title="What information does the app collect about me?" id="1" titleStyle={{ color: "#8454ac" }} style={{ backgroundColor: "#eee", marginBottom: 3 }}>
                <List.AccordionGroup>
                    <List.Accordion title="Account Information" id="1.1">
                        <List.Item descriptionNumberOfLines={10} description={
                            <Text>We collect basic account information such as your name, email address, date of birth, gender, username and password</Text>
                        } />
                    </List.Accordion>
                    <List.Accordion title="Profile, Activity and Use Information" id="1.2">
                        <List.Section>
                            <List.Item descriptionNumberOfLines={10} description={
                                <Text>We collect information about your activity in the application such as when you start an activity, join a challenge, view your friends' activities and so on. We also track your use of this application to provide you better services. </Text>
                            } />
                            <List.Item descriptionNumberOfLines={10} description={
                                <>
                                    <Text style={{ fontStyle: "italic", color: "red", marginTop: 10 }}>What are the risks? </Text>
                                    <Text>The company can build a detailed profile of your preferences and behaviors and use this to send you targeted ads. This information can be used by third-parties as well. </Text>
                                </>} />
                        </List.Section>
                    </List.Accordion>
                    <List.Accordion title="Location Information" id="1.3">
                        <List.Section>
                            <List.Item descriptionNumberOfLines={10} description="We collect and process location information to track the distance you covered during an activity like walking or cycling. We may also access your location to recommend friends in your area and to analyze your performance to provide insights to you." />
                            <List.Item descriptionNumberOfLines={10} description={
                                <>
                                    <Text style={{ fontStyle: "italic", color: "red", marginTop: 10 }}>What are the risks? </Text>
                                    <Text>Location data can reveal sensitive information about your daily habits and behaviors, such as where you live, work and travel. This may be used for targeted advertising, cyberstalking, or to steal your identity. Additionally, data breaches or hacks can expose your location data to unauthorized third parties, who can use your location data for their own economic ends.</Text>
                                </>} />
                        </List.Section>
                    </List.Accordion>
                    <List.Accordion title="Contacts Information" id="1.4">
                        <List.Section>
                            <List.Item descriptionNumberOfLines={10} description="If you choose to share your contacts with THE APP, THE APP will store and access your contacts' information securely to identify connections and help you connect with them." />
                            <List.Item descriptionNumberOfLines={10} description={
                                <>
                                    <Text style={{ fontStyle: "italic", color: "red", marginTop: 10 }}>What are the risks? </Text>
                                    <Text>The app can access the information you store about a contact like their email address, birthday and so on. It may be used to send spam or unwanted messages to your friends and family. If a malicious actor gains access to your contacts, they may be able to use that information to steal your identity or carry out phishing attacks on your contacts.</Text>

                                </>} />
                        </List.Section>
                    </List.Accordion>
                    <List.Accordion title="Health Information" id="1.5">
                        <List.Section>
                            <List.Item descriptionNumberOfLines={10} description="We collect information such as your weight, height, heart rate and other indicators." />
                            <List.Item descriptionNumberOfLines={10} description={
                                <>
                                    <Text style={{ fontStyle: "italic", color: "red", marginTop: 10 }}>What are the risks? </Text>
                                    <Text>Health information is highly sensitive, and if someone gets access to it without your permission, they can use it to pretend to be you and get medical treatment, drugs, or insurance benefits under your name. This is called medical identity theft. Insurance companies may use your health information to adjust your premiums or deny coverage, which could be discriminatory.</Text>
                                </>} />
                        </List.Section>
                    </List.Accordion>

                </List.AccordionGroup>
            </List.Accordion>
            <List.Accordion title="How is my personal information used?" id="2" titleStyle={{ color: "#6c7ccc" }} style={{ backgroundColor: "#eee", marginBottom: 3 }}>
                <List.AccordionGroup>
                    <List.Accordion title="To record your activities and analyze your performance" id="2.1">
                        <List.Item descriptionNumberOfLines={10} description="We use your personal information to provide you with the services you request, to improve our services, to communicate with you, and for other purposes described in this Privacy Policy." />
                    </List.Accordion>
                    <List.Accordion title="To customize your experience" id="2.2">
                        <List.Item descriptionNumberOfLines={10} description="We use the information we collect about you to suggest workouts that may interest you or to send your reminders about your daily goals" />
                    </List.Accordion>
                    <List.Accordion title="To improve our services" id="2.3">
                        <List.Item descriptionNumberOfLines={10} description="We also use the information we collect to analyze, develop and improve our services, which may involve third-party analytics. " />
                    </List.Accordion>
                    <List.Accordion title="To communicate with you" id="2.4">
                        <List.Item descriptionNumberOfLines={10} description="We use the information your provide to respond to your requests. We may also use this information to market and promote our services." />
                    </List.Accordion>
                </List.AccordionGroup>
                <List.Section>
                    <List.Item descriptionNumberOfLines={10} description={
                        <>
                            <Text style={{ fontStyle: "italic", color: "red", marginTop: 10 }}>What are the risks? </Text>
                            <Text>The purposes state above allow the app to create a profile based on your preferences and behaviors. This information can be used to show you targeted ads, which can be intrusive. If shared with third-parties, it could be used to alter the content you see across different sites. User profiling also makes it easier for you to be tracked online, which can be exploited by hackers.</Text>
                        </>} />
                </List.Section>
            </List.Accordion>
            <List.Accordion title="Is my information shared with third parties?" id="3" titleStyle={{ color: "#8454ac" }} style={{ backgroundColor: "#eee", marginBottom: 3 }}>
                <List.Section>
                    <List.Item descriptionNumberOfLines={10} description="We may share your information with third parties whose services we rely on such as improving our services or processing payments. We limit the amount of information shared to the purpose required only. These service providers may also collect information about your use of the services on our behalf, to display information of your interest on THE app or other websites." />
                    <List.Item descriptionNumberOfLines={20} description={
                        <>
                            <Text style={{ fontStyle: "italic", color: "red", marginTop: 10 }}>What are the risks? </Text>
                            <Text>                                                             1. Third-party companies may use the shared data to target advertising to the user based on their interests, behaviors, and preferences.                                            2. Sharing data with third parties means giving up control over how the data is used and who has access to it. If the third-party suffers a data breach because of inefficient data protection, this information be exposed.                                                                             3. Data shared with third parties can be combined with other sources of data to draw inferences and make decisions about the user, such as denying a loan or job based on data collected about their personal lives.</Text>
                        </>} />
                </List.Section>
            </List.Accordion>
            <List.Accordion title="Can I control what is collected and how it's used?" id="5" titleStyle={{ color: "#6c7ccc" }} style={{ backgroundColor: "#eee", marginBottom: 3 }}>
                <List.Item descriptionNumberOfLines={10} description="THE APP offers different privacy settings to help you manage your privacy and decide how your data is used and shared. Please visit the Privacy Settings page to adjust your settings." />
            </List.Accordion>
            <List.Accordion title="What opt-out options do I have available?" id="6" titleStyle={{ color: "#8454ac" }} style={{ backgroundColor: "#eee", marginBottom: 3 }}>
                <List.Item descriptionNumberOfLines={10} description="1. You can opt out of sharing your location with the app. 
                        2. You can opt out of marketing and advertising.
                        3. You can opt out of sharing your data with third parties
                        4. You can" />
            </List.Accordion>
            <List.Accordion title="How long is my information retained?" id="7" titleStyle={{ color: "#6c7ccc" }} style={{ backgroundColor: "#eee", marginBottom: 3 }}>
                <List.Item descriptionNumberOfLines={10} description="By default, your activity data is retained for a period of 1 year. You can alter this duration in the Privacy Settings. Your account information is retained for 6 months after you delete your account." />
            </List.Accordion>
            <List.Accordion title="What happens if the privacy policy changes?" id="8" titleStyle={{ color: "#8454ac" }} style={{ backgroundColor: "#eee", marginBottom: 3 }}>
                <List.Item descriptionNumberOfLines={10} description="You will receive an email and an in-app notification to inform you about the changes." />
            </List.Accordion>
        </List.AccordionGroup>
    );
};

export default FAQ;
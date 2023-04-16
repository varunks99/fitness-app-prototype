
import { View } from 'react-native';
import { Text, List } from 'react-native-paper';

const FAQ = () => {
    return (
        <List.AccordionGroup>
            <List.Accordion title="What information does the app collect about me?" id="1">
                {/* <List.Item descriptionNumberOfLines={10} description="This app collects the following personal information:" /> */}
                <List.AccordionGroup>
                    <List.Accordion title="Account Information" id="1.1" style={{ width: "80%", backgroundColor: "#eee" }}>
                        <List.Item descriptionNumberOfLines={10} description="We collect basic account information such as your name, email address, date of birth, gender, weight, username and password" />
                    </List.Accordion>
                    <List.Accordion title="Profile, Activity and Use Information" id="1.2" style={{ width: "80%", backgroundColor: "#eee" }}>
                        <List.Item descriptionNumberOfLines={10} description="We collect information about your activity in the application and how you use this application to provide you better services" />
                    </List.Accordion>
                    <List.Accordion title="Location Information" id="1.3" style={{ width: "80%", backgroundColor: "#eee" }}>
                        <List.Item descriptionNumberOfLines={10} description="We collect and process location information to track the distance you covered during an activity like walking or cycling." />
                    </List.Accordion>
                    <List.Accordion title="Contacts Information" id="1.4" style={{ width: "80%", backgroundColor: "#eee" }}>
                        <List.Item descriptionNumberOfLines={10} description="If you choose to share your contacts with THE APP, THE APP will store and access your contacts' information securely to identify connections and help you connect with them." />
                    </List.Accordion>
                    <List.Accordion title="Health Information" id="1.5" style={{ width: "80%", backgroundColor: "#eee" }}>
                        <List.Item descriptionNumberOfLines={10} description="We collect information such as your weight, height, heart rate and other indicators." />
                    </List.Accordion>
                </List.AccordionGroup>
            </List.Accordion>
            <List.Accordion title="How is my personal information used?" id="2">
                <List.AccordionGroup>
                    <List.Accordion title="To record your activities and analyze your performance" id="2.1" style={{ width: "80%", backgroundColor: "#eee" }}>
                        <List.Item descriptionNumberOfLines={10} description="We use your personal information to provide you with the services you request, to improve our services, to communicate with you, and for other purposes described in this Privacy Policy." />
                    </List.Accordion>
                    <List.Accordion title="To customize your experience" id="2.2" style={{ width: "80%", backgroundColor: "#eee" }}>
                        <List.Item descriptionNumberOfLines={10} description="We use the information we collect about you to suggest workouts that may interest you or to send your reminders about your daily goals" />
                    </List.Accordion>
                    <List.Accordion title="To improve our services" id="2.3" style={{ width: "80%", backgroundColor: "#eee" }}>
                        <List.Item descriptionNumberOfLines={10} description="We also use the information we collect to analyze, develop and improve our services, which may involve third-party analytics. " />
                    </List.Accordion>
                    <List.Accordion title="To communicate with you" id="2.3" style={{ width: "80%", backgroundColor: "#eee" }}>
                        <List.Item descriptionNumberOfLines={10} description="We use the information your provide to respond to your requests. We may also use this information to market and promote our services." />
                    </List.Accordion>
                </List.AccordionGroup>
            </List.Accordion>
            <List.Accordion title="Is my information shared with third parties?" id="3">
                <List.Item descriptionNumberOfLines={10} description="We may share your information with third parties whose services we rely on such as improving our services or processing payments. We limit the amount of information shared to the purpose required only. These service providers may also collect information about your use of the services on our behalf, to display information of your interest on THE app or other websites." />
            </List.Accordion>
            <List.Accordion title="Can I control what is collected and how it's used?" id="5">
                <List.Item descriptionNumberOfLines={10} description="THE APP offers different privacy settings to help you manage your privacy and decide how your data is used and shared. Please visit the Privacy Settings page to adjust your settings." />
            </List.Accordion>
            <List.Accordion title="What opt-out options do I have available?" id="6">
                <List.Item descriptionNumberOfLines={10} description="1. You can opt out of sharing your location with the app. 
                        2. You can opt out of marketing and advertising.
                        3. You can opt out of sharing your data with third parties
                        4. You can " />
            </List.Accordion>
            <List.Accordion title="How long is my information retained?" id="7">
                <List.Item descriptionNumberOfLines={10} description="By default, your activity data is retained for a period of 1 year. You can alter this duration in the Privacy Settings. Your account information is retained for 6 months after you delete your account." />
            </List.Accordion>
            <List.Accordion title="What happens if the privacy policy changes?" id="8">
                <List.Item descriptionNumberOfLines={10} description="You will receive an email and an in-app notification to inform you about the changes." />
            </List.Accordion>
        </List.AccordionGroup>
    );
};

export default FAQ;
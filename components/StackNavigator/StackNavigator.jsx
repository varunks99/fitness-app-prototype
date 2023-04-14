import { createStackNavigator } from "@react-navigation/stack";
import StepTracker from "../../views/StepTracker/StepTracker";
import FAQ from "../../views/FAQ/FAQ";
import Settings from "../../views/Settings/Settings";

const Stack = createStackNavigator();

const HomeScreenNavigator = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen
                name="Home"
                component={StepTracker}
            />
        </Stack.Navigator>
    );
}

export { HomeScreenNavigator };

const FAQNavigator = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen
                name="FAQ"
                component={FAQ}
            />
        </Stack.Navigator>
    );
}

export { FAQNavigator };


const SettingsNavigator = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen
                name="Settings"
                component={Settings}
            />
        </Stack.Navigator>
    );
}

export { SettingsNavigator };
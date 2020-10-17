import * as React from "react";
import { View, Text, Button, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function TitleImage() {
    return (
        <Image
            style={{ width: 50, height: 40 }}
            source={{
                uri: "https://picsum.photos/id/124/50/40",
            }}
        />
    );
}
function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() =>
                    navigation.navigate("Details", {
                        itemId: 86,
                        otherParam: "anything you want here",
                    })
                }
            />
        </View>
    );
}
function DetailsScreen({ navigation, route }) {
    const { itemId, otherParam } = route.params;
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Details Screen</Text>
            <Text>Item id: {JSON.stringify(itemId)}</Text>
            <Text>otherParam: {JSON.stringify(otherParam)}</Text>
            <Button
                title="Go to Details... again"
                onPress={() =>
                    navigation.push("Details", {
                        itemId: Math.floor(Math.random() * 100),
                    })
                }
            />
            <Button
                title="update title"
                onPress={() => {
                    navigation.setOptions({ title: "hello world" });
                }}
            />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}
const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "#FF0000",
                    },
                    headerTintColor: "#FFFFFF",
                    headerTitleStyle: {
                        fontWeight: "bold",
                    },
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerTitle: (props) => <TitleImage {...props} />,
                    }}
                />
                <Stack.Screen name="Details" component={DetailsScreen} options={({ route }) => ({ title: route.params.itemId })} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

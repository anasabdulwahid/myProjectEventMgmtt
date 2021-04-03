import * as React from "react";
import {
  Image,
  Text,
  View,
  Button,
  style,
  StyleSheet,
  styles,
  ImageBackground,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Avatar, Card, Title, Paragraph } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const ComponentHome = () => (
  <Card>
    <Card.Title
      title="Event Planner"
      subtitle=""
      left={LeftContent}
    />

    <Card.Content>
      <Title>Events & Entertainment</Title>
      <Paragraph></Paragraph>
    </Card.Content>

    <Card.Cover source={require("../assets/chair.jpg")} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Click Ok</Button>
    </Card.Actions>
  </Card>
);

function EventsHomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "Top",
        alignItems: "center",
        backgroundColor: "pink",
      }}
    >
    <ComponentHome/>
      <Button
        onPress={() => navigation.navigate("EventsSecond")}
        title="Second Screen"
      ></Button>
      <Button
        onPress={() => navigation.navigate("EventsThird")}
        title="Third Screen"
      ></Button>
    </View>
  );
}

const Component = () => (
  <Card>
    <Card.Title
      title="Keep Moving"
      subtitle="5K Run & Walk"
      left={LeftContent}
    />

    <Card.Content>
      <Title>Run Fest</Title>
      <Paragraph></Paragraph>
    </Card.Content>

    <Card.Cover source={require("../assets/marathon.jpg")} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Click Ok</Button>
    </Card.Actions>
  </Card>
);

function EventsSecondScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "pink",
      }}
    >
      <Component />
    </View>
  );
}

const MyComponent = () => (
  <Card>
    <Card.Title
      title="Back To School"
      subtitle="Harmony Day"
      left={LeftContent}
    />

    <Card.Content>
      <Title>School Event</Title>
      <Paragraph></Paragraph>
    </Card.Content>

    <Card.Cover source={require("../assets/school.jpg")} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Click Ok</Button>
    </Card.Actions>
  </Card>
);

function EventsThirdScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "pink",
      }}
    >
      <MyComponent />
    </View>
  );
}

const Stack = createStackNavigator();

export default function EventsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="EventsHome" component={EventsHomeScreen} />
      <Stack.Screen name="EventsSecond" component={EventsSecondScreen} />
      <Stack.Screen name="EventsThird" component={EventsThirdScreen} />
    </Stack.Navigator>
  );
}

import { createStackNavigator } from "@react-navigation/stack"
import { ParamListBase, RouteProp } from "@react-navigation/native"
import CustomScreen from "./screens/CustomScreen"

const Screen1 = ({
  route,
  navigation,
}: {
  route: RouteProp<ParamListBase, "Screen1">
  navigation: any
}) => (
  <CustomScreen screenName="Screen1" route={route} navigation={navigation} />
)

const Screen2 = ({
  route,
  navigation,
}: {
  route: RouteProp<ParamListBase, "Screen2">
  navigation: any
}) => (
  <CustomScreen screenName="Screen2" route={route} navigation={navigation} />
)

const Stack = createStackNavigator()

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: "transparent",
        },
        header: () => null,
      }}
    >
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
    </Stack.Navigator>
  )
}

import { TouchableOpacity, View, StyleSheet } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Feather } from "@expo/vector-icons"
import { SafeAreaView } from "react-native-safe-area-context"

import CustomScreen from "./screens/CustomScreen"
import HomeStack from "./HomeStack"
import { ParamListBase, RouteProp } from "@react-navigation/native"

const ContactScreen = ({
  route,
  navigation,
}: {
  route: RouteProp<ParamListBase, "Contact">
  navigation: any
}) => (
  <CustomScreen screenName="Contact" route={route} navigation={navigation} />
)

const Tab = createBottomTabNavigator()

const Header = ({ navigation }: { navigation: any }) => (
  <SafeAreaView>
    <View style={styles.headerView}>
      <TouchableOpacity onPress={navigation.openDrawer}>
        <Feather name="menu" size={28} color="#333" />
      </TouchableOpacity>
    </View>
  </SafeAreaView>
)

export default function TabNavigator(props: {
  route: RouteProp<ParamListBase, "Drawer">
  navigation: any
}) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerBackgroundContainerStyle: styles.headerBackgroundContainerStyle,
        headerStyle: styles.headerStyle,
        headerLeftContainerStyle: styles.headerLeftContainerStyle,
        headerTransparent: true,
        headerTitle: "",
        header: (props) => <Header {...props} />,
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Contact" component={ContactScreen} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  headerView: {
    paddingHorizontal: "6%",
  },
  headerBackgroundContainerStyle: {
    height: 100,
  },
  headerStyle: {
    height: 100,
  },
  headerLeftContainerStyle: {
    padding: 10,
    backgroundColor: "red",
  },
})

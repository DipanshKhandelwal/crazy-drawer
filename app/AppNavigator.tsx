import { StyleSheet } from "react-native"
import Animated from "react-native-reanimated"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { ParamListBase, RouteProp } from "@react-navigation/native"

import CustomScreen from "./screens/CustomScreen"
import TabNavigator from "./TabNavigator"
import DrawerContent from "./components/DrawerContent"
import DrawerScreenWrapper from "./components/DrawerScreenWrapper"

const ContactScreen = ({
  route,
  navigation,
}: {
  route: RouteProp<ParamListBase, "Contact">
  navigation: any
}) => (
  <CustomScreen screenName="Contact" route={route} navigation={navigation} />
)

const Drawer = createDrawerNavigator()

export default function AppNavigator() {
  return (
    <Animated.View style={styles.container}>
      <Drawer.Navigator
        screenOptions={{
          drawerType: "back",
          overlayColor: "transparent",
          drawerStyle: styles.drawerStyles,
          drawerActiveTintColor: "#e46e70",
          drawerActiveBackgroundColor: "#e46e7055",
          drawerInactiveBackgroundColor: "transparent",
          drawerInactiveTintColor: "white",
          drawerItemStyle: styles.drawerItem,
          drawerLabelStyle: styles.drawerLabel,
          header: () => null,
          sceneStyle: styles.sceneStyle,
        }}
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen name="Drawer">
          {(props) => (
            <DrawerScreenWrapper {...props}>
              <TabNavigator {...props} />
            </DrawerScreenWrapper>
          )}
        </Drawer.Screen>
        <Drawer.Screen name="Contact">
          {(props) => (
            <DrawerScreenWrapper {...props}>
              <ContactScreen {...props} />
            </DrawerScreenWrapper>
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerStyles: {
    flex: 1,
    width: "50%",
  },
  drawerItem: {
    borderRadius: 16,
    marginVertical: 6,
  },
  drawerLabel: {
    fontSize: 20,
  },
  sceneStyle: {
    backgroundColor: "transparent",
    overflow: "visible",
  },
})

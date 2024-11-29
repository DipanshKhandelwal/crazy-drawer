import { StyleSheet, Text, View } from "react-native"
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  useDrawerProgress,
} from "@react-navigation/drawer"
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated"
import { DrawerNavigationState, ParamListBase } from "@react-navigation/native"
import {
  DrawerDescriptorMap,
  DrawerNavigationHelpers,
} from "@react-navigation/drawer/lib/typescript/commonjs/src/types"
import { TOP_SPACING } from "@/constants"

import { THEME_COLOR } from "../theme"

interface DrawerContentProps {
  state: DrawerNavigationState<ParamListBase>
  navigation: DrawerNavigationHelpers
  descriptors: DrawerDescriptorMap
}

export default function DrawerContent(props: DrawerContentProps) {
  const progress = useDrawerProgress()

  const animatedStyle = useAnimatedStyle(() => ({
    marginTop: interpolate(
      progress.value,
      [0, 1],
      [0, TOP_SPACING],
      Extrapolation.CLAMP
    ),
    borderTopLeftRadius: interpolate(
      progress.value,
      [0, 1],
      [0, 36],
      Extrapolation.CLAMP
    ),
  }))

  return (
    <Animated.View style={[styles.drawer, animatedStyle]}>
      <DrawerContentScrollView {...props}>
        <View style={styles.userNameContainer}>
          <Text style={styles.userName}>Beka</Text>
        </View>
        <View style={styles.drawerListContainer}>
          <DrawerItemList {...props} />
        </View>
        <View style={styles.separator} />
        <View style={styles.signOutContainer}>
          <DrawerItem
            label="Sign Out"
            labelStyle={styles.drawerLabel}
            onPress={() => props.navigation.toggleDrawer()}
          />
        </View>
      </DrawerContentScrollView>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: THEME_COLOR,
    flex: 1,
    paddingLeft: 16,
    paddingRight: "100%",
    width: "200%",
  },
  userNameContainer: {
    marginTop: "20%",
    marginBottom: "18%",
    justifyContent: "center",
  },
  userName: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 28,
    color: "white",
  },
  drawerListContainer: {
    marginVertical: "10%",
  },
  separator: {
    height: 1,
    backgroundColor: "#fff8",
    width: "100%",
    marginVertical: "22%",
  },
  signOutContainer: {
    flex: 1,
  },
  drawerLabel: {
    color: "white",
    fontSize: 20,
  },
})

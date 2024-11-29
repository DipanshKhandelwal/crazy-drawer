import { StyleSheet } from "react-native"
import { useDrawerProgress } from "@react-navigation/drawer"
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated"

import { ROTATE_VAR, TOP_SPACING } from "@/constants"

interface DrawerScreenWrapperProps {
  children: React.ReactNode
}

export default function DrawerScreenWrapper({
  children,
}: DrawerScreenWrapperProps) {
  const progress = useDrawerProgress()

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${-progress.value * ROTATE_VAR}deg` }],
    borderTopLeftRadius: interpolate(
      progress.value,
      [0, 1],
      [0, 36],
      Extrapolation.CLAMP
    ),
  }))

  const containerAnimatedStyle = useAnimatedStyle(() => ({
    marginTop: interpolate(
      progress.value,
      [0, 1],
      [0, TOP_SPACING],
      Extrapolation.CLAMP
    ),
  }))

  return (
    <Animated.View style={[styles.container, containerAnimatedStyle]}>
      <Animated.View style={[styles.stack, animatedStyle]}>
        {children}
      </Animated.View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  stack: {
    flex: 1,
    backgroundColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
    overflow: "scroll",
    transformOrigin: "top right",
  },
})

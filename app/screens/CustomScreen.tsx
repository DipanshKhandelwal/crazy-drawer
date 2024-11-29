import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import { Feather } from "@expo/vector-icons"

export default function CustomScreen({ screenName = "Screen", ...props }) {
  const { navigation } = props

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.menuIcon}>
          <TouchableOpacity onPress={navigation.openDrawer}>
            <Feather name="menu" size={28} color="#333" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <Text>{screenName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  menuIcon: {
    paddingHorizontal: "6%",
  },
})

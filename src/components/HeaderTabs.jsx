import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const HeaderButton = ({ text, isActive, handlePress }) => (
  <TouchableOpacity
    onPress={() => handlePress(text)}
    style={[styles.headerButton, isActive ? styles.dark : styles.light]}
  >
    <Text style={isActive ? styles.darkText : styles.lightText}>{text}</Text>
  </TouchableOpacity>
);

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View style={styles.headerTabs}>
      <HeaderButton
        text={"Delivery"}
        isActive={activeTab === "Delivery" ? true : false}
        handlePress={setActiveTab}
      />
      <HeaderButton
        text={"Pickup"}
        isActive={activeTab === "Pickup" ? true : false}
        handlePress={setActiveTab}
      />
    </View>
  );
};

export default HeaderTabs;

const styles = StyleSheet.create({
  headerTabs: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 20,
  },
  headerButton: {
    // backgroundColor: "#0c0c0c",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 40,
  },
  headerButtonText: {
    // color: "#fff",
    fontSize: 16,
    fontWeight: "900",
  },
  dark: { backgroundColor: "#0c0c0c", color: "#fff" },
  darkText: { color: "#fff", fontSize: 15, fontWeight: "700" },
  light: { backgroundColor: "#fff", color: "#0c0c0c" },
  lightText: { color: "#0c0c0c", fontSize: 15, fontWeight: "700" },
});

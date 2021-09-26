import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Category from "../components/Category";
import HeaderTabs from "../components/HeaderTabs";
import RestaurantItem from "../components/RestaurantItem";
import SearchBar from "../components/SearchBar";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.viewHeaderContainer}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showVerticalScrollIndicator={false}>
        <Category />
        <RestaurantItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: { backgroundColor: "#eee", flex: 1 },
  viewHeaderContainer: {
    backgroundColor: "#fff",
    padding: 15,
    // justifyContent: "center",
    // alignItems: "center",
    minHeight: 160,
  },
});

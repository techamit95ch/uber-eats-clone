import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";
const RestaurantItem = () => {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      <View style={{ marginTop: 10, backgroundColor: "#fff", padding: 15 }}>
        <RestaurantImage />
        <RestaurantInfo />
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantItem;

const RestaurantImage = () => (
  <>
    <Image
      source={{
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuxyh0ZzmSq9CyEnk5aNL-wdbl4ZFAxSn1Yg&usqp=CAU",
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={styles.heartIcon}>
      <Fontisto name="heart-alt" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = () => (
  <View style={styles.infoContainer}>
    <View>
      <Text style={styles.title}>Fantastic Kitchen Cuisines</Text>
      <Text style={styles.subtitle}> 30-40 . min</Text>
    </View>
    <View style={styles.roundBar}>
      <Text style={styles.ratingText}>4.5</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  heartIcon: {
    color: "#fff",
    position: "absolute",
    right: 10,
    top: 12,
    margin: 2,
    padding: 10,
  },
  infoContainer: {
    // padding: 10,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  roundBar: {
    borderRadius: 100,
    padding: 5,
    backgroundColor: "#eee",
  },
  title: {
    fontWeight: "700",
    fontSize: 15,
    color: "#0c0c0c",
  },
  subtitle: {
    fontWeight: "400",
    fontSize: 13,
    color: "#9c9c9c",
  },
  ratingText: {
    fontWeight: "500",
    color: "#3c3c3c",
  },
});

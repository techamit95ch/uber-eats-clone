import React from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  TouchableOpacity,
} from "react-native";

const items = [
  {
    image: require("../assets/images/shopping-bag.png"),
    text: "Pick-up",
  },
  {
    image: require("../assets/images/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../assets/images/fast-food.png"),
    text: "Fast Foods",
  },
  {
    image: require("../assets/images/deals.png"),
    text: "Deals",
  },
  {
    image: require("../assets/images/coffee.png"),
    text: "Coffee & Tea",
  },
  {
    image: require("../assets/images/desserts.png"),
    text: "Desserts",
  },
];

const Category = () => {
  return (
    <View style={styles.categoryContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        showVerticalScrollIndicator={false}
        // style={{ marginHorizontal: 10 }}
      >
        <FlatList
          horizontal
          data={items}
          keyExtractor={(item, index) => index}
          renderItem={({ item, index, separators }) => (
            <TouchableOpacity
              style={[
                styles.wrapper,
                index === 0 && styles.startMargin,
                index === items.length - 1 && styles.endMargin,
              ]}
              key={index}
            >
              <>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.text}>{item.text}</Text>
              </>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    marginHorizontal: 5,
    marginVertical: 5,
  },
  image: {
    width: 50,
    height: 40,
    resizeMode: "contain",
  },
  endMargin: {
    marginRight: 10,
  },
  startMargin: {
    marginLeft: 10,
  },
  text: {
    fontSize: 13,
    fontWeight: "700",
  },
  categoryContainer: {
    paddingVertical: 5,

    backgroundColor: "#fff",
    marginTop: 5,
  },
});

import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

const SearchBar = () => {
  return (
    <View>
      <GooglePlacesAutocomplete
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
            color: "#0c0c0c",
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 40,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
            minWidth: 270,
            minHeight: 60,
            marginTop: 10,
          },
        }}
        placeholder={"Search Places"}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <TouchableOpacity style={styles.rightButton}>
            <AntDesign
              name="clockcircle"
              size={11}
              style={{ marginRight: 6 }}
            />
            <Text>Search</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rightButton: {
    flexDirection: "row",
    marginRight: 8,
    backgroundColor: "#fff",
    color: "#0c0c0c",
    padding: 9,
    borderRadius: 40,
    alignItems: "center",
  },
});
export default SearchBar;

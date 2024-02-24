// Sell.js
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import { Ionicons } from "@expo/vector-icons";

const Sell = ({ route }) => {
  const products = route.params?.products || [];
  const [quantities, setQuantities] = useState(0);
  const increment = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 0) + 1,
    }));
  };

  const decrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max((prevQuantities[id] || 0) - 1, 0),
    }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>List of Products </Text>

      {products.length === 0 ? (
        <Text style={{ textAlign: "center", marginTop: responsiveHeight(30), fontSize: responsiveFontSize(3) }}>No records....</Text>
      ) : (
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <View style={{ borderRadius: 10, borderWidth: 1, padding: 10, marginTop: 10 }}>
              <Text style={styles.prod_head}>{item.name} </Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.prdo_price}>Price: </Text>
                <Text>${item.price}</Text>
              </View>
              <Text style={{ fontWeight: "bold" }}>Description:</Text>
              <Text> {item.des}</Text>
              <Text style={{ fontWeight: "bold" }}>Category:</Text>
              <Text> {item.cat}</Text>
              <Text style={{ fontWeight: "bold" }}>Quantity:</Text>
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Ionicons name="add-outline" size={15} color="blue" onPress={() => increment(item.id)} />
                <Text style={{ marginLeft: 20, marginRight: 20 }}> {quantities[item.id] || 0}</Text>
                <Ionicons name="remove-outline" size={15} color="blue" onPress={() => decrement(item.id)} />
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <TouchableOpacity
                  style={styles.butt}
                  onPress={() => Alert.alert('Quantity', `You are buying ${quantities[item.id] || 0} items`)}
                >
                  <Text style={{ textAlign: "center", marginTop: 5, color: "white" }}>
                    Buy it now
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.butt}
                  onPress={() => Alert.alert(` ${quantities[item.id] || 0} items have been added to your cart`)}
                >
                  <Text style={{ textAlign: "center", marginTop: 5, color: "white" }}>
                    Add to Cart
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },
  butt:{
    height:30,
    width:80,
    backgroundColor:"blue",
    marginTop:10,
    borderRadius:25,
    borderStyle:1
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: "center"
  },
  prod_head: {
    fontSize: responsiveFontSize(3),
    fontWeight: "bold"
  },
  prdo_price: {
    fontWeight: "bold"
  },
});

export default Sell;
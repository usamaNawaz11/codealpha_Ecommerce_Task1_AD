// Home.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';

const Home = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productdescription, setProductdescription] = useState('');
  const [productcate, setProductcate] = useState('');
  const [productuant, setProductuant] = useState('');

  const addProduct = () => {
    if (!productName || !productPrice) {
      alert('Please enter product detail');
      return;
    }

    const newProduct = {
      id: String(products.length + 1),
      name: productName,
      price: productPrice,
      des: productdescription,
      cat: productcate,
      quantity:productuant,
    };

    setProducts([...products, newProduct]);
    setProductName('');
    setProductPrice('');
    setProductdescription('');
    setProductcate('');
    setProductuant('')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Product</Text>
      <View style={styles.input_box}>
        <Text style={{ fontSize: 15 }}>Enter product name</Text>
        <TextInput
          style={styles.input}
          placeholder="Product Name"
          value={productName}
          onChangeText={setProductName}
        />
        <Text style={{ fontSize: 15 }}>Enter product Description</Text>
        <TextInput
          style={styles.input}
          placeholder="Product description"
          value={productdescription}
          onChangeText={setProductdescription}
        />
        <Text style={{ fontSize: 15 }}>Enter product price</Text>

        <TextInput
          style={styles.input2}
          placeholder="Product Price"
          value={productPrice}
          onChangeText={setProductPrice}
          keyboardType="numeric"
        />
        <Text style={{ fontSize: 15 }}>Enter product Category</Text>
        <TextInput
          style={styles.input}
          placeholder="Product category"
          value={productcate}
          onChangeText={setProductcate}
        />
        <Text style={{ fontSize: 15 }}>Enter product quantity</Text>
        <TextInput
          style={styles.input}
          placeholder="Product quantity"
          value={productuant}
          onChangeText={setProductuant}
        />
      </View>
      <View style={styles.button_View}>
        <View style={styles.but}>
      <Button title="Add Product" color={"white"} onPress={addProduct} />
      </View>
      <View style={styles.but}>
      <Button
        title="View Products"
        color={"white"}
        onPress={() => navigation.navigate('sell', { products })}
      />
      </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: "center",
    marginTop: responsiveHeight(4)
  },
  but:{
    borderWidth: 1,
    padding: 5,
    marginBottom: 10,
    borderRadius: 15,
    backgroundColor:"blue"
  },
  button_View:{
    marginTop:responsiveHeight(2),
    flexDirection:"row",
    justifyContent:"space-around"
  },
  input_box: {
    marginTop: responsiveHeight(5)
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 20,
    marginBottom: 10,
    borderRadius: 25,
    marginTop: 10
  },
  input2: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 20,
    marginBottom: 10,
    borderRadius: 25,
  },
});

export default Home;
import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,

    Image,
    TextInput,
    ScrollView
} from "react-native";
import { CommonActions } from '@react-navigation/native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { auth } from "../Firebase/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
const Signin = ({navigation}) => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const sigin=()=>{
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name: 'home',
              params: { screen: 'Home' }, // Replace 'HomeScreen' with the name of your home screen
            },
          ],
        })
      );    


  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Invalid username/password");

  });
}


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <ScrollView>
                <View>
                    <Image
                        style={styles.img}
                        source={require("../assets/you.webp")}
                    >
                    </Image>
                    <Text style={styles.txt1}>Welcome Back!</Text>
                    <Text style={styles.txt2}>Login to your account</Text>
                    <Text style={styles.txt3}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={(text) => setemail(text)}
                    />
                    <Text style={styles.txt3}>Password</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        keyboardType="visible-password"
                        value={password}
                        secureTextEntry
                        onChangeText={(text) => setpassword(text)}
                    />
                    <Text style={{ fontSize: 15, marginLeft: 230 }}>
                        Forget Password?
                    </Text>
                    <TouchableOpacity
                    style={styles.butt}
                        onPress={sigin }>
                        <Text style={styles.txt4}>Login</Text>
                    </TouchableOpacity>
                    <StatusBar style="auto" />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>



    )

}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        padding: 16

    },
    img: {
        height: 100,
        width: 100,
        alignSelf: "center",
        marginTop: 200
    },
    txt1: {
        fontSize: 40,
        fontWeight: "bold",
        marginTop: 50,
        textAlign: "center"
    },
    txt2: {
        fontSize: 25,
        textAlign: "center"
    },
    txt3: {
        fontSize: 17,
        marginTop: 30,
        marginLeft: 44
    },
    input: {
        height: responsiveHeight(5),
        width: responsiveWidth(80),
        fontSize: responsiveFontSize(2),
        alignSelf: "center",
        borderWidth: 1,
        borderRadius: 30,
        borderStyle: "solid",
        paddingLeft: 10

    },
    butt:{
        height:responsiveHeight(6),
        width:responsiveWidth(50),
        backgroundColor:"blue",
        alignSelf:"center",
        marginTop:670,
        position:"absolute",
        borderRadius:30
    },
    txt4:{
        fontSize:responsiveFontSize(2.8),
        textAlign:"center",
        color:"white",
        marginTop:15
    }

})
export default Signin;
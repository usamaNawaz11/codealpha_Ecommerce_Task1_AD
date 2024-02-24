import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    TextInput


} from "react-native";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { auth } from "../Firebase/firebase.config";
import Icon from 'react-native-vector-icons/FontAwesome5'; // You can import different icon sets
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = ({ navigation }) => {
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const Signin = () => {

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                alert("Congratulations! Your account has been created");
                console.log("Navigating to signin screen.");
                navigation.replace("signin");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert("username already exit");
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
                    <Text style={styles.txt1}>Welcome!</Text>
                    <Text style={styles.txt3}>Username</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        keyboardType="default"
                        value={username}
                        onChangeText={(text) => setusername(text)}
                    />
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
                    <TouchableOpacity
                        style={styles.butt}
                        onPress={Signin}>
                        <Text style={styles.txt4}>Signup</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("signin")
                        }}>
                        <Text style={styles.txt5}>Already have an account?</Text>
                    </TouchableOpacity>
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
        marginTop: responsiveHeight(15),
        backgroundColor:"black"
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
    butt: {
        height: responsiveHeight(6),
        width: responsiveWidth(50),
        backgroundColor: "blue",
        alignSelf: "center",
        marginTop: 670,
        position: "absolute",
        borderRadius: 30
    },
    txt4: {
        fontSize: responsiveFontSize(2.8),
        textAlign: "center",
        color: "white",
        marginTop: 15
    },
    txt5: {
        fontSize: responsiveFontSize(2),
        marginTop: 7,
        alignSelf: "center",
    }



})
export default Signup;
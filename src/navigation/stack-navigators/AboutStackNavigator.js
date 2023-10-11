import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {Platform, StyleSheet, Text, TouchableOpacity, View} from "react-native";
// import {FontAwesome, Ionicons} from "@expo/vector-icons";
import AboutScreen from "../../screens/AboutScreen";

const Stack = createStackNavigator();


const AboutStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={({navigation, route}) => ({
            headerShown: true,
            headerTintColor: '#ffffff',
            headerStyle: {
                backgroundColor: '#551E18',
                height: 50
            },
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerLeft}>
                    {/* <Ionicons name="arrow-back-outline" size={25} color="#fff" style={{padding: 5}}/> */}
                    <Text>Hello</Text>
                </TouchableOpacity>
            ),
            headerRight: () => (
                <View style={styles.headerRight}>
                    <View style={styles.headerContent}>
                        <Text style={styles.headerSearchIcon}>
                            <TouchableOpacity onPress={() => navigation.navigate('SearchStack')}
                                style={styles.touchableButton}>
                                {/* <FontAwesome name="search" size={20} color="#fff"/> */}
                                <Text>Hello</Text>
                            </TouchableOpacity>
                        </Text>
                        <Text style={styles.headerSearchIcon}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('UserProfileStack')}
                                style={styles.touchableButton}>
                                {/* <FontAwesome name="user" size={20} color="#fff"/> */}
                                <Text>Hello</Text>
                            </TouchableOpacity>
                        </Text>
                    </View>
                </View>
            ),
        })}>
            <Stack.Screen
                name="About"
                component={AboutScreen}
                // Custom title
                options={{
                    title: "About Us",
                    headerTitleAlign: 'left',
                }}
            />
        </Stack.Navigator>
    )
};


const styles = StyleSheet.create({
    headerLeft: {
        marginLeft: 10,
    },
    // User Icon & Search
    headerRight: {
        marginRight: 15,
    },
    headerContent: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    headerSearchIcon: {
        marginLeft: 20,
    },
    headerUserIcon: {
        marginLeft: 20
    },
    touchableButton: {
        backgroundColor: "#551E18",
        overflow: "hidden",
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 3,
        padding: 3,
        borderRadius: 50
    },
    headerImage: {
        ...Platform.select({
            ios: {
                width: 150,
                height: 20,
            },
            android: {
                width: 150,
                height: 20,
            }
        })
    },

});


export default AboutStackNavigator
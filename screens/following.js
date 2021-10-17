import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, ScrollView, View, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import { ScreenStackHeaderRightView } from 'react-native-screens';
import Header from '../components/threadHeader';
import { auth, getEvent, getChat, getFollowedEvent, addMessage } from '../config/firebase'


const Following = () => {

    const [currentChat, setCurrentChat] = useState('');

    const navigation = useNavigation();

    const toProfile = () => {
        navigation.replace("Profile")
    }

    const toFeed = () => {
        navigation.replace("Feed")
    }

    const sendChat = () => {
        addMessage(currentChat, getFollowedEvent())
        console.log("I pushed the button")
    }

    let chat = getChat(getFollowedEvent())
                

    return (
        <KeyboardAvoidingView 
        style={[styles.page, styles.lightBlueBackground]}
        behavior="padding"
        >

            <Header toProfile={toFeed} toFollowing={toFeed} Title="Following"/>

            <ScrollView style={{height: 100}}>
                {
                    chat.slice(0).reverse().map((event, index) => {
                        if (event.Author == auth.currentUser?.email) {
                            return (
                                <View key={index} style={styles.myMessage}>
                                    <Text style={{color: '#ffffff'}}>{event.Author} : {event.Content}{event.text}</Text>
                                </View>
                            )
                        }
                        return (
                            <View key={index} style={styles.message}>
                                <Text>{event.Author} : {event.Content}{event.text}</Text>
                            </View>
                        );
                    })
                }
            </ScrollView>
            <View style={[{backgroundColor: '#889FC0', width: '100%'}, styles.centerContent]}>
                <View style={{backgroundColor: 'white', padding: 10, marginTop: 15, borderRadius: 10, width: '90%'}}>
                <TextInput placeholder="Type your message here..." style={{}}
                value={currentChat} 
                onChangeText={text => setCurrentChat(text)}
                style={styles.input}>
                    
                </TextInput>
                </View>
                <TouchableOpacity
                    onPress = {sendChat}
                    style={[styles.button, styles.centerContent]}
                >
                    <Text>Send</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Following

const styles = StyleSheet.create({
    centerContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    page: {
        flex: 1,
        alignItems: 'center',
    },
    logoutButton: {
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 15,
        borderRadius: 10,
    },
    feedButton: {
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 15,
        borderRadius: 10,
    },
    spacing: {
        marginBottom: 15,
    },
    maroonBackground: {
        backgroundColor: "#8C2B3D"
    },
    maroonColor: {
        color: "#8C2B3D"
    },
    pinkBackground: {
        backgroundColor: "#F272B8"
    },
    pinkColor: {
        color: "#F272B8"
    },
    lightBlueBackground: {
        backgroundColor: "#85E7F2"
    },
    lightBlueColor: {
        color: "#85E7F2"
    },
    blueBackground: {
        backgroundColor: "#5FCDD9"
    },
    blueColor: {
        color: "#5FCDD9"
    },
    darkBlueBackground: {
        backgroundColor: "#037F8C"
    },
    darkBlueColor: {
        color: "#037F8C"
    },
    message: {
        marginTop: 15,
        alignContent: 'flex-start',
        backgroundColor: '#037F8C',
        width: '95%',
        padding: 15,
        borderRadius: 10,
    },
    myMessage: {
        marginTop: 15,
        alignItems: 'flex-end',
        backgroundColor: '#8C2B3D',
        padding: 15,
        borderRadius: 10,
    },
    button: {
        backgroundColor: '#F272B8',
        width: '20%',
        padding: 15,
        borderRadius: 10,
        marginTop: 18,
        marginBottom: 22
    },
})

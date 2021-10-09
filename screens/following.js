import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Following = () => {

    const navigation = useNavigation();

    const toProfile = () => {
        navigation.replace("Profile")
    }

    return (
        <View style={[styles.page, styles.centerContent]}>
            <TouchableOpacity 
            style={[styles.centerContent, styles.feedButton, styles.spacing]} 
            onPress={toProfile}
            >
                <Text>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={[styles.centerContent, styles.feedButton, styles.spacing]} 
            onPress={() => {alert('This button still does nothing.')}}
            >
                <Text>Feed</Text>
            </TouchableOpacity>
        </View>
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
        backgroundColor: 'gray',
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
    }
})
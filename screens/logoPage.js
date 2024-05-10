import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function LogoPage() {
    return (
        <View style={styles.container}>
        <View style={styles.logoSection}>
            <Text style={styles.namaAplikasi}>TEMENIN</Text>
            <Image style={styles.logoTemenin} source={require('./assets/logo-temenin.png')}/>
            <Text style={styles.logoSectionText}>Find peace, be mindful, spread love, and strive to understand others. Look for what brings us together rather than what sets us apart. </Text>
        </View>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Mulai</Text>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#283C57',
        alignItems: 'center',
        justifyContent: 'center',
    },
    namaAplikasi: {
        color: '#FAF9F6',
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 42,
    },
    textWhite: {
        color: '#FAF9F6',
    },
    button: {
        backgroundColor: '#FAF9F6',
        height: 60,
        width: 380,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#283C57',
        fontSize: 23.5,
        fontWeight: 'bold',
    },
    logoSection: {
        margin: 120,
        flexDirection: 'column',
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoTemenin: {
        width: 180,
        height: 150,
        marginBottom: 55,
    },
    logoSectionText: {
        color: '#FAF9F6',
        fontSize: 14,
        textAlign: 'center',
    }
})
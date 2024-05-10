import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function LoginPage() {
    return(
        <View>
            <Text>Selamat Datang!</Text>
            <Text>Silahkan login terlebih dahulu</Text>
            <View>
                <View>
                    <View>
                        <View>
                            <Text>Email</Text>
                            <TextInput/>
                        </View>
                        <View>
                            <Text>Email</Text>
                            <TextInput/>
                        </View>
                    </View>
                </View>
                <View>

                </View>
                <View>

                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({

})
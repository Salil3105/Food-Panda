import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {
    View,
    Text,
} from 'react-native'

export default function SearchBar() {
    return (
        <View style={{ marginTop: 0.9, flexDirection: 'row' }}>
            {/* 
                For Referance 
                https://www.npmjs.com/package/react-native-google-places-autocomplete 
            */}
            <GooglePlacesAutocomplete

                placeholder='Search '
                styles={{
                    textInput: {
                        backgroundColor: '#eee',
                        borderRadius: 20,
                        fontWeight: '700',
                        marginTop: 7,
                    },
                    textInputContainer: {
                        backgroundColor: '#eee',
                        borderRadius: 50,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginRight: 10,

                    },
                }}
                renderLeftButton={() => (
                    <View style={{ marginLeft: 10, }}>
                        <Ionicons name='location-sharp' size={24} />
                    </View>
                )}
                renderRightButton={() => (
                    <View style={{
                        marginRight: 10,
                        flexDirection: 'row',
                        backgroundColor: 'white',
                        padding: 9,
                        borderRadius: 30,
                        alignItems: 'center',
                    }}>
                        <AntDesign
                            name='clockcircle'
                            size={11}
                            style={{ marginRight: 6 }}
                        />
                        <Text>Search</Text>
                    </View>
                )}
            />
        </View>
    );
}
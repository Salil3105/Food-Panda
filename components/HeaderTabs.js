import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native'
import { View, Text, TouchableOpacity } from 'react-native'

export default function HeaderTabs() {

    const [activeTab, setActiveTab] = useState("Delivery");
    return (
    <SafeAreaView style={{
        flexDirection:'row',
        alignSelf: 'center',
    }}>
        <HeaderButton 
            text="Delivery" 
            btnColor="black" 
            textColor="white" 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
        />
        <HeaderButton 
            text="Pickup" 
            btnColor="white" 
            textColor="black" 
            activeTab={activeTab} 
            setActiveTab={setActiveTab}
        />
    </SafeAreaView>
    );
}

const HeaderButton = (props) => (
    <TouchableOpacity 
        style={{
            backgroundColor: props.activeTab === props.text ? "black" : "white",
            paddingVertical: 5,
            marginVertical:30,
            paddingHorizontal:16,
            borderRadius: 30,
        }}
        onPress={() => {props.setActiveTab(props.text)}}
    >
        <Text style={{
            color: props.activeTab === props.text ? 'white' : "black",
            fontSize: 19,
            fontWeight: "900",    
        }}>{props.text} </Text>
    </TouchableOpacity>
);

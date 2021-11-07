import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const localRestaurants = [
    {
        name: "BeachSide Bar",
        image_url: "https://i.pinimg.com/474x/8d/3e/40/8d3e408a28ce796ec66df4d302f21e0b--swinging-chair-beach-bars.jpg",
        categories:["Cafe","Bar"],
        price: "$$",
        reviews:1244,
        rating: 4.5,
    },
    {
        name: "Benihana",
        image_url: "https://c8.alamy.com/comp/EJ48XE/beachside-barrestaurant-in-eressos-in-lesbos-greece-EJ48XE.jpg",
        categories:["Cafe","Bar"],
        price: "$$",
        reviews:1244,
        rating: 4.5,
    },
    {
        name: "Barefoot’s Beachside Bar & Grill",
        image_url: "https://30a.com/wp-content/uploads/2017/06/1493323378-Barefoots2017_copy_desktop-1024x683.jpg",
        categories:["Cafe","Bar"],
        price: "$$",
        reviews:1244,
        rating: 4.5,
    },
    {
        name: "Tropical Beach Side Bar",
        image_url: "https://ak.picdn.net/shutterstock/videos/6932410/thumb/1.jpg",
        categories:["Cafe","Bar"],
        price: "$$",
        reviews:1244,
        rating: 4.5,
    },
]

export default function RestaurentItems( props ) {
    return (
            <>
                <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30,}}>
                    { props.restaurantData.map((restaurent,index)=>(
                        <View key={index} style={{
                            backgroundColor: 'white',
                            padding: 15,
                            marginTop: 10,
                        }}>
                            {/* Restaurent Image */}
                            <RestaurentImage image={restaurent.image_url} />
                            {/* Restaurent Info */}
                            <RestaurentInfo 
                                name={restaurent.name} 
                                rating={restaurent.rating} 
                            />
                        </View>
                    ))}
                </TouchableOpacity>
            </>
    );
}

const RestaurentImage = (props) => (
    <>
        <Image source={{
                    uri: props.image
            }}
            style={{width:"100%" , height:180}}
        />
        <TouchableOpacity style={{position:'absolute' , right:20, top:20}}>
            <MaterialCommunityIcons name='heart-outline' size={25} color="#fff" />
        </TouchableOpacity>
    </>
);

const RestaurentInfo = (props) => (
    <View style={{
            flexDirection:'row', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginTop: 10,

        }}>
        <View>
            <Text style={{ fontSize:15, fontWeight:'bold' }}>{props.name}</Text>
            <Text style={{fontSize:13, color:'gray'}} >30-45 min </Text>
        </View>
        <View style={{
                backgroundColor: "#eee",
                height:30,
                width: 30,
                alignItems:'center',
                justifyContent: 'center',
                borderRadius:15,

            }}>
            <Text>{props.rating}</Text>
        </View>
    </View>
);
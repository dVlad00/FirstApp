import React, { useState, useRef } from "react"
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native"
import styles from "./styles/defaultScreenStyles"
import Carousel, { Pagination } from 'react-native-snap-carousel';




const DefaultScreen = ({ navigation }) => {
    const [index, setIndex] = useState(0)
    const windowWidth = Dimensions.get('window').width;
    const ref = useRef(null)

    const img = [
        {
            id: 1,
            title: "Hello Lorem ipsum dolor sit amet, consectetur adipiscing elit.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa  ",
            img: require("../img/photo.png")
        }, {
            id: 2,
            title: "Hello2",
            img: require("../img/photo.png")
        }, {
            id: 3,
            title: "Hello3",
            img: require("../img/photo.png")
        }, {
            id: 4,
            title: "Hello4",
            img: require("../img/photo.png")
        }
    ]
    const renderItem = ({ item, index }) => {
        return <View style={styles.renderView}>
            <Image style={styles.img} resizeMode="contain" source={item.img} />
            <Text style={styles.textView}>{item.title}</Text>

        </View>
    }

    return <View style={styles.allScreenView}>
        {/* <View style={styles.space}></View> */}
        <View style={styles.carrouselView}>
            <Carousel
                contentContainerStyle={styles.carrousell}
                style={styles.carrousel}
                ref={ref}
                data={img}
                renderItem={renderItem}
                sliderWidth={windowWidth}
                itemWidth={windowWidth}
                onSnapToItem={index => setIndex(index)}
            ></Carousel>
            <Pagination
                dotsLength={img.length}
                activeDotIndex={index}
                carouselRef={ref}
                dotStyle={{
                    width: 14,
                    height: 14,
                    borderRadius: 10,
                    marginHorizontal: 2,
                    backgroundColor: 'blue',
                }}
                containerStyle={{
                    justifyContent: "space-evenly",
                    marginHorizontal: 0.3 * windowWidth
                }}
                tappableDots={true}
                inactiveDotStyle={{
                    backgroundColor: 'black',
                    marginHorizontal: 2
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        </View>
        <View style={styles.inisdeRenderView}>
            {index === 3
                ? <View style={styles.buttonsView}>
                    <View style={styles.viewSignIn}>
                        <TouchableOpacity style={styles.SignIn} onPress={() => navigation.navigate("LogIn")}>
                            <Text style={styles.Text}> Sign In</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewSignUp}>
                        <TouchableOpacity style={styles.SignUp} onPress={() => navigation.navigate("SignUp")}>
                            <Text style={styles.Text}> Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                : null}
        </View>

    </View>
}



export default DefaultScreen


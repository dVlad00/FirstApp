import React, { useState, useRef } from "react"
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel';
import images from "../themes/images";
import strings from "../themes/strings";
import styles from "./styles/defaultScreenStyles"

const img = [
    {
        id: 1,
        title: "Hello Lorem ipsum dolor sit amet, consectetur adipiscing elit.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa  ",
        img: images.people
    }, {
        id: 2,
        title: "Hello2",
        img: images.people
    }, {
        id: 3,
        title: "Hello3",
        img: images.people
    }, {
        id: 4,
        title: "Hello4",
        img: images.people
    }
]

const DefaultScreen = ({ navigation }) => {
    const [index, setIndex] = useState(0)
    const WindowWidth = Dimensions.get('window').width;
    const ref = useRef(null)

    const toLogIn = () => {
        navigation.navigate("LogIn")
    }
    const toSignUp = () => {
        navigation.navigate("SignUp")
    }

    const renderItem = ({ item }) => {
        return <View style={styles.renderView}>
            <Image style={styles.img} resizeMode="contain" source={item.img} />
            <Text style={styles.textView}>{item.title}</Text>

        </View>
    }

    return <View style={styles.allScreenView}>
        <View style={styles.carrouselView}>
            <Carousel
                contentContainerStyle={styles.carrousell}
                style={styles.carrousel}
                ref={ref}
                data={img}
                renderItem={renderItem}
                sliderWidth={WindowWidth}
                itemWidth={WindowWidth}
                onSnapToItem={index => setIndex(index)}
            />
            <Pagination
                dotsLength={img.length}
                activeDotIndex={index}
                carouselRef={ref}
                dotStyle={styles.dotStyle}
                containerStyle={styles.dotContainer}
                tappableDots={true}
                inactiveDotStyle={styles.inactiveDot}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        </View>
        <View style={styles.inisdeRenderView}>
            {index === 3
                ? <View style={styles.buttonsView}>
                    <View style={styles.viewSignIn}>
                        <TouchableOpacity style={styles.SignIn} onPress={toLogIn}>
                            <Text style={styles.Text}> {strings.defaultScreen.SignIn}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewSignUp}>
                        <TouchableOpacity style={styles.SignUp} onPress={toSignUp}>
                            <Text style={styles.Text}> {strings.defaultScreen.SignUp}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                : null}
        </View>

    </View>
}


export default DefaultScreen


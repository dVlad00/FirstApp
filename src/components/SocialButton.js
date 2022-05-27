import React from "react";
import { Image, TouchableOpacity } from "react-native";


const SocialMediaButton = ({ imgSource }) => {
    return <TouchableOpacity>
        <Image source={imgSource} />
    </TouchableOpacity>
}

export default SocialMediaButton
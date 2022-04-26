import React from "react";
import { Image,TouchableOpacity } from "react-native";


const SocialMediaButton =({imgSource})=>{
    return <TouchableOpacity>
        <Image
        source={imgSource}></Image>
    </TouchableOpacity>
}

export default SocialMediaButton
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height
const spaceLeft = 20
const imgSize = screenHeight * 0.19
export { screenHeight, screenWidth, spaceLeft, imgSize }
import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const spaceLeft = 20

const styles = StyleSheet.create({
    //Big Daddy
    mainView: {
        flex: 1,
        paddingLeft: spaceLeft,
        backgroundColor: "white"
    },
    // Main View`s //
    NotificationsViewButtons: {
        flex: 0.2,
        backgroundColor: "white",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "flex-end",
        paddingRight: spaceLeft,
        marginTop:12
    },
    welcomeView: {
        flex: 0.5,
        backgroundColor: "white",
        marginTop: 15
    },
    investNowView: {
        flex: 1,

        backgroundColor: "white"
    },
    BestPlanView: {
        flex: 0.3,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between", paddingRight: spaceLeft
    },
    PlansView: {
        flex: 1.3,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    NewsTitleView: {
        flex: 0.3,
        backgroundColor: "white"
    },
    NewsView: {
        flex: 1,
        backgroundColor: "white",
       
    },

    // Welcome Text//
    welcomeText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "black"
    },
    // Invest Now // 
    investNow: {
        flex: 1,
        backgroundColor: "transparent",
        marginHorizontal: 30,
        borderRadius: 20
    },
    lineGradtient: {
        flex: 0.9,
        marginRight: spaceLeft,
        borderRadius: 20,
        justifyContent: "space-evenly",
        paddingHorizontal: 30
    },
    portofolioText: {
        color: "white",
        fontSize: 15
    },
    moneyStyle: {
        color: "white",
        fontSize: 30
    },
    investButtton: {
        backgroundColor: "white",
        borderRadius: 10,
        justifyContent: "center",
        width: windowWidth * 0.3
    },
    investAndMoney: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    buttonText: {
        color: "black",
        alignSelf: "center"
    },
    // Plans Text //
    Text1: {
        fontSize: 20,
        color: "black",
        fontWeight: "bold"
    },
    Text2: {
        color: "red"
    }
    // Investment Title // 
    
})

export default styles
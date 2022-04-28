import React from "react"
import { Text, View, TouchableOpacity, Dimensions, FlatList } from "react-native"
import styles from "./styles/defaultTabScreen"
import Icon from 'react-native-vector-icons/FontAwesome'
import LinearGradient from "react-native-linear-gradient"
import Card from "../components/Cards"
import News from "../components/News"
import images from "../themes/images"
import strings from "../themes/strings"
import { connect } from "react-redux";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const data = [
    {
        id: 1,
        path: images.gold,
        firstText: "Gold",
        secondText: "30% return"
    },
    {
        id: 2,
        path: images.silver,
        firstText: "Gold",
        secondText: "30% return"
    },
    {
        id: 3,
        path: images.purple,
        firstText: "Platinum",
        secondText: "90% return"
    }
]

const DefaultTabScreen = ({ user }) => {
    return <View style={styles.mainView}>
        <View style={styles.NotificationsViewButtons}>
            <Icon name="bars" size={15} color="black" />
            <Icon name="bell" size={15} color="black" />
        </View>
        <View style={styles.welcomeView}>
            <Text style={styles.welcomeText}> Welcome, {user === null ? "" : user.name}</Text>
        </View>
        <View style={styles.investNowView} >
            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                colors={["#31A078", "#31A05F", "#54b87d"]}
                style={styles.lineGradtient}>
                <View>
                    <Text style={styles.portofolioText}>{strings.defaultTabScreen.portofolioText}</Text>
                </View>
                <View style={styles.investAndMoney}>
                    <Text style={styles.moneyStyle}> {strings.defaultTabScreen.money}</Text>
                    <TouchableOpacity style={styles.investButtton}>
                        <Text style={styles.buttonText}>{strings.defaultTabScreen.buttonText}</Text></TouchableOpacity>
                </View>
            </LinearGradient>
        </View>
        <View style={styles.BestPlanView}>
            <Text style={styles.Text1}>{strings.defaultTabScreen.Plan}</Text>
            <Text style={styles.Text2}>{strings.defaultTabScreen.SeeAll}</Text>
        </View>
        <View style={styles.PlansView}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={data}
                renderItem={({ item }) =>
                    <Card
                        path={item.path}
                        firstText={item.firstText}
                        secondText={item.secondText}
                    ></Card>}
                keyExtractor={(item) => item.id}></FlatList>

        </View>
        <View style={styles.NewsTitleView}>
            <Text style={styles.Text1}>{strings.defaultTabScreen.Invest}</Text>
        </View>
        <View style={styles.NewsView}>
            <News
                NewsTitle={"Basic type pf investments"}
                NewsContent={"This is how you set your foot for 2020. Stock market recession.What`s next..."}
                imgPath={images.elipse1}
            ></News>
            <News
                NewsTitle={"Basic type pf investments"}
                NewsContent={"This is how you set your foot for 2020. Stock market recession.What`s next..."}
                imgPath={images.elipse}
            ></News>
        </View>
    </View>
}

const mapStateToProps = (state) => {
    const { user } = state.loginReducer;

    return { user };
}


export default connect(mapStateToProps)(DefaultTabScreen)
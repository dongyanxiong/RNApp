import React from 'react';
import {
    StyleSheet,
    Image,
    Text,
    Linking,
    View,
    Dimensions,
    Animated,
    Easing,
    ScrollView,
    PanResponder,
    ActivityIndicator,
    TouchableOpacity,
    StatusBar,
    Platform,
    NativeModules,
    ImageBackground,
    InteractionManager,
    TouchableHighlight,
} from 'react-native';
import BaseComponent from '../base/BasePage'
export default class Register extends BaseComponent {
    static navigationOptions = {
        header:({navigation}) =>{
            return null;
        }
    };
    constructor(props){
        super(props);
        this.state = {
            ...this.BaseState,
        }
    }

    componentDidMount(){
        super.componentDidMount();
        this.props.navigation.setParams({login:this.goToLogin})
    }


    goToPage = ()=>{
        this.props.navigation.navigate('Page3');
    }
    renderPage(){
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{
                    width:WIDTH-SCALE(40)-SCALE(40),
                    alignItems: 'center',
                    justifyContent:'center',
                    marginLeft:SCALE(40),
                    marginRight:SCALE(40),
                    marginTop:SCALE(100),}} activeOpacity={0.7} onPress={this.goToPage}>
                    <View style={{
                        width:WIDTH-SCALE(40)-SCALE(40),
                        borderRadius:24,
                        height:SCALE(96),
                        justifyContent:'center',
                        alignItems:'center',
                        backgroundColor:'#0094ff'
                    }}>
                        <Text style={{fontSize:FONT(39/2),backgroundColor:'transparent',textAlign:'center'}}>这是第二页</Text>

                        <Text style={{fontSize:FONT(39/2),backgroundColor:'transparent',textAlign:'center'}}>跳转到Page3</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        width:257,
        height:255,
        marginTop:SCALE(50)
    }
});


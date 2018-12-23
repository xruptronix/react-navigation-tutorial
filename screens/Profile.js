import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import ContactThumbnail from '../components/ContactThumbnail';
import DetailListItem from '../components/DetailListItem';

import {fetchRandomContact} from '../utils/api';

import colors from '../utils/colors';

export default class Profile extends Component {
    // state = {
    //     contact: {}
    // };

    // async componentDidMount(){
    //     const contact = await fetchRandomContact();
    //     this.setState({
    //         contact
    //     });
    // }

    static navigationOptions = ({navigation: {state:{params}}}) => {
        const {contact:{name}} = params;
        return {
            title: name.split(' ')[0],
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: colors.blue
            }

        }
    }

    render(){
        // const {
        //     avatar,name,email,phone,cell
        // } = this.state.contact;

        const {params} = this.props.navigation.state;
        const {contact} = params;
        const {
            avatar,name,email,phone,cell
        } = contact;


        return (
            <View style={styles.container}>
                <View style={styles.avatarSection}>
                    <ContactThumbnail avatar={avatar} name={name} phone={phone} />
                </View>
                <View style={styles.detailSection}>
                    <DetailListItem icon='mail' title='Email' subtitle={email} />
                    <DetailListItem icon='phone' title='Work' subtitle={phone} />
                    <DetailListItem icon='smartphone' title='Personal' subtitle={cell} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    avatarSection:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:colors.blue
    },
    detailSection:{
        flex:1,
        backgroundColor:'white'
    }
});
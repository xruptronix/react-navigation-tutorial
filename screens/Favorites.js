import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ActivityIndicator
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { fetchContacts } from '../utils/api';
import colors from '../utils/colors';
import ContactThumbnail from '../components/ContactThumbnail';
const keyExtractor = ({phone}) => phone;
export default class Favorites extends Component {
    // static navigationOptions = {
    //     title: 'Favorites'
    // }

    static navigationOptions = ({navigation}) => ({
        title: 'Favorites',
        headerLeft: (
            <MaterialIcons 
                name='menu'
                size={24}
                style={{color:colors.black, marginLeft:10}}
                onPress={()=>navigation.toggleDrawer()}
            />
        )
    })

    state = {
        contacts: [],
        loading: true,
        error: false
    };

    async componentDidMount(){
        try {
            const contacts = await fetchContacts();

            this.setState({
                contacts,
                loading: false,
                error:false
            });
        } catch(e) {
            this.setState({
                loading:false,
                error:true
            });
        }
    }

    renderFavoriteThumbnail = ({item}) => {
        const {navigation:{navigate}} = this.props;
        const {avatar} = item;

        return (
            <ContactThumbnail 
                avatar={avatar}
                onPress={()=> navigate('Profile',{contact:item})}
            />
        );
    }
    render(){
        const {loading, contacts, error} = this.state;
        const favorites = contacts.filter(contact => contact.favorite)

        return (
            <View style={styles.container}>
                {loading && <ActivityIndicator size='large' />}
                {error && <Text>Error...</Text>}
                {!loading &&
                    !error && (
                        <FlatList 
                            data={favorites}
                            keyExtractor={keyExtractor}
                            numColumns={3}
                            contentContainerStyle={styles.list}
                            renderItem={this.renderFavoriteThumbnail}
                        />
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        justifyContent: 'center',
        flex:1
    },
    list: {
        alignItems: 'center'
    }
});



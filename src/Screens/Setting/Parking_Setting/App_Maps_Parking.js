import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput, Image, TouchableOpacity, Alert} from 'react-native';
import HeadeSetting from '../../../components/Headers/HeadeSetting';
import {useNavigation} from '@react-navigation/native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const API_KEY = 'AIzaSyBAefhRlXEH3vCko-zZTX6PHllTR6av4WI';
const homePlace = {description: 'Home', geometry: {location: {lat: 48.8152937, lng: 2.4597668}}};
const workPlace = {description: 'Work', geometry: {location: {lat: 48.8496818, lng: 2.2940881}}};

const AppMapsParking = (props) => {
    const navigation = useNavigation();
    const title = String(props.route.params.param);
    const [latitude, setLatitude] = React.useState(21.022736);
    const [longitude, setLongitude] = React.useState(105.8018582);
    const pressHander = (data, details = null) => {
        navigation.goBack();
    };
    return (
        <View style={styles.container}>
            <HeadeSetting header_title={title}/>
            {/*<View style={{height:60, width:'100%'}}>*/}
            <GooglePlacesAutocomplete
                placeholder='Search'
                minLength={2} // minimum length of text to search
                autoFocus
                returnKeyType="search" // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                keyboardAppearance='light' // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
                listViewDisplayed='auto' // true/false/undefined
                fetchDetails
                renderDescription={row => row.description} // custom description render
                onPress={pressHander}

                getDefaultValue={() => ''}

                query={{
                    // available options: https://developers.google.com/places/web-service/autocomplete
                    key: API_KEY,
                    language: 'en', // language of the results
                }}

                styles={{
                    textInputContainer: {
                        width: '100%'
                    },
                    description: {
                        fontWeight: 'bold'
                    },
                    predefinedPlacesDescription: {
                        color: '#1faadb'
                    }
                }}

                nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                GoogleReverseGeocodingQuery={{
                    // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                }}
                GooglePlacesSearchQuery={{
                    // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                    rankby: 'distance',
                    type: 'cafe'
                }}

                GooglePlacesDetailsQuery={{
                    // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
                    fields: 'formatted_address,geometry',
                }}

                filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities

                debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
                // eslint-disable-next-line react/jsx-one-expression-per-line
            />
            {/*</View>*/}
            {/*<MapView*/}
            {/*    style={styles.map}*/}
            {/*    provider={PROVIDER_GOOGLE}*/}
            {/*    zoomEnabled={true}*/}
            {/*    minZoomLevel={5}*/}
            {/*    maxZoomLevel={20}*/}
            {/*    showsMyLocationButton={true}*/}
            {/*    showsUserLocation={true}*/}
            {/*    initialRegion={{*/}
            {/*        latitude: latitude,*/}
            {/*        longitude: longitude,*/}
            {/*        latitudeDelta: 0.015,*/}
            {/*        longitudeDelta: 0.0121,*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <Marker*/}
            {/*        draggable*/}
            {/*        coordinate={{*/}
            {/*            latitude: latitude,*/}
            {/*            longitude: longitude,*/}
            {/*        }}*/}
            {/*        onDragEnd={*/}
            {/*            (e) => alert(JSON.stringify(e.nativeEvent.coordinate))*/}
            {/*        }*/}
            {/*        title={'Test Marker'}*/}
            {/*        description={'This is a description of the marker'}*/}
            {/*    />*/}
            {/*</MapView>*/}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        height: 600,
        width: '100%',
    },
});

export default AppMapsParking;

import React, {Component, useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Image,Picker,
    TouchableOpacity, TextInput, FlatList,
} from 'react-native';
import {getFontXD, HEIGHT, HEIGHTXD} from '../../config/Functions';
import R from '../../assets/R';
import Block from '../Block';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import ModalDropdown from 'react-native-modal-dropdown';
const HeadeSetting = (props) => {
    const navigation = useNavigation();
    const [filter, setFilter] = React.useState(props.iconFilter);
    const [isModalVisible, setModalVisible] = React.useState(false);
    const [Viewitems, setViewitems] = React.useState([]);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={R.colors.color_icon}/>
            <Block flex={1}  margin={[0, 0]} padding={[0, 20]} center row>
                <View style={{flexDirection:'row', alignItems:'center',flex:3}}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name={'angle-left'} size={35} color={R.colors.color_icon}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={styles.txtTitle}>{props.header_title}</Text>
                    </TouchableOpacity>
                </View>
                {filter === true ?
                    <TouchableOpacity style={{flex:0.2}} onPress={() =>  toggleModal()}>
                        <Icon name={'filter'} size={28} color={R.colors.color_icon}/>
                    </TouchableOpacity>
                    : null
                }
                <Modal
                    animationType="slide"
                    isVisible={isModalVisible}
                    style={{alignItems: 'center'}}>
                    <View
                        style={{
                            width: '85%',
                            height: '60%',
                            backgroundColor: '#f3f2f2',
                            borderRadius: HEIGHTXD(20),
                            marginBottom: HEIGHTXD(40),
                        }}>
                        <View
                            style={{
                                borderBottomWidth: HEIGHTXD(3),
                                padding: HEIGHTXD(20),
                                borderBottomColor: '#8c9cae',
                                flexDirection: 'row',
                            }}>
                            <View style={{width: '86%',alignItems:'center'}}>
                                <Text style={{fontSize:18}}>Tìm kiếm </Text>
                            </View>
                            <TouchableOpacity style={{width: '13%',}} onPress={() => toggleModal()}>
                                <Text style={{color: 'red', fontSize: 20, fontWeight: 'bold', textAlign: 'right'}}>X</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                        </View>

                        {/*<Text>as</Text>*/}
                    </View>
                </Modal>

            </Block>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: HEIGHT(50),
        margin: 0,
        borderBottomWidth: 0.4,
        borderBottomColor: R.colors.color_icon,
        elevation: 2,
        paddingTop: 6
    },
    img: {
        height: HEIGHT(35),
    },
    txtTitle: {
        fontSize: getFontXD(46),
        marginLeft: 20,
    },
    input: {
        width:'100%',
        paddingHorizontal:HEIGHTXD(25),
        paddingVertical:HEIGHTXD(8),
        height: HEIGHTXD(100),
        opacity:0.6,
        backgroundColor:R.colors.inputbackgroundColor,
        color:R.colors.inputborder_Color,
        borderWidth: HEIGHTXD(1),
        fontSize:getFontXD(42),
        borderColor:R.colors.inputborder_Color,
        alignItems:'center',
        borderRadius:HEIGHTXD(30),
    },
});

export default HeadeSetting;

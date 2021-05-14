import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput, ScrollView,
    Image, FlatList, Alert,
    TouchableOpacity,
} from 'react-native';
import {getFontXD, WIDTH, HEIGHT, HEIGHTXD, getFont} from '../../config/Functions';
import {useNavigation} from '@react-navigation/native';
import R from '../../assets/R';
import Modal from 'react-native-modal';
import {TouchableOpacity as TouchableOpacityInModal} from 'react-native-gesture-handler';

const Header = (props) => {
    const navigation = useNavigation();
    const datamaps = props.datamaps.data;
    console.log('datamasp', datamaps);
    const [email, setEmail] = React.useState('');
    const [bdx, setBdx] = React.useState('');
    const [isModalVisible, setModalVisible] = React.useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const getSetView = (items) => {
        props._reloadData(items);
        toggleModal();
    };
    return (
        <View style={styles.container}>
            <View style={{paddingHorizontal:HEIGHTXD(20), flexDirection:'row', justifyContent: 'center',}}>
                <TextInput
                    // secureTextEntry={props.secureTextEntry}
                    style={[styles.input, {width: props.is_headr == true ? '86%' : '96%'}]}
                    onChangeText={setEmail}
                    value={email}
                    placeholder='Tìm kiếm'/>
                {
                    props.is_headr == true ?
                        <TouchableOpacity onPress={() => toggleModal()} style={styles.tou}>
                            <Image
                                source={R.images.homelocation}
                                style={styles.img}
                                resizeMode={'contain'}
                            />
                        </TouchableOpacity>
                        : <View></View>
                }
            </View>

            <Modal
                isVisible={isModalVisible}
                style={{alignItems: 'center'}}
            >
                <View
                    style={{
                        width: '85%',
                        height: HEIGHTXD(1400),
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
                        <TextInput
                            // secureTextEntry={props.secureTextEntry}
                            style={[styles.input, {width: '86%'}]}
                            onChangeText={setBdx}
                            value={bdx}
                            placeholder='Bãi đậu xe'/>
                        <TouchableOpacity style={{width: '13%'}} onPress={() => toggleModal()}>
                            <Text style={{color: 'red', fontSize: 28, fontWeight: 'bold', textAlign: 'right'}}>X</Text>
                        </TouchableOpacity>
                        {/*<Text style={{fontSize: 30}}>Bãi đậu xe</Text>*/}
                    </View>
                    <View style={{flex: 1, margin: HEIGHTXD(20)}}>
                        <FlatList
                            data={datamaps}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({item}) =>
                                <TouchableOpacity style={{
                                    flex: 1,
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#e9d9d9',
                                    flexDirection: 'row',
                                    paddingVertical: 6,
                                }} onPress={() => getSetView(item)}>
                                    <View style={{width: '90%'}}>
                                        <Text numberOfLines={2} style={{fontSize: 16}}>{item.title}</Text>
                                    </View>
                                    <View style={{width: '20%', justifyContent: 'center'}}>
                                        <Image
                                            source={R.images.homelocation}
                                            style={styles.img}
                                            resizeMode={'contain'}
                                        />
                                    </View>
                                </TouchableOpacity>
                            }
                            keyExtractor={(index) => index + 'a'}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: HEIGHT(36),
        margin: 0,
        borderBottomWidth: 0.4,
        backgroundColor: '#61828f',
        elevation: 2,
        paddingTop: HEIGHTXD(20),
        justifyContent: 'center',
        flexDirection: 'row',
    },
    input: {
        paddingHorizontal: HEIGHTXD(25),
        paddingVertical: HEIGHTXD(8),
        height: HEIGHTXD(100),
        opacity: 0.6,
        backgroundColor: R.colors.inputbackgroundColor,
        color: R.colors.inputborder_Color,
        borderWidth: HEIGHTXD(1),
        fontSize: getFontXD(42),
        borderColor: R.colors.inputborder_Color,
        alignItems: 'center',
        borderRadius: HEIGHTXD(30),
    },
    tou: {
        paddingTop: 2,
        height: HEIGHT(35),
        // width: '13%',
        alignItems: 'center',
        paddingHorizontal: 4
        // marginRight: 10,
    },
    img: {
        height: HEIGHT(25),
        width: HEIGHT(30),
    },

});

export default Header;

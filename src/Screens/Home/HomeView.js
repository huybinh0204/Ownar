import React, {Component} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import Headers from '../../components/Headers/Headers';
import R from '../../assets/R';
import {getFont, HEIGHT} from '../../config/Functions';

const HomeView = (props) => {

    return (
        <View style={{flex: 1}}>
            <Headers/>
            <View style={{flex: 1.2, margin: 10}}>
                <Text style={{color: R.colors.loginlogo, fontWeight: 'bold', fontSize: getFont(18)}}>Bảo vệ</Text>
                <FlatList
                    data={[1, 2, 3, 4, 5]}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    renderItem={({item}) =>
                        <TouchableOpacity style={{
                            alignItems: 'center',
                            width: HEIGHT(80),
                            justifyContent: 'center',
                            backgroundColor: '#cac8c8',
                            marginRight: HEIGHT(10),
                            borderRadius: HEIGHT(10),
                            marginTop: HEIGHT(5),
                        }}>
                            <View style={{
                                height: HEIGHT(45),
                                width: HEIGHT(45),
                                borderRadius: HEIGHT(1000),
                                backgroundColor: '#dedcdc',
                            }}>
                                <Image
                                    source={R.images.icon_user}
                                    style={{height: HEIGHT(45), width: HEIGHT(45), borderRadius: HEIGHT(1000)}}
                                    resizeMode={'contain'}
                                />
                            </View>
                            <Text style={{color: R.colors.loginlogo, fontSize: getFont(15), textAlign: 'center'}}>Le Huy
                                Binh
                                khẩu? </Text>
                        </TouchableOpacity>
                    }
                    keyExtractor={(index) => index + 'a'}
                />

            </View>
            <View style={{flex: 5, borderTopWidth: 5, borderTopColor: '#cad8de'}}>
                <View style={{margin: 10}}>
                    <Text style={{color: R.colors.loginlogo, fontWeight: 'bold', fontSize: getFont(18)}}> Khách hàng đặt
                        chỗ</Text>
                </View>
                <View style={{flex: 1, marginHorizontal: 10}}>
                    <FlatList
                        data={[1, 2, 3, 4, 5,6]}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item}) =>
                            <TouchableOpacity style={{
                                marginBottom:8,
                                backgroundColor: '#cac8c8',
                                borderRadius: HEIGHT(10),
                                flexDirection: 'row',
                                alignItems:'center'
                            }}>
                                <View style={{
                                    width: HEIGHT(45),
                                    height: HEIGHT(45),
                                    borderRadius: HEIGHT(1000),
                                    backgroundColor: '#dedcdc',
                                }}>
                                    <Image
                                        source={R.images.icon_user}
                                        style={{height: HEIGHT(45), width: HEIGHT(45), borderRadius: HEIGHT(50)}}
                                        resizeMode={'contain'}
                                    />
                                </View>
                                <View style={{padding: 8}}>
                                    <View style={{flexDirection: 'row',padding:HEIGHT(2), width:'100%'}}>
                                        <Text style={{
                                            color: R.colors.loginlogo,
                                            fontSize: getFont(17),
                                            fontWeight:'bold',
                                            width:'68%'
                                        }}>Huy Binh khẩu? </Text>
                                        <Text style={{
                                            color: R.colors.loginlogo,
                                            fontSize: getFont(17),
                                            width:'25%',
                                            fontWeight:'bold'
                                        }}> 60.000 đ </Text>
                                    </View>
                                    <Text
                                        style={{color: R.colors.loginlogo, fontSize: getFont(15),}}>
                                        ID NO.
                                        1234567890986adf </Text>
                                    <Text
                                        style={{color: R.colors.loginlogo, fontSize: getFont(15)}}>
                                        04-13 10:26 den 04-13 11:56 </Text>
                                    <Text
                                        style={{color: R.colors.loginlogo, fontSize: getFont(15)}}>
                                        Hon da -30E123456
                                    </Text>
                                </View>

                            </TouchableOpacity>
                        }
                        keyExtractor={(index) => index + 'a'}
                    />

                </View>

            </View>
        </View>
    );
};

export default HomeView;

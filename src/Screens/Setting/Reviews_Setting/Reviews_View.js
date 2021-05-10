import React, {Component} from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import HeadeSetting from '../../../components/Headers/HeadeSetting';
import R from '../../../assets/R';
import {connect} from 'react-redux';
import {hideLoading, showLoading} from '../../../redux/actions/loadingAction';
import {getFont, HEIGHT, WIDTH} from '../../../config/Functions';

const ReviewsView = (props) => {
    const title = String(props.route.params.param);

    return (
        <View style={styles.container}>
            <HeadeSetting header_title={title}/>
            <View style={styles.view_styA}>
                <FlatList
                    data={[1, 2, 3, 4, 5, 6, 7]}
                    keyExtractor={(index) => index + ''}
                    renderItem={({item, index}) =>
                        <View style={styles.viewflatlist}>
                            <View style={styles.view_image}>
                                <Image source={R.images.icon_user}
                                       style={styles.image_a}/>
                            </View>
                            <View style={styles.view_b}>
                                <Text style={styles.text_title} numberOfLines={2}>Binh LHh (62 Nguyễn Huy ds a Tường )</Text>
                                <View style={{flexDirection: 'row', marginTop: 5}}>
                                    <View style={{flexDirection: 'row', width: '55%'}}>
                                        <Image source={R.images.icon_user}
                                               style={styles.image_b}/>
                                        <Image source={R.images.icon_user}
                                               style={styles.image_b}/>
                                        <Image source={R.images.icon_user}
                                               style={styles.image_b}/>
                                        <Image source={R.images.icon_user}
                                               style={styles.image_b}/>
                                        <Image source={R.images.icon_user}
                                               style={styles.image_b}/>
                                    </View>
                                    <View style={{width: '45%'}}>
                                        <Text style={{fontSize: getFont(14)}}>19-Mar-21 9:54 AM</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    }
                />
            </View>

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view_styA: {
        // margin: c,
        marginBottom: HEIGHT(50),
        padding: HEIGHT(8),
    },
    viewflatlist: {
        height: HEIGHT(90),
        width: '100%',
        flexDirection: 'row',
        marginVertical: HEIGHT(4),
        // borderBottomWidth: 1,
        paddingVertical: 1,
        borderRadius: 3,
        backgroundColor:'#fff',
        elevation: 1,

    },
    view_image: {
        width: '22%',
        height: '100%',
        justifyContent: 'center',
        padding: HEIGHT(4),
    },
    view_b: {
        width: '76%',
        marginLeft: HEIGHT(1),
        paddingVertical: HEIGHT(4),
    },
    image_a: {
        width: '100%',
        height: '80%',
        borderRadius: 30,
    },
    image_b: {
        width: HEIGHT(14),
        height: HEIGHT(14),
        borderRadius: 20,
        marginLeft: HEIGHT(4),
    },
    text_title: {
        fontWeight: 'bold',
        color: R.colors.loginlogo,
        fontSize: getFont(23),
    },
});

// @ts-ignore
function mapStateToProps(state) {
    return {
        loadingModal: state.ModalLoadingReducer,
    };
}

export default connect(mapStateToProps, {showLoading, hideLoading})(
    ReviewsView,
);


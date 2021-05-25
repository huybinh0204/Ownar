import React, {Component, useEffect} from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import HeadeSetting from '../../../components/Headers/HeadeSetting';
import R from '../../../assets/R';
import {connect} from 'react-redux';
import {hideLoading, showLoading} from '../../../redux/actions/loadingAction';
import {getFont, HEIGHT, WIDTH} from '../../../config/Functions';
import {seting_review} from '../../../api/Functions/setting_function';
import Icon from 'react-native-vector-icons/AntDesign';

const ReviewsView = (props) => {
    const title = String(props.route.params.param);
    const [datareview, setDataView] = React.useState();
    const [reviewuser, setReViewUser] = React.useState();

    useEffect(() => {
        getDataReview();
    }, []);
    const getDataReview = async () => {
        const requers = await seting_review();
        const dataview = requers.data.data;
        // console.log("dataview.user",dataview);
        setDataView(dataview);
        const obj_user = [];
        for (var i = 0; i < dataview.length; i++) {
            const dbset = {
                spacetitle: dataview[i].space.title,
                star: dataview[i].star,
                description: dataview[i].description,
                created_at: dataview[i].created_at,
                current_money: dataview[i].user.current_money,
                email: dataview[i].user.email,
                id: dataview[i].user.id,
                image: dataview[i].user.image,
                imageUri: dataview[i].user.imageUri,
                name: dataview[i].user.name,
                phone_no: dataview[i].user.phone_no,
                status: dataview[i].user.status,
                updated_at: dataview[i].user.updated_at,
            };
            obj_user.push(dbset);
            // console.log("dataview.user",dataview[i]);
        }
        ;
        setReViewUser(obj_user);
    };
    const [is_stars, setIs_Star] = React.useState();
    const ViewICon = (is_star) => {
        return (
            <View style={{width: '55%'}}>
                {is_star == 1 ?
                    <View style={{flexDirection: 'row'}}>
                        <Icon name="star" size={18} color={R.colors.color_yellow} />
                        <Icon name="star" size={18} color={R.colors.inputborder_Color} />
                        <Icon name="star" size={18} color={R.colors.inputborder_Color} />
                        <Icon name="star" size={18} color={R.colors.inputborder_Color} />
                        <Icon name="star" size={18} color={R.colors.inputborder_Color} />
                    </View>
                    :
                    <View></View>}
                {is_star == 2 ?
                    <View style={{flexDirection: 'row'}}>
                        <Icon name="star" size={18} color={R.colors.color_yellow} />
                        <Icon name="star" size={18} color={R.colors.color_yellow} />
                        <Icon name="star" size={18} color={R.colors.inputborder_Color} />
                        <Icon name="star" size={18} color={R.colors.inputborder_Color} />
                        <Icon name="star" size={18} color={R.colors.inputborder_Color} />
                    </View>
                    : <View></View>}
                {is_star == 3 ?
                    <View style={{flexDirection: 'row'}}>
                        <Icon name="star" size={18} color={R.colors.color_yellow} />
                        <Icon name="star" size={18} color={R.colors.color_yellow}/>
                        <Icon name="star" size={18} color={R.colors.color_yellow} />
                        <Icon name="star" size={18} color={R.colors.color_reviewicon} />
                        <Icon name="star" size={18} color={R.colors.color_reviewicon}/>
                    </View>
                    :
                    <View></View>}
                {is_star == 4 ?
                    <View style={{flexDirection: 'row'}}>
                        <Icon name="star" size={18} color={R.colors.color_yellow} />
                        <Icon name="star" size={18} color={R.colors.color_yellow} />
                        <Icon name="star" size={18} color={R.colors.color_yellow} />
                        <Icon name="star" size={18} color={R.colors.color_yellow} />
                        <Icon name="star" size={18} color={R.colors.color_reviewicon}/>
                    </View>
                    :
                    <View></View>}
                {is_star == 5 ?
                    <View style={{flexDirection: 'row'}}>
                        <Icon name="star" size={18} color={R.colors.color_yellow} />
                        <Icon name="star" size={18} color={R.colors.color_yellow} />
                        <Icon name="star" size={18} color={R.colors.color_yellow} />
                        <Icon name="star" size={18} color={R.colors.color_yellow} />
                        <Icon name="star" size={18} color={R.colors.color_yellow} />
                    </View>
                    :
                    <View></View>}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <HeadeSetting header_title={title}/>
            <View style={styles.view_styA}>
                <FlatList
                    data={reviewuser}
                    keyExtractor={(index) => index + ''}
                    renderItem={({item, index}) =>
                        <View style={styles.viewflatlist}>
                            <View style={styles.view_image}>
                                <Image source={R.images.icon_user}
                                       style={styles.image_a}/>
                            </View>
                            <View style={styles.view_b}>
                                <Text style={styles.text_title} numberOfLines={2}>{item.name}({item.spacetitle})</Text>
                                <View style={{flexDirection: 'row', marginTop: 5}}>
                                    {ViewICon(item.star)}
                                    <View style={{width: '45%'}}>
                                        <Text style={{fontSize: getFont(14)}}>{item.created_at}</Text>
                                    </View>
                                </View>
                                {item.description == '' ? <Text>...</Text> : <Text style={{fontSize: 15, marginTop: 4}}
                                                                                   numberOfLines={2}>{item.description}</Text>}
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
        backgroundColor: '#fff',
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
        fontSize: getFont(19),
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


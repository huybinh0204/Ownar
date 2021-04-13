import React, {useEffect} from 'react';
import {View, Text, Platform, Dimensions, StatusBar} from 'react-native';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import StackNavigation from './routers/StackNavigation';
import {SkypeIndicator} from 'react-native-indicators';
import GeneralStatusBarColor from './components/GeneralStatusBarColor';
import {HEIGHT, HEIGHTXD} from './config/Functions';
import TabNavigator from './routers/TabNavigation';

const RootView = (props) => {
    return (
        <View style={{flex: 1, marginTop: Platform.OS === 'ios' ? -HEIGHTXD(44) : 0}}>
            <GeneralStatusBarColor backgroundColor="#000" barStyle="light-content" />
            <TabNavigator/>
            <Modal isVisible={props.loadingModal.isVisible}>
                <SkypeIndicator color={'white'}/>
            </Modal>
        </View>


    );
};

const mapStateToProps = (state) => {
    return {

        loadingModal: state.ModalLoadingReducer,
    };
};

export default connect(mapStateToProps, {})(RootView);

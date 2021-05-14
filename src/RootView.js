import React, {useEffect, useRef, useState} from 'react';
import {View, Text, Platform, Dimensions, StatusBar} from 'react-native';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import StackNavigation from './routers/StackNavigation';
import {SkypeIndicator} from 'react-native-indicators';
import GeneralStatusBarColor from './components/GeneralStatusBarColor';
import {HEIGHT, HEIGHTXD, WIDTHXD} from './config/Functions';
import TabNavigator from './routers/TabNavigation';
import DropdownAlert from 'react-native-dropdownalert';
import {AlertHelper} from './components/DropdownAlert';

const RootView = (props) => {
    console.log(props.loadingModal.isVisible);
    return (
        <View style={{flex: 1,backgroundColor:'#3880ff', marginTop: Platform.OS === 'ios' ? -HEIGHTXD(44) : 0}}>
            {/*<GeneralStatusBarColor backgroundColor="#3880ff" barStyle="light-content" />*/}
            <StackNavigation/>
            <Modal style={{justifyContent: 'center', alignItems:'center'}} isVisible={props.loadingModal.isVisible}>
                <SkypeIndicator color={'white'}/>
            </Modal>
            <DropdownAlert
                defaultContainer={{ flexDirection: 'row' }}
                ref={ref => AlertHelper.setDropDown(ref)}
                onClose={() => AlertHelper.invokeOnClose()}
            />
        </View>


    );
};
const mapStateToProps = (state) => {
    return {

        loadingModal: state.ModalLoadingReducer,
    };
};

export default connect(mapStateToProps, {})(RootView);

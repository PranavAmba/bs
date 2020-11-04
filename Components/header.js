import *as React from 'react'
import { StyleSheet } from 'react-native'
import {Header} from 'react-native-elements'


export default class AppHeader extends React.Component{
render(){
    return(
    <Header
    centerComponent={{text:'Request Book',style:{
        justifyContent:'center',
        alignItems:'center'
    }}}
    ></Header>
    )
}

}

const styles=StyleSheet.create({
    headerView:{
        justifyContent:'center',
        alignItems:'center'
    }
})
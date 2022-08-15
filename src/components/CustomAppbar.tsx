import * as React from 'react';
import { Appbar } from 'react-native-paper';
import icons from 'react-native-vector-icons/Ionicons'

function _goBack(): void {
    console.log('Go back..')
}
function _handleSearch(): void {
    console.log('Searching...')
}
function _handleMore(): void {
    console.log('Show more')
}

interface AppBarProps {
    title:string
}

const MyAppbar = ({title}: AppBarProps ) => (

    <Appbar.Header>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title={title} />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>

);

export default MyAppbar;
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { IconDoctor, IconDoctorActive, IconHospitals, IconHospitalsActive, IconMessage, IconMessageActive } from '../../../assets';
import { colors, fonts } from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
    const Icon = () => {
        if(title === 'Doctor'){
            return active ? <IconDoctorActive/> : <IconDoctor/>;
        }
        if(title === 'Messages'){
            return active ? <IconMessageActive/> : <IconMessage/>;
        }
        if (title === 'Hospitals'){
            return active ? <IconHospitalsActive/> : <IconHospitals/>;
        }
        return <IconDoctor/>;
    };
    return (
        <TouchableOpacity style={styles.wrapper} onPress={onPress} onLongPress={onLongPress}>
            <Icon/>
            <Text style={styles.text(active)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center'
    },
    text: (active) => (
        {
            fontSize: 10,
            textAlign: 'center',
            color: active ? colors.text.menuActive : colors.text.menuInactive,
            marginTop: 4,
            fontFamily: fonts.Nunito[600],
        }
    )
        
    
})

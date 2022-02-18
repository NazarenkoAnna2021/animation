import React, { FC, useCallback, } from 'react';
import { LayoutChangeEvent, Text, View } from 'react-native';
import { styles } from './styles';

interface IProps{
    setContentHeight: (value: number) => void
}

export const PhoneContent: FC<IProps> = ({setContentHeight}) => {
    const onLayout = useCallback((event: LayoutChangeEvent)=>{
        setContentHeight(event.nativeEvent.layout.height);
    },[]);

    return (
        <View style={styles.container} onLayout={onLayout}>
            <Text style={styles.text}> laudantium quasi?</Text>
            <Text style={styles.text}> laudantium quasi?</Text>
            <Text style={styles.text}> laudantium quasi?</Text>
            <Text style={styles.text}> laudantium quasi?</Text>
            <Text style={styles.text}> laudantium quasi?</Text>
            <Text style={styles.text}> laudantium quasi?</Text>
            <Text style={styles.text}> laudantium quasi?</Text>
        </View >
    )
};
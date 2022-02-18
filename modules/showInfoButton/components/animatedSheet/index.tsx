import React, { FC, } from 'react';
import { View, Animated, Dimensions } from 'react-native';
import { styles } from './styles';

const { width } = Dimensions.get('screen');

const BUTTON_SIZE = 48;
const OFFSET = 15;
const MIN_HEIGHT = BUTTON_SIZE + OFFSET * 2;

interface IProps {
    animatedValue: Animated.Value;
    contentHeight: number;
}

export const AnimatedSheet: FC<IProps> = ({ animatedValue, contentHeight, children }) => {
    return (
        <Animated.View style={[styles.container, {
            height: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [BUTTON_SIZE, contentHeight + MIN_HEIGHT],
                extrapolate: 'clamp',
            }),
            width: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [BUTTON_SIZE, width],
                extrapolate: 'clamp',
            }),
            right: animatedValue.interpolate({
                inputRange: [0, 0.3, 1],
                outputRange: [OFFSET, 0, 0],
                extrapolate: 'clamp',
            }),
            top: animatedValue.interpolate({
                inputRange: [0, 0.1, 1],
                outputRange: [OFFSET, 0, 0],
                extrapolate: 'clamp',
            }),
        }]}>
            <Animated.View style={
                {
                    position: 'absolute',
                    right:0,
                    top: animatedValue.interpolate({
                        inputRange: [0, 0.3, 1],
                        outputRange: [0, MIN_HEIGHT + 15, MIN_HEIGHT + 15]
                    }),
                }
            }>
                {children}
            </Animated.View>
        </Animated.View>
    )
};
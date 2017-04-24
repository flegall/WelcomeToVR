import React from 'react';
import {
  AppRegistry,
  asset,
  Sphere,
  StyleSheet,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class WelcomeToVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('Venice.jpeg')}/>
        <Text
          style={{
            backgroundColor: 'transparent',
            color: '#f004c8',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 1, -5]}],
          }}>
          Fluo
        </Text>
        <Text
          style={{
            backgroundColor: 'transparent',
            color: '#ff04dc',
            fontSize: 0.5,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{
              translate: [0, 1, -5],
            }],
          }}>
          Le bon génie de l'assurance
        </Text>
        <Sphere
          radius={0.5}
          widthSegments={40}
          heightSegments={40}
          style={{
            color: '#ff04dc',
            transform: [{translate: [0, 1, -4]}],
          }}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);

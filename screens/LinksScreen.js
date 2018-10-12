import React from 'react';
import { 
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';

import {
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import { WebBrowser } from 'expo';
import Touchable from 'react-native-platform-touchable';


export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <View>
        <Text style={styles.optionsTitleText}>
          Voter's Guide
        </Text>

        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={this._handlePressVoteGuide}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionIconContainer}>
              <MaterialCommunityIcons name="checkbox-marked-outline" size={22} color="#ccc" />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                Voter's Guide
              </Text>
            </View>
          </View>
        </Touchable>      
      
        <Text style={styles.optionsTitleText}>
          Get Involved
        </Text>

        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={this._handlePressVolun}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionIconContainer}>
              <MaterialCommunityIcons name="human-handsup" size={22} color="#ccc" />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                Volunteer
              </Text>
            </View>
          </View>
        </Touchable>

        <Touchable
          background={Touchable.Ripple('#ccc', false)}
          style={styles.option}
          onPress={this._handlePressEvent}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionIconContainer}>
              <MaterialCommunityIcons name="calendar" size={22} color="#ccc" />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                Upcoming Events
              </Text>
            </View>
          </View>
        </Touchable>

        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={this._handlePressDonate}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionIconContainer}>
              <MaterialCommunityIcons name="cash-usd" size={22} color="#ccc" />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                Donate
              </Text>
            </View>
          </View>
        </Touchable>
      </View>
    );
  }


  _handlePressVoteGuide = () => {
    WebBrowser.openBrowserAsync('https://www.jordanforgovernor.com/voters-guide/');
  };

  _handlePressVolun = () => {
    WebBrowser.openBrowserAsync('https://act.myngp.com/Forms/2577103798777351168');
  };

  _handlePressEvent = () => {
    WebBrowser.openBrowserAsync('https://www.jordanforgovernor.com/events/');
  };

  _handlePressDonate = () => {
    WebBrowser.openBrowserAsync('https://secure.actblue.com/donate/jordan-for-governor-1');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  optionsTitleText: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12,
  },
  optionIconContainer: {
    marginRight: 9,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  optionText: {
    fontSize: 15,
    marginTop: 1,
  },
});

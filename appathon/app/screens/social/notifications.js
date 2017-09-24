import React from 'react';
import {
  ListView,
  View,
  Image
} from 'react-native';
import {RkStyleSheet, RkText} from 'react-native-ui-kitten';
import {data} from '../../data';
let moment = require('moment');

export class Notifications extends React.Component {
  static navigationOptions = {
    title: 'Notifications'
  };

  constructor(props) {
    super(props);

    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.data = ds.cloneWithRows(data.getNotifications());
  }


  renderRow(row) {

    let username = `You`;

    let mainContentStyle;
    

    return (
      <View style={styles.container}>
        
        <View style={styles.content}>
          <View style={mainContentStyle}>
            <View style={styles.text}>
              <RkText>
                <RkText rkType='header6'>{username}</RkText>
                <RkText rkType='primary2'> {row.description}</RkText>
              </RkText>
            </View>
            <RkText rkType='secondary5 hintColor'>{moment().add(row.time, 'seconds').fromNow()}</RkText>
          </View>
          
        </View>
      </View>
    )
  }

  render() {
    return (
      <ListView
        style={styles.root}
        dataSource={this.data}
        enableEmptySections={true}
        renderRow={this.renderRow}/>

    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base
  },
  container: {
    padding: 16,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: theme.colors.border.base,
    alignItems: 'flex-start'
  },
  avatar: {},
  text: {
    marginBottom: 5,
  },
  content: {
    flex: 1,
    marginLeft: 16,
    marginRight: 0
  },
  mainContent: {
    marginRight: 60
  },
  img: {
    height: 50,
    width: 50,
    margin: 0
  }
}));
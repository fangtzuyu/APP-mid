import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import albums from '../json/albums.json';


class Searchlist extends Component {
  state = { albums: [] };

  componentWillMount() {
    this.setState({ albums });
  }

  goToPageTwo = (album) => {
    this.props.navigation.navigate('Details', { ...album });
  };

  render() {
    return (
      <ScrollView>
        <List>
          {this.state.albums.map((album) => (
            <ListItem
              key={album.company}
              title={album.company}
              subtitle={album.phone}
              onPress={() => this.goToPageTwo(album)}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

export default Searchlist;

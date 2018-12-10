import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ListSection, ListItem, Button, Card, CardActions, CardContent, CardCover, Title, Paragraph } from 'react-native-paper';
import { COLORS } from '../state/Colors.js';
import { connect } from 'react-redux';


class MainPage extends Component {
  static navigationOptions = {
    title: 'Movie',
    header: null
  };

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
    };
  }

  onDetail() {
    this.props.navigation.navigate('Detail')
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=40`;
    this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  selectedColor() {
    const { colorName } = this.props;
    return COLORS[colorName].hexCode;
  }

  render() {
    const color = this.selectedColor();

    return <ScrollView style={[styles.container]}>
      {
        this.state.data.map((object, i) => (
          <Card key={i} onPress={() => this.onDetail()}>
            <CardContent>
              <Title>Card title</Title>
              <Paragraph>Card content</Paragraph>
            </CardContent>
            <CardCover source={{ uri: object.picture.large }} />
            <CardActions>
              <Button>Cancel</Button>
              <Button>Ok</Button>
            </CardActions>
          </Card>
        ))
      }
    </ScrollView>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    height: 40,
    width: 40,
  },
});

const mapStateToProps = state => {
  return { colorName: state.color.colorName };
};

export default connect(mapStateToProps)(MainPage);
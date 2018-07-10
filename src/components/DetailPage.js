import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardContent, Text, Title, Paragraph} from 'react-native-paper';

class DetailPage extends Component {


  render() {
    return <ScrollView style={[styles.container]}>
      <Card onPress={() => this.props.navigation.navigate('Main')}>
        <CardContent>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </CardContent>
      </Card>
    </ScrollView>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default connect(null, null)(DetailPage);
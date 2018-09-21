
import React, { Component } from 'react';
import Shopify from 'react-native-shopify';
import Client from 'shopify-buy';

import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

Shopify.initialize('lot-stop.myshopify.com', '1c42199fed9167be2faf18d691916d7f');
client = Client.buildClient({
  domain: 'lot-stop.myshopify.com',
  storefrontAccessToken: 'bc095024d97911e99f3e2ea2e00b25a5'
});
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Collections: "Shopify"
    };
  }
  
  handleCollection = () => {
    console.log("gettinmg projects");
    this.setState({Collections: "Getting products"});
    client.collection.fetchAllWithProducts().then((collections) => {
      // Do something with the collections
      console.log(collections);
      console.log(collections)
      console.log(collections[0].products);
    });
  }
  render() {
    
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={this.handleCollection}>
         {this.state.Collections}
		    </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

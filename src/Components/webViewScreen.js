/**
 * @author Laveena Chaturvedi
 * @description WebViewScreen
 * @flow
 */
import React, {useEffect, useState} from 'react';
import {WebView} from 'react-native-webview';

const WebViewScreen = props => {
  const [url, setUrl] = useState('');
  useEffect(() => {
    let url = props.route.params.url;
    setUrl(url);
  }, [props.route.params.url]);
  return <WebView source={{uri: url}} />;
};

export default WebViewScreen;

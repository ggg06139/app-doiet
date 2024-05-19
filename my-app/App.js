import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    <WebView
      source={{ uri: 'https://doiet.netlify.app/' }}
    />
  );
}
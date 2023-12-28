import 'expo-dev-client';
import React, {useState} from 'react';
import AgoraUIKit, {AgoraUIKitProps} from 'agora-rn-uikit';

const App = () => {
  const [videoCall, setVideoCall] = useState(true);
  const props: AgoraUIKitProps = {
    connectionData: {
      appId: process.env.EXPO_PUBLIC_AGORA_APP_ID ?? '',
      channel: 'test',
    },
    rtcCallbacks: {
      EndCall: () => setVideoCall(false),
    },
  };

  return videoCall ? (
      <AgoraUIKit connectionData={props.connectionData} rtcCallbacks={props.rtcCallbacks} />
  ) : null;
};

export default App;

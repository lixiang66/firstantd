/* eslint react/prop-types: 0 */
import React from 'react';
import JPlayer, { connect, Gui, SeekBar, BufferBar,
  Poster, Audio, Title, FullScreen, Mute, Play, PlayBar, Repeat,
  VolumeBar, Duration, CurrentTime, Download, BrowserUnsupported,
 } from 'react-jplayer';

 import {Icon} from 'antd';

const AudioPlayer = ({jPlayers}) => (
  <div >
  	<JPlayer className="jp-sleek">
    <Audio />
    <Gui style={{position:`relative`}}>
      <div className="jp-controls jp-icon-controls">
        <Play>{jPlayers.AudioPlayer.paused?<Icon type="play-circle-o" />:<Icon type="pause-circle-o" />}</Play>
        <Repeat>{jPlayers.AudioPlayer.loop?<Icon type="retweet" />:<Icon type="link" />}</Repeat>
        <div className="jp-progress">
          <SeekBar>
            <BufferBar />
            <PlayBar />
            <CurrentTime />
            <Duration />
          </SeekBar>
        </div>
        <div className="jp-volume-container">
          <Mute>
            <Icon type="notification" />
          </Mute>
          <div className="jp-volume-slider">
            <div className="jp-volume-bar-container">
              <VolumeBar />
            </div>
          </div>
        </div>
        <FullScreen><Icon type="arrows-alt" /></FullScreen>
        <Download><Icon type="download" /></Download>
        <div className="jp-title-container">
          <Poster />
          <Title />
        </div>
      </div>
      <BrowserUnsupported />
    </Gui>
  </JPlayer>
  </div>
);

const options = {
  id: 'AudioPlayer',
  keyEnabled: true,
  verticalVolume: true,
  media: {
    title: 'Bubble',
    artist: 'Miaow',
    sources: {
      m4a: 'http://jplayer.org/audio/m4a/Miaow-07-Bubble.m4a',
      oga: 'http://jplayer.org/audio/ogg/Miaow-07-Bubble.ogg',
    },
    free: true,
  },
};
export default connect(AudioPlayer, options);
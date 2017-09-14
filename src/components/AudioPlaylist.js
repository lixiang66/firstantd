/* eslint react/prop-types: 0 */
import React from 'react';
import { Gui, SeekBar, BufferBar,
  Poster, Audio, Title, FullScreen, Mute, Play, PlayBar,
  VolumeBar, Duration, CurrentTime, Download, BrowserUnsupported,
 } from 'react-jplayer';
import JPlaylist, { connect, Playlist, Shuffle, Next, Previous, Repeat,
  TogglePlaylist, Remove, MediaLink, Title as PlaylistTitle } from 'react-jplaylist';

 import {Icon} from 'antd';

const AudioPlaylist = () => (
  <JPlaylist className="jp-sleek">
    <Audio />
    <Gui style={{position:`relative`}}>
      <div className="jp-controls jp-icon-controls">
        <Previous><Icon type="play-circle-o"/></Previous>
        <Play><Icon type="play-circle-o"/></Play>
        <Next><Icon type="play-circle-o"/></Next>
        <Repeat>
          <Icon type="play-circle-o"/>
        </Repeat>
        <Shuffle><Icon type="play-circle-o"/></Shuffle>
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
            <Icon type="play-circle-o"/>
          </Mute>
          <div className="jp-volume-slider">
            <div className="jp-volume-bar-container">
              <VolumeBar />
            </div>
          </div>
        </div>
        <div className="jp-playlist-container">
          <Playlist>
            <Remove />
            <MediaLink>
              <PlaylistTitle />
            </MediaLink>
          </Playlist>
          <TogglePlaylist><i className="fa fa-ellipsis-h" /></TogglePlaylist>
        </div>
        <FullScreen><i className="fa fa-expand" /></FullScreen>
        <Download><i className="fa fa-download" /></Download>
        <div className="jp-title-container">
          <Poster />
          <Title />
        </div>
      </div>
      <BrowserUnsupported />
    </Gui>
  </JPlaylist>
);

const options = {
  id: 'AudioPlaylist',
  verticalVolume: true,
};

const jPlaylistOptions = {
  hidePlaylist: true,
  playlist: [
    {
      title: 'Bubble',
      artist: 'Miaow',
      sources: {
        m4a: 'http://jplayer.org/audio/m4a/Miaow-07-Bubble.m4a',
        oga: 'http://jplayer.org/audio/ogg/Miaow-07-Bubble.ogg',
      },
      free: true,
    },
    {
      title: 'Tempered Song',
      artist: 'Miaow',
      sources: {
        mp3: 'http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3',
        oga: 'http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg',
      },
    },
    {
      title: 'Cro Magnon Man',
      artist: 'The Stark Palace',
      sources: {
        mp3: 'http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3',
        oga: 'http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg',
      },
      poster: 'http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png',
    },
  ],
};

export default connect(AudioPlaylist, options, jPlaylistOptions);

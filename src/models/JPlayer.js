import {  reducer as jPlayers } from 'react-jplayer';
export default {
  namespace: 'jPlayers',
  state: {},
  reducers: {
  	SET_JPLAYER_OPTION:jPlayers,
  	SET_MEDIA:jPlayers,
  	CLEAR_MEDIA:jPlayers,
  	PLAY:jPlayers,
  	PAUSE:jPlayers,
  	PLAY_HEAD:jPlayers,
  	VOLUME:jPlayers,
  	MUTE:jPlayers,
  	FOCUS:jPlayers
  },
  effects: {},
  subscriptions: { },
};

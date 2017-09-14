import { reducer as jPlaylists } from 'react-jplaylist';
export default {
  namespace: 'jPlaylists',
  state: {},
  reducers: {
  	SET_PLAYLIST:jPlaylists,
  	SET_PLAYLIST_OPTION:jPlaylists,
  	PLAYLIST_ADD:jPlaylists,
  	PLAYLIST_REMOVE:jPlaylists,
  	PLAYLIST_CLEAR:jPlaylists,
  	PLAYLIST_SELECT:jPlaylists,
  	PLAYLIST_PLAY:jPlaylists,
  	PLAYLIST_SHUFFLE:jPlaylists,
  	PLAYLIST_NEXT:jPlaylists,
  	PLAYLIST_PREVIOUS:jPlaylists
  },
  effects: {},
  subscriptions: { },
};
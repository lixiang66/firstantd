import dva from 'dva';
// import './index.css';
// import 'react-jplayer/src/less/skins/sleek.less';
// // Styles Play/Pause/Mute etc when icons (<i />) are used for them
// import 'react-jplayer/src/less/controls/iconControls.less';
import 'react-jplaylist/src/less/skins/sleek.less';
import 'react-jplaylist/src/less/controls/iconControls.less';

import { initialState} from 'react-jplayer';
import { initialState as jPlaylistInitialState } from 'react-jplaylist';
import AudioPlayer from './components/AudioPlayer';
import AudioPlaylist from './components/AudioPlaylist';
// 1. Initialize
const app = dva({
	initialState: {
		products: [{
			key: '1',
			name: 'dva',
			id: 1
		}, {
			key: '2',
			name: 'antd',
			id: 2
		}, ],
		example: [1, 2, 3, 4, 5],
		user: {
			'userName': '',
			'passWord': ''
		},
		jPlayers:{...initialState([AudioPlayer,AudioPlaylist])},
		jPlaylists:{...jPlaylistInitialState(AudioPlaylist)}
	},
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));
app.model(require('./models/products'));
app.model(require("./models/auth"));
app.model(require('./models/example'));
app.model(require('./models/user'));
app.model(require('./models/JPlayer'));
app.model(require('./models/jPlaylists'));
// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
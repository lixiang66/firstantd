import dva from 'dva';
import './index.css';

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
		}
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
// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
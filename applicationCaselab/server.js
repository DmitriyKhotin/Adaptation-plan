import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import bluebird from 'bluebird';

import config from './config';
import authRoute from './routes/auth';
import userRoute from './routes/user';
import pageRoute from './routes/page';
import profileRoute from './routes/profile'
import plan from './routes/plan'
import errorHandler from './middlewares/errorHandler';
import getUser from './middlewares/getUser';
import checkToken from './middlewares/checkToken';
import directorRoute from './routes/director';
import currentPlan from './routes/currentPlan';

const app = express();
const MONGODB_URI = process.env.NODE_ENV !== "production" ? 'mongodb+srv://dmitriykhotin:KM2d3d37g@adaptation-plan.mplfs.mongodb.net/Adaptation-plan?retryWrites=true&w=majority' : process.env.NODE_ENV
mongoose.Promise = bluebird;
mongoose.connect(MONGODB_URI || "mongodb://localhost/user-db",{ useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false })
	.then(() => console.log("Database Connected Successfully"))
	.catch(err => console.log('error', err));

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(session({
	resave: true,
	saveUninitialized: true,
	secret: config.secret
}));

app.use('/', authRoute);
app.use('/', checkToken, userRoute);
app.use(getUser);
app.use('/', checkToken, profileRoute)
app.use('/', checkToken, directorRoute);
app.use('/', checkToken, currentPlan);
app.use('/', checkToken, plan);
app.use(errorHandler);

if (process.env.NODE_ENV === "production") {
	
	// Set static folder
	app.use(express.static("adaptation-plan-frontend/build"));
	
	// index.html for all page routes
/*	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "../adaptation-plan-frontend", "build", "index.html"));
	});*/
}

const port = process.env.PORT || 3001

app.listen(port, () => {
	console.log(`Server Running at ${port}`)
});
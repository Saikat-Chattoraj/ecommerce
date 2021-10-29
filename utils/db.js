import mongoose from 'mongoose';

const connection = {};
async function connect() {
	const MONGODB_CONNECTION_URI = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_URI}/${process.env.MONGODB_DB}?retryWrites=true&w=majority`
	if (connection.isConnected) {
        console.log("already Connected")
		return;
	}
	//if not connected check if there was a previous connection made
	if(mongoose.connections.length>0){
		// fail connection and provide isconnected the value of mongoos.connections[0].readyState
		connection.isConnected=mongoose.connections[0].readyState;
		// check if above connection is open and ready
		if(connection.isConnected===1){
			console.log("use previous connection")
			return;
		}
		// if status is not 1, disconnect as the status is not ready
		await mongoose.disconnect();
	}
	// set up a new connection
	const db = await mongoose.connect(MONGODB_CONNECTION_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	console.log("new connection");
	//connection succesful
	connection.isConnected = db.connections[0].readyState;
	console.log("connect successfull")
}   
async function disconnect(){
	if(connection.isConnected){
		// if true see if its production mode, IF YES set it to false.
		if(process.env.NODE_ENV==="production"){
			await mongoose.disconnect();
			connection.isConnected=false;
			// else if its in development mode,then dont disconnect, since repeated disconnection and connection in 
			// development mode may require more memory and use up more ram. 
		} else{
			console.log('not disconnected');
		}
	}
}
const db={connect,disconnect};
export default db;
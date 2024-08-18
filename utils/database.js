const mongoose = require('mongoose');
let isConnected = false;

export async function ConnectToDatabase(){
    if(isConnected){
        console.log('Mongodb is already connected');
        return;
    }
    try{
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName:"Pantnagar_Market",
            bufferCommands: false,
        })
        isConnected = true;
        console.log('Mongodb is connected')
    }catch(e){
        console.log('the error is ',e)
    }
}




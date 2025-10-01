const {connectDB, mongoose} = require('./db');
// importing of models
const  {User} = require('./models/user');
const {Task} = require('./models/task');

// establish the async function to seed the database

async function main(){
    await connectDB();
    // clear existing data in the collections
    await User.deleteMany({});
    await Task.deleteMany({});
    
    await User.insertMany([
        {name: "Alice Karioki", email:"alice@example.com", role:"admin"},
        {name: "Dedan Okware", email:"dedan@example.com"},
    ]);

    await Task.insertMany([
        {title: "Write Proposal", status:"todo", owner:"Alice Karioki"},
        {title: "Design Schema", status: "in_progress", owner:"Dedan Okware"}
    ]);

    console.log("Data populated successfully");
    await mongoose.connection.close();



}

main()
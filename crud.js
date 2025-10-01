const {connectDB, mongoose} = require('./db');
// importing of models
const  {User} = require('./models/user');
const {Task} = require('./models/task');

async function main() {
    await connectDB();
    // CREATE
    const john = await User.create({name: "John Doe", email: "john@plp.com"});
    console.log("Created User:", john);

    //READ
    const users = await User.find().select('name email');
    console.log("all users:", users);

    //UPDATE
    await User.updateOne({email: "john@plp.com"}, {role: "admin"});
    console.log("Updated John's role.");
    
    //DELETE
    await User.deleteOne({email:"john@plp.com"});
    console.log("Bye John!!"); 

     // AGGREGATE
    const byStatus = await Task.aggregate([
    {$group: {_id: "$status", count: {$sum: 1}}}
    ]);
    console.log("Tasks by status:", byStatus);
    await mongoose.disconnect();
}

   

main();
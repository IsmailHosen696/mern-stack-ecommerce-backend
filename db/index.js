const mongoose = require('mongoose');

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGOO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log(`db connected`);
    } catch (e) {
        console.log(e.message);
        process.exit(1);
    }
}

module.exports = connection;
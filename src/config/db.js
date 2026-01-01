const mongoose = require('mongoose');

// Add authSource=admin
const MONGODB_URI =
  'mongodb://root:BcBj12ei3LM39XxFlAMqhXRs@172.21.241.19:27017/cch_db?authSource=admin';

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;

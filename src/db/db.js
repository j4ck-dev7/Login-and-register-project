import mongoose from 'mongoose';

export const connect = mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    },
    (error) => {
        if (error) {
            console.log(`Error connecting to the database: ${error}`);
        }
        console.log('Connected to the database successfully');
    }
)

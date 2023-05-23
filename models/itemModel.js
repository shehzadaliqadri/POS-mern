import { mongoose } from 'mongoose';

const itemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
},
    { timestamp: true }
)

export const itemModel = mongoose.model('Item', itemSchema)

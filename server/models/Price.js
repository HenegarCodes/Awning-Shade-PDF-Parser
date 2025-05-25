import mongoose from 'mongoose';

const priceSchema = new mongoose.Schema({
  group: String,  // The group name (e.g., 'Group #1')
  item: Number,   // Item number (e.g., 4, 5, 6, etc.)
  prices: {       // Price mapping for each group
    type: Map,
    of: Number,   // The price for each group
  },
});

export default mongoose.model('Price', priceSchema);

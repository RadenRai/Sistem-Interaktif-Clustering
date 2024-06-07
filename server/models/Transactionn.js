import mongoose from "mongoose";

// Transaction Schema
const TransactionnSchema = new mongoose.Schema(
  {
    userId: String,
    cost: String,
    products: {
      type: [mongoose.Types.ObjectId],
      of: Number,
    },
  },
  { timestamps: true }
);

const Transactionn = mongoose.model("Transactionn", TransactionnSchema);

export default Transactionn;

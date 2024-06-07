import mongoose from "mongoose";

// Transaction Schema
const TransactionnnSchema = new mongoose.Schema(
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

const Transactionnn = mongoose.model("Transactionnn", TransactionnnSchema);

export default Transactionnn;

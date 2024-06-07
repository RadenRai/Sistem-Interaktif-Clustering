import express from "express";

import {
  getProducts,
  getCustomers,
  getTransactions,
  getTransactionns,
  getTransactionnns,
  getGeography,
} from "../controllers/client.js";

const router = express.Router();

// Routes
router.get("/products", getProducts);
router.get("/customers", getCustomers);
router.get("/transactions", getTransactions);
router.get("/transactionns", getTransactionns);
router.get("/transactionnns", getTransactionnns);
router.get("/geography", getGeography);

export default router;

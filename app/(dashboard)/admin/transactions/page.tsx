"use client";
import { useEffect, useState } from "react";
import Button from "@/app/(landing)/components/ui/button";
import { FiPlus } from "react-icons/fi";
import TransactionTable from "../../components/transactions/transaction-table";
import TransactionModal from "../../components/transactions/transaction-modal";
import { Transaction } from "@/app/types";
import { getAllTransactions, updateTransaction } from "@/app/services/transaction.service";
import { toast } from "react-toastify";

const TransactionManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);
  const [transaction, setTransaction] = useState<Transaction[]>([]);

  const fetchTransaction = async () => {
    try {
      const data = await getAllTransactions();
      setTransaction(data);
    } catch (error) {
      console.error("failed to fetch transactions", error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTransaction(null);
  };

  // ✅ PERBAIKAN DI SINI
  const handleViewDetails = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
    setIsModalOpen(true);
  };

  const handleStatusChange = async (
    id: string,
    status: "paid" | "rejected"
  ) => {
    try {
      const formData = new FormData();
      formData.append("status", status);

      await updateTransaction(id, formData);

      toast.success("Transaction status updated");

      await fetchTransaction();
    } catch (error) {
      console.error("Failed to update transaction status", error);
      toast.error("Failed to update transaction status");
    }finally{
        setIsModalOpen(false)
    }
  };

  useEffect(() => {
    fetchTransaction();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="font-bold text-2xl">Transaction Management</h1>
          <p className="opacity-50">
            Verify incoming payments and manage orders.
          </p>
        </div>
        <Button className="rounded-lg" onClick={() => setIsModalOpen(true)}>
          <FiPlus size={24} /> Add Transaction
        </Button>
      </div>

      <TransactionTable
        transactions={transaction}
        onViewDetails={handleViewDetails}
      />

      <TransactionModal
        transaction={selectedTransaction}
        onStatusChange={handleStatusChange}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default TransactionManagement;

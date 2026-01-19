"use client";

import { FiCreditCard } from "react-icons/fi";
import CardWithHeader from "../ui/card-with-header";

const paymentList = [
  {
    bank_name: "BCA",
    account_number: 123213123213,
    account_holder: "PT SportsOn Digital",
  },
  {
    bank_name: "Mandiri",
    account_number: 89458434,
    account_holder: "PT SportsOn Digital",
  },
  {
    bank_name: "BRI",
    account_number: 123891283912,
    account_holder: "PT SportsOn Digital",
  },
];

const PaymentOptions = () => {
  return (
    <CardWithHeader title="Payment Options">
      {paymentList.map((payment, index) => (
        <div
          key={index}
          className="flex gap-5 p-5 border-b border-gray-100 last:border-b-0"
        >
         
          <div className="bg-blue-100 p-4 text-blue-500 h-fit self-center rounded">
            <FiCreditCard size={24} />
          </div>

          <div className="flex justify-between w-full items-center">
            <div>
              <div className="font-bold">{payment.bank_name}</div>
              <div className="text-sm">{payment.account_number}</div>
              <div className="text-sm opacity-70">
                {payment.account_holder}
              </div>
            </div>

            
            <div className="bg-blue-50 text-gray-800 text-xs px-3 py-1 rounded h-fit">
              Bank Transfer
            </div>
          </div>
        </div>
      ))}
    </CardWithHeader>
  );
};

export default PaymentOptions;

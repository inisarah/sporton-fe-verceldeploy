"use client";

import CardWithHeader from "../ui/card-with-header";
import FileUpload from "../ui/file-upload";
import Button from "../ui/button";
import { FiCheckCircle } from "react-icons/fi";
import { useRouter } from "next/navigation";

const totalPrice = 1035000;

const priceFormatter = (price: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(price);

const PaymentSteps = () => {
  const router = useRouter();

  const uploadAndConfirm = () => {
    router.push("/order-status/123123123");
  };

  return (
    <CardWithHeader title="Payment Steps">
      <div className="p-5">
        <ol className="list-decimal text-xs pl-2 flex flex-col gap-4 mb-5">
          <li>
            Transfer the total amount of <b>Rp. 1.035.000</b> to your preferred
            bank account listed under <b>Payment Options</b>.
          </li>
          <li>
            After completing the transfer, <b>keep the payment receipt</b>.
          </li>
          <li>Upload the payment receipt using the button below.</li>
        </ol>

        <FileUpload />
      </div>

      <div className="border-t border-gray-200 p-4">
        <div className="flex justify-between font-semibold">
          <div className="text-sm">Total</div>
          <div className="text-primary text-xs">
            {priceFormatter(totalPrice)}
          </div>
        </div>

        <Button
          variant="dark"
          className="w-full mt-4"
          onClick={uploadAndConfirm}
        >
          <FiCheckCircle />
          Upload Receipt & Confirm
        </Button>
      </div>
    </CardWithHeader>
  );
};

export default PaymentSteps;

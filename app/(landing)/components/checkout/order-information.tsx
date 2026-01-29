"use client";

import CardWithHeader from "../ui/card-with-header";
import { CustomerInfo } from "@/app/hooks/use-cart-store";

type TOrderInformation = {
  formData: CustomerInfo;
  setFormData: React.Dispatch<React.SetStateAction<CustomerInfo>>;
};

const OrderInformation = ({ formData, setFormData }: TOrderInformation) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "customerContact"
          ? Number(value) || 0 
          : value,
    }));
  };

  return (
    <CardWithHeader title="Order Information">
      <div className="p-5 space-y-4">
        <div className="input-group">
          <label htmlFor="customerName">Full Name</label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            placeholder="Type your full name"
            value={formData.customerName}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-group">
  <label htmlFor="customerContact">Whatsapp Number</label>
 <input
  type="number"
  name="customerContact"
  placeholder="Type your WhatsApp number"
  value={formData.customerContact === 0 ? "" : formData.customerContact}
  onChange={(e) =>
    setFormData((prev) => ({
      ...prev,
      customerContact:
        e.target.value === "" ? 0 : Number(e.target.value),
    }))
  }
/>
</div>


        <div className="input-group">
          <label htmlFor="customerAddress">Shipping Address</label>
          <textarea
            id="customerAddress"
            name="customerAddress"
            placeholder="Type your shipping address"
            rows={6}
            value={formData.customerAddress}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </CardWithHeader>
  );
};

export default OrderInformation;

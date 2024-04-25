import { addressType } from "../types";
import { AddressItem } from "./AddressItem";

type AddressListProps = {
  addressItems: addressType[];
};

export const AddressList = ({ addressItems }: AddressListProps) => {
  return (
    <div className="bg-white max-w-[400px] w-full rounded-xl">
      {addressItems.map((addressItem, i) => (
        <AddressItem
          key={i}
          country={addressItem.country}
          region={addressItem.region}
          num={i}
        />
      ))}
    </div>
  );
};

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAddress } from "../redux/addressSlice";
import { RootState } from "../redux/store";
import { addressType } from "../types";
import { AddressList } from "./AddressList";

export const AddAddress = () => {
  const list = useSelector((state: RootState) => state.listAddress.list);
  const [addressValues, setAddressValues] = useState({
    name: "",
    country: "",
    region: "",
    city: "",
    address: "",
    index: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddressValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const dispatch = useDispatch();
  function addAddressToList(address: addressType, e) {
    e.preventDefault();
    dispatch(addAddress(address));
  }
  return (
    <div className="h-full">
      <form
        className="flex flex-col justify-between gap-9"
        onSubmit={(e) => addAddressToList(addressValues, e)}
        action="submit"
      >
        <div className="flex flex-col gap-3">
          {" "}
          <input
            className="h-[50px] w-[500px] pl-4 bg-white border-2 focus:border-slate-500 border-slate-500 rounded-lg"
            type="text"
            value={addressValues.name}
            name="name"
            placeholder="Придумайте название"
            onChange={handleChange}
            required
          />
          <input
            className="h-[50px] w-[500px] pl-4 bg-white border-2 focus:border-slate-500 border-slate-500 rounded-lg"
            type="text"
            value={addressValues.country}
            name="country"
            placeholder="Страна"
            onChange={handleChange}
            required
          />
          <input
            className="h-[50px] w-[500px] pl-4 bg-white border-2 focus:border-slate-500 border-slate-500 rounded-lg"
            type="text"
            value={addressValues.region}
            name="region"
            placeholder="Область/регион"
            onChange={handleChange}
            required
          />
          <input
            className="h-[50px] w-[500px] pl-4 bg-white border-2 focus:border-slate-500 border-slate-500 rounded-lg"
            type="text"
            value={addressValues.city}
            name="city"
            placeholder="Город"
            onChange={handleChange}
            required
          />
          <input
            className="h-[50px] w-[500px] pl-4 bg-white border-2 focus:border-slate-500 border-slate-500 rounded-lg"
            type="text"
            value={addressValues.address}
            name="address"
            placeholder="Адрес"
            onChange={handleChange}
            required
          />
          <input
            className="h-[50px] w-[500px] pl-4 bg-white border-2 focus:border-slate-500 border-slate-500 rounded-lg"
            type="text"
            value={addressValues.index}
            name="index"
            placeholder="Почтовый индекс или пункт СДЕК"
            onChange={handleChange}
            required
          />
          <h3 className="text-2xl text-gray-700 mt-4">Мои адреса</h3>
          {list.length > 0 ? (
            <AddressList addressItems={list} />
          ) : (
            <h3 className="text-2xl text-red-700">Список адресов пуст</h3>
          )}
        </div>{" "}
        <button
          type="submit"
          className="border border-3 border-blue-500 bg-white  rounded-lg px-5 py-3 text-blue-500 font-semibold"
        >
          Добавить адрес
        </button>
      </form>
    </div>
  );
};

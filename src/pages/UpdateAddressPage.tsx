import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addressType } from "../types";
import { deleteAddress, updateAddress } from "../redux/addressSlice";
import { useState } from "react";

const UpdateAddressPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const index = Number(id);
  const list = useSelector((state: RootState) => state.listAddress.list);
  const address = list[index];
  const [addressValues, setAddressValues] = useState({
    name: address.name,
    country: address.country,
    region: address.region,
    city: address.city,
    address: address.address,
    index: address.index,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddressValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const dispatch = useDispatch();
  function handleUpdateAddress(address: addressType, e) {
    e.preventDefault();
    dispatch(updateAddress({ address, index }));
  }
  const deleteAddressItem = () => {
    dispatch(deleteAddress(index));
    alert("Адрес удален из списка!");
    navigate("/create");
  };
  return (
    <div className="h-screen">
      <div className="mb-10">
        <Link className=" text-blue-600" to="/">
          Вернуться на главную
        </Link>
      </div>
      <form
        className="flex flex-col justify-between h-3/4"
        onSubmit={(e) => handleUpdateAddress(addressValues, e)}
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
          <button
            type="button"
            onClick={deleteAddressItem}
            className="mt-4 w-full border border-3 border-red-500 bg-white  rounded-lg px-5 py-3 text-red-500 font-semibold"
          >
            Удалить адрес {address.name}
          </button>
        </div>{" "}
        <button
          type="submit"
          className="border border-3 border-blue-500 bg-white  rounded-lg px-5 py-3 text-blue-500 font-semibold"
        >
          Сохранить адрес
        </button>
      </form>
    </div>
  );
};

export default UpdateAddressPage;

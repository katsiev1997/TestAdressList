import { useNavigate } from "react-router-dom";
import { AddressRecipient } from "../components/AddressRecipient";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const HomePage = () => {
  const navigate = useNavigate();
  const list = useSelector((state: RootState) => state.listAddress.list);
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h3 className="text-2xl text-gray-500">Выберите адрес и получателя</h3>
      <AddressRecipient />
      {list.length === 0 && (
        <button
          onClick={() => navigate("/create")}
          className="bg-blue-500 rounded-lg px-5 py-3 text-white font-semibold"
        >
          Добавить адресс
        </button>
      )}
    </div>
  );
};

export default HomePage;

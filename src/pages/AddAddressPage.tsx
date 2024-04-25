import { AddAddress } from "../components/AddAddress";
import { Link } from "react-router-dom";


const AddAddressPage = () => {
  return (
    <div className="h-screen">
      <div className="mb-10">
        <Link className=" text-blue-600" to="/">
          Вернуться на главную
        </Link>
      </div>
      <AddAddress />
    </div>
  );
};

export default AddAddressPage;

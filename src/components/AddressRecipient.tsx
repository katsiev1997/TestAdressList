import { Link } from "react-router-dom";
import { RecipientItem } from "./RecipientItem";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const AddressRecipient = () => {
  const list = useSelector((state: RootState) => state.listAddress.list);
  const address = useSelector((state: RootState) => state.listAddress.chosenAddress);
  console.log(list);
  return (
    <div className="bg-white max-w-[400px] w-full rounded-xl">
      {list.length > 0 && (
        <div className="flex items-center justify-between h-20 px-5">
          <img className="w-10 h-10" src="./internet.png" alt="internet" />
          <div>
            <h4>{`${list[address].country}, ${list[address].region}`}</h4>
            <p>{list[address].name}</p>
          </div>
          <Link to={`/create`} className="text-gray-600">
            Изменить {">"}
          </Link>
        </div>
      )}
      <RecipientItem />
    </div>
  );
};

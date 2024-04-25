import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { chooseAddress } from "../redux/addressSlice";

export type AddressItem = {
  country: string;
  region: string;
  num: number;
};

type AddressItemProps = AddressItem;

export const AddressItem = ({ country, region, num }: AddressItemProps) => {
  const navigate = useNavigate();
  const address = useSelector((state: RootState) => state.listAddress.chosenAddress);
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between h-20 px-5">
      <img className="w-10 h-10" src="./internet.png" alt="internet" />
      <div>
        <h4>{`${country}, ${region}`}</h4>
        {address === num ? (
          <p>Выбрано</p>
        ) : (
          <button
            type="button"
            onClick={() => {
              dispatch(chooseAddress(num));
              navigate("/");
            }}
          >
            Выбрать
          </button>
        )}
      </div>
      <Link to={`/update/${num}`} className="text-gray-600">
        Изменить {">"}
      </Link>
    </div>
  );
};

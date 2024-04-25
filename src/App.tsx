import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AddressPage from "./pages/AddAddressPage";
import HomePage from "./pages/HomePage";
import { getChosenAddress, getListAddress } from "./redux/addressSlice";
import UpdateAddressPage from "./pages/UpdateAddressPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListAddress());
    dispatch(getChosenAddress());
  });
  return (
    <main className="bg-slate-100 h-full min-h-screen flex flex-col items-center">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<AddressPage />} />
        <Route path="/update/:id" element={<UpdateAddressPage />} />
      </Routes>
    </main>
  );
}

export default App;

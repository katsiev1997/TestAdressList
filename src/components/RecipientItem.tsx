export const RecipientItem = () => {
  return (
    <div className="flex items-center justify-between h-20 px-5 w-full">
      <img className="w-10 h-10" src="./badge.png" alt="badge" />
      <div>
        <h4>Афанасьев Сергей...</h4>
        <p>Получатель 1</p>
      </div>
      <button className="text-gray-600">Изменить {">"}</button>
    </div>
  );
};

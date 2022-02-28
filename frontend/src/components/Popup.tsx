import React from "react"
import { Link } from "react-router-dom";

interface IPopupProps {
  handleDeleteProduct(): void;
  setPopup(): React.Dispatch<React.SetStateAction<{
    show: boolean;
    id: null;}>>;
}
export default function Popup({handleDeleteProduct, setPopup}:IPopupProps) {
  return (
      <div className="fixed inset-0 z-50 overflow-auto bg-smoke-light flex">
      <div className="flex justify-between relative p-8 bg-white w-full max-w-md m-auto flex-col rounded-lg min-h-[14rem]">
        <h1 className="font-bold">Excluir Produto</h1>
        <p>Tem certeza que deseja excluir este produto?</p>
        <div className="flex justify-center gap-8 text-white">
        
          <button className="bg-black p-2 rounded-2xl"
             onClick={setPopup}>
                          Cancelar
                    </button>
          <button className="bg-blue p-2 rounded-2xl"
            onClick={handleDeleteProduct}
          >
                            Excluir
                    </button> 

        </div>
     </div>
   </div>
  )
}
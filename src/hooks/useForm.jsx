import { useState } from "react";

export const useForm = (initialState) => {
  //criando hook personalizado
  const [formulario, setFormulario] = useState(initialState);

  // onChange pra todo mundo
  const onChange = (event) => {
    // pega o name das propriedades
    const { name, value } = event.target;
    setFormulario({ ...formulario, [name]: value });
  };

  return [formulario, onChange];
};

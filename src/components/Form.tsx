import { useState } from "react";
import Client from "../core/Client";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
  client: Client;
  canceled?: () => void;
  clientChanged?: (client: Client) => void;
}

export default function Form(props: FormProps) {
  const id = props.client?.id;

  const [name, setName] = useState(props.client?.name ?? "");
  const [age, setAge] = useState(props.client?.age ?? 0);

  return (
    <div>
      {id && <Input readonly text="Código" value={id} className="mb-4" />}
      <Input
        text="Nome"
        value={name}
        onChange={setName}
        className="mb-4"
      ></Input>
      <Input text="Idade" type="number" value={age} onChange={setAge}></Input>
      <div className="flex justify-end mt-7">
        <Button
          color="blue"
          className="mr-2"
          onClick={() => props.clientChanged?.(new Client(name, +age, id))}
        >
          {id ? "Atualizar" : "Cadastrar"}
        </Button>
        <Button onClick={props.canceled}>Cancelar</Button>
      </div>
    </div>
  );
}

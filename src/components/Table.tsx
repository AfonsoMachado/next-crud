import Client from "../core/Client";
import { EditIcon, TrashIcon } from "./Icons";

interface TableProps {
  clients: Client[];
  selectedClient?: (client: Client) => void;
  deletedClient?: (client: Client) => void;
}

export default function Table(props: TableProps) {
  const showActions = props.selectedClient || props.deletedClient;

  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        {showActions && <th className="p-4">Ações</th>}
      </tr>
    );
  }

  function renderActions(client: Client) {
    return (
      <td className="flex justify-center">
        {props.selectedClient && (
          <button
            onClick={() => props.selectedClient?.(client)}
            className={`flex justify-center items-center text-green-600 rounded-full hover:bg-purple-50 p-2 m-1`}
          >
            {EditIcon}
          </button>
        )}
        {props.deletedClient && (
          <button
            onClick={() => props.deletedClient?.(client)}
            className={`flex justify-center items-center text-red-500 rounded-full hover:bg-purple-50 p-2 m-1`}
          >
            {TrashIcon}
          </button>
        )}
      </td>
    );
  }

  function renderBody() {
    return props.clients?.map((client, i) => {
      return (
        <tr
          className={`${i % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}`}
          key={client.id}
        >
          <td className="text-left p-4">{client.id}</td>
          <td className="text-left p-4">{client.name}</td>
          <td className="text-left p-4">{client.age}</td>
          {showActions && renderActions(client)}
        </tr>
      );
    });
  }

  return (
    <table className={`w-full rounded-xl overflow-hidden`}>
      <thead
        className={`
        text-gray-100
        bg-gradient-to-r from-purple-500 to-purple-800
      `}
      >
        {renderHeader()}
      </thead>
      <tbody>{renderBody()}</tbody>
    </table>
  );
}

import { useEffect, useState } from "react";
import Client from "../core/Client";
import ClientRepository from "../core/ClientRepository";
import ClientCollection from "../firebase/db/ClientCollection";
import useTableOrForm from "./useTableOrForm";

export default function useClients() {
  const repo: ClientRepository = new ClientCollection();

  const { tableVisible, showForm, showTable } = useTableOrForm();

  const [client, setClient] = useState<Client>(Client.empty());
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(getAll, []);

  function getAll() {
    repo.getAll().then((clients) => {
      setClients(clients);
      showTable();
    });
  }

  function selectedClient(client: Client) {
    setClient(client);
    showForm();
  }

  function newClient() {
    setClient(Client.empty());
    showForm();
  }

  async function deletedClient(client: Client) {
    await repo.delete(client);
    getAll();
  }

  async function saveClient(client: Client) {
    await repo.save(client);
    getAll();
  }

  return {
    saveClient,
    newClient,
    deletedClient,
    selectedClient,
    client,
    clients,
    tableVisible,
    showTable,
  };
}

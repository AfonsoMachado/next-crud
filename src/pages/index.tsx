import { useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";

export default function Home() {
  const [visible, setVisible] = useState<"table" | "form">("table");
  const [client, setClient] = useState<Client>(Client.empty());

  const clients = [
    new Client("Ana", 34, "1"),
    new Client("Bia", 23, "2"),
    new Client("Carlos", 54, "3"),
    new Client("Pedro", 37, "4"),
  ];

  function selectedClient(client: Client) {
    setClient(client);
    setVisible("form");
  }

  function newClient() {
    setClient(Client.empty());
    setVisible("form");
  }

  function deletedClient(client: Client) {
    console.log(client.name + "deleted");
  }

  function saveClient(client: Client) {
    console.log(client);
    setVisible("table");
  }

  return (
    <div
      className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}
    >
      <Layout title="Cadastro Simples">
        {visible === "table" ? (
          <>
            <div className="flex justify-end">
              <Button color="green" className="mb-4" onClick={newClient}>
                Novo Cliente
              </Button>
            </div>
            <Table
              clients={clients}
              selectedClient={selectedClient}
              deletedClient={deletedClient}
            ></Table>
          </>
        ) : (
          <Form
            client={client}
            canceled={() => setVisible("table")}
            clientChanged={saveClient}
          />
        )}
      </Layout>
    </div>
  );
}

import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";

export default function Home() {
  const clients = [
    new Client("Ana", 34, "1"),
    new Client("Bia", 23, "2"),
    new Client("Carlos", 54, "3"),
    new Client("Pedro", 37, "4"),
  ];

  function selectedClient(client: Client) {
    console.log(client.name + "selected");
  }

  function deletedClient(client: Client) {
    console.log(client.name + "deleted");
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
        <Table
          clients={clients}
          selectedClient={selectedClient}
          deletedClient={deletedClient}
        ></Table>
      </Layout>
    </div>
  );
}

import AdminPage from "@/components/AdminPage";

export default function Page() {
  return (
    <AdminPage
      title="Game Manage"
      description="Manage games, providers, game status and visibility."
      icon="Gamepad2"
      cards={[
    {
      Label: "Total Games",
      Value: "0",
      Icon: "Gamepad2",
    },    {
      Label: "Active Games",
      Value: "0",
      Icon: "CheckCircle",
    },    {
      Label: "Providers",
      Value: "0",
      Icon: "Radio",
    },
      ]}
    />
  );
}

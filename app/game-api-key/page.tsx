import AdminPage from "@/components/AdminPage";

export default function Page() {
  return (
    <AdminPage
      title="Game API Key"
      description="Manage API credentials used by your game integrations."
      icon="KeyRound"
      cards={[
    {
      Label: "API Keys",
      Value: "0",
      Icon: "KeyRound",
    },    {
      Label: "Active Keys",
      Value: "0",
      Icon: "CheckCircle",
    },    {
      Label: "Requests Today",
      Value: "0",
      Icon: "Activity",
    },
      ]}
    />
  );
}

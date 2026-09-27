import AdminPage from "@/components/AdminPage";

export default function Page() {
  return (
    <AdminPage
      title="Agents & Commission"
      description="Manage agents, commission rates and agent performance."
      icon="UserCog"
      cards={[
    {
      Label: "Total Agents",
      Value: "0",
      Icon: "Users",
    },    {
      Label: "Active Agents",
      Value: "0",
      Icon: "UserCheck",
    },    {
      Label: "Total Commission",
      Value: "৳0.00",
      Icon: "DollarSign",
    },
      ]}
    />
  );
}

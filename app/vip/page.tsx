import AdminPage from "@/components/AdminPage";

export default function Page() {
  return (
    <AdminPage
      title="VIP Settings"
      description="Manage VIP levels, requirements and rewards."
      icon="Crown"
      cards={[
    {
      Label: "VIP Levels",
      Value: "0",
      Icon: "Crown",
    },    {
      Label: "VIP Users",
      Value: "0",
      Icon: "Users",
    },    {
      Label: "VIP Rewards",
      Value: "৳0",
      Icon: "Gift",
    },
      ]}
    />
  );
}

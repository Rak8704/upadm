import AdminPage from "@/components/AdminPage";

export default function Page() {
  return (
    <AdminPage
      title="Daily Bonus Settings"
      description="Configure daily bonus rules and user eligibility."
      icon="Gift"
      cards={[
    {
      Label: "Bonus Status",
      Value: "Disabled",
      Icon: "Gift",
    },    {
      Label: "Daily Bonus",
      Value: "৳0",
      Icon: "DollarSign",
    },    {
      Label: "Eligible Users",
      Value: "0",
      Icon: "Users",
    },
      ]}
    />
  );
}

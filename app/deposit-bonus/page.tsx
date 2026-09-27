import AdminPage from "@/components/AdminPage";

export default function Page() {
  return (
    <AdminPage
      title="Deposit Bonus Settings"
      description="Configure deposit bonus percentages, limits and conditions."
      icon="BadgeCheck"
      cards={[
    {
      Label: "Bonus Status",
      Value: "Disabled",
      Icon: "BadgeCheck",
    },    {
      Label: "Bonus Rate",
      Value: "0%",
      Icon: "Percent",
    },    {
      Label: "Maximum Bonus",
      Value: "৳0",
      Icon: "DollarSign",
    },
      ]}
    />
  );
}

import AdminPage from "@/components/AdminPage";

export default function Page() {
  return (
    <AdminPage
      title="Settings"
      description="Manage general platform configuration."
      icon="Settings"
      cards={[
    {
      Label: "General",
      Value: "Configured",
      Icon: "Settings",
    },    {
      Label: "Payment",
      Value: "Configured",
      Icon: "Wallet",
    },    {
      Label: "Security",
      Value: "Configured",
      Icon: "ShieldCheck",
    },
      ]}
    />
  );
}

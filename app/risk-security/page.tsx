import AdminPage from "@/components/AdminPage";

export default function Page() {
  return (
    <AdminPage
      title="Risk & Security"
      description="Monitor security events, suspicious activity and risk controls."
      icon="ShieldAlert"
      cards={[
    {
      Label: "Risk Alerts",
      Value: "0",
      Icon: "AlertTriangle",
    },    {
      Label: "Blocked Users",
      Value: "0",
      Icon: "ShieldAlert",
    },    {
      Label: "Security Events",
      Value: "0",
      Icon: "Activity",
    },
      ]}
    />
  );
}

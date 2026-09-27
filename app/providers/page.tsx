import AdminPage from "@/components/AdminPage";

export default function Page() {
  return (
    <AdminPage
      title="Providers & API"
      description="Manage game providers and their API connections."
      icon="Radio"
      cards={[
    {
      Label: "Providers",
      Value: "0",
      Icon: "Radio",
    },    {
      Label: "Connected",
      Value: "0",
      Icon: "CheckCircle",
    },    {
      Label: "API Errors",
      Value: "0",
      Icon: "AlertTriangle",
    },
      ]}
    />
  );
}

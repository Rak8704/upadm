import AdminPage from "@/components/AdminPage";

export default function Page() {
  return (
    <AdminPage
      title="Audit Logs"
      description="Track administrative actions and important system events."
      icon="FileText"
      cards={[
    {
      Label: "Total Logs",
      Value: "0",
      Icon: "FileText",
    },    {
      Label: "Today",
      Value: "0",
      Icon: "Clock",
    },    {
      Label: "Admins Active",
      Value: "0",
      Icon: "Users",
    },
      ]}
    />
  );
}

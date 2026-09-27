import AdminPage from "@/components/AdminPage";

export default function Page() {
  return (
    <AdminPage
      title="Add Admin"
      description="Create and manage administrator accounts."
      icon="UserPlus"
      cards={[
    {
      Label: "Total Admins",
      Value: "0",
      Icon: "Users",
    },    {
      Label: "Active Admins",
      Value: "0",
      Icon: "UserCheck",
    },    {
      Label: "Roles",
      Value: "0",
      Icon: "ShieldCheck",
    },
      ]}
    />
  );
}

import AdminPage from "@/components/AdminPage";

export default function Page() {
  return (
    <AdminPage
      title="My Profile"
      description="Manage your administrator profile and account information."
      icon="UserCircle"
      cards={[
    {
      Label: "Account",
      Value: "Admin",
      Icon: "UserCircle",
    },    {
      Label: "Role",
      Value: "Administrator",
      Icon: "ShieldCheck",
    },    {
      Label: "Status",
      Value: "Active",
      Icon: "CheckCircle",
    },
      ]}
    />
  );
}

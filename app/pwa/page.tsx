import AdminPage from "@/components/AdminPage";

export default function Page() {
  return (
    <AdminPage
      title="PWA App"
      description="Configure the Progressive Web App settings."
      icon="Smartphone"
      cards={[
    {
      Label: "PWA Status",
      Value: "Disabled",
      Icon: "Smartphone",
    },    {
      Label: "Installations",
      Value: "0",
      Icon: "Download",
    },    {
      Label: "Version",
      Value: "1.0.0",
      Icon: "Info",
    },
      ]}
    />
  );
}

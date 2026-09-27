import AdminPage from "@/components/AdminPage";

export default function Page() {
  return (
    <AdminPage
      title="Live Support"
      description="Manage customer support conversations and support agents."
      icon="MessageCircle"
      cards={[
    {
      Label: "Open Chats",
      Value: "0",
      Icon: "MessageCircle",
    },    {
      Label: "Waiting",
      Value: "0",
      Icon: "Clock",
    },    {
      Label: "Support Agents",
      Value: "0",
      Icon: "Users",
    },
      ]}
    />
  );
}

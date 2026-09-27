import AdminPage from "@/components/AdminPage";

export default function Page() {
  return (
    <AdminPage
      title="Referral Management"
      description="Manage referral rules, commissions and referral activity."
      icon="Handshake"
      cards={[
    {
      Label: "Total Referrals",
      Value: "0",
      Icon: "Users",
    },    {
      Label: "Active Referrals",
      Value: "0",
      Icon: "UserCheck",
    },    {
      Label: "Referral Commission",
      Value: "৳0.00",
      Icon: "DollarSign",
    },
      ]}
    />
  );
}

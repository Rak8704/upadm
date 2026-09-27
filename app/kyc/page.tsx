import AdminPage from "@/components/AdminPage";

export default function Page() {
  return (
    <AdminPage
      title="KYC Verification"
      description="Review and manage user identity verification requests."
      icon="ShieldCheck"
      cards={[
    {
      Label: "Pending KYC",
      Value: "0",
      Icon: "Clock",
    },    {
      Label: "Verified",
      Value: "0",
      Icon: "BadgeCheck",
    },    {
      Label: "Rejected",
      Value: "0",
      Icon: "XCircle",
    },
      ]}
    />
  );
}

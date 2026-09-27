import AdminPage from "@/components/AdminPage";

export default function Page() {
  return (
    <AdminPage
      title="GGR Panel"
      description="Monitor game revenue, turnover and gross gaming revenue."
      icon="Activity"
      cards={[
    {
      Label: "Total Turnover",
      Value: "৳0.00",
      Icon: "TrendingUp",
    },    {
      Label: "Total Win",
      Value: "৳0.00",
      Icon: "TrendingDown",
    },    {
      Label: "GGR",
      Value: "৳0.00",
      Icon: "DollarSign",
    },
      ]}
    />
  );
}

import Cards from "../components/Cards";
import Footer from "../components/footer";
import Hero from "../components/hero";
import tenants from "@/tenants";

export default function Page({ params }: { params: { domain: string } }) {
  const { domain } = params;
  const cardsData = tenants[domain];
  if (!cardsData) {
    return <div>ERR 404</div>;
  }
  console.log(cardsData);
  const { color1, color2 } = cardsData;
  return (
    <div>
      <h1>Welcome to the {domain}</h1>
      <Hero heroData={{ color1, color2 }} />
      <Cards cardsData={cardsData} />
      <Footer />
    </div>
  );
}

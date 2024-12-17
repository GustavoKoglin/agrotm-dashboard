import Breadcrumb from "~/components/Breadcrumb";
import type { NextPage } from "next";

const BreadcrumbData = [
  {
    title: "Home",
    link: "/home",
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Breadcrumb data={BreadcrumbData} />

      <h3>Página Home</h3>
    </>
  );
};

export default Home;

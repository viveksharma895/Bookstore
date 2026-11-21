import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import List from "../../public/list.json"

function ContactPage() {

  console.log("List from list.json:", List);
  console.table(List);

  return (
    <>
      <Navbar />
      <Contact />
      <Footer />
    </>
  );
}

export default ContactPage;

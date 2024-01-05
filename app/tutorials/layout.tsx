import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div className="p-6">{children}</div>
      <Footer />
    </div>
  );
}

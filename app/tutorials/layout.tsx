import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div className="p-6">
        <section className="relative mx-auto max-w-screen-lg px-4 py-4 md:py-10">
          <div className="container mx-auto px-6 text-center flex flex-col items-center">
            {children}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

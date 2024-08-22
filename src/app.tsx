import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { MulchGarden } from "./components/mulch-garden";
import { PelletsBBQ } from "./components/pellets-bbq";
import { PelletsHome } from "./components/pellets-home";
import { ContactUs } from "./components/contact-us";
import { MaterialPlayground } from "./components/material-playground";

const data = [
  {
    category: "Product",
    title: "Mulch for your garden.",
    src: "/images/stock/watering-plant.jpg",
    content: <MulchGarden />,
  },
  {
    category: "Product",
    title: "Material for your playground.",
    src: "/images/stock/boy-on-swing.jpg",
    content: <MaterialPlayground />,
  },
  {
    category: "Product",
    title: "Pellets for your BBQ.",
    src: "/images/stock/grilled-meat-with-fire.jpg",
    content: <PelletsBBQ />,
  },
  {
    category: "Product",
    title: "Pellets for your home.",
    src: "/images/stock/living-room-with-chair.jpg",
    content: <PelletsHome />,
  },
  {
    category: "Support",
    title: "Contact us.",
    src: "/images/stock/person-with-white-smartphone.jpg",
    content: <ContactUs />,
  },
];

export function App() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Attica Package Company Inc.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

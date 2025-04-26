"use client";
import { useState, useEffect } from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data"; // Assuming your gridItems data is available

const Grid = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This will ensure the component only renders on the client-side
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Return nothing on the server side or during the initial render
  }

  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;

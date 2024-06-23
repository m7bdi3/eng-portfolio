import React from "react";

const testimonials = [
  {
    author: {
      name: "Sheryl Berge",
      role: "CEO at Lynch LLC",
      image: "/interior.jpg",
    },
  },
  {
    author: {
      name: "Amy Hahn",
      role: "Director at Velocity Industries",
      image: "/interior.jpg",
    },
  },

  {
    author: {
      name: "Leland Kiehn",
      role: "Founder of Kiehn and Sons",
      image: "/interior.jpg",
    },
  },
  {
    author: {
      name: "Erin Powlowski",
      role: "COO at Armstrong Inc",
      image: "/interior.jpg",
    },
  },

  {
    author: {
      name: "Peter Renolds",
      role: "Founder of West Inc",
      image: "/interior.jpg",
    },
  },
  {
    author: {
      name: "Peter Renolds",
      role: "Founder of West Inc",
      image: "/interior.jpg",
    },
  },
];

export const Team = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center">
      <>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="text-3xl tracking-tighter sm:text-6xl">
            <span className="bg-gradient-to-br from-amber-600 to-primary bg-clip-text text-transparent">
              Best
            </span>{" "}
            Engineers worldwide.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-gray-300 font-geist">
            Our software is so simple that people can’t help but fall in love
            with it. Simplicity is easy when you just skip tons of
            mission-critical features.
          </p>
        </div>
        <ul
          role="list"
          className="mt-16 grid grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:grid-cols-3 md:grid-cols-2"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <div
                className="rounded-2xl h-[400px] w-full flex flex-col justify-end"
                style={{
                  backgroundImage: `url(${column.author.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="mt-6 flex justify-start h-fit border-t self-end w-full">
                  <div className="flex flex-col bg-primary w-full p-6 rounded-b-2xl">
                    <h2 className="font-display text-lg text-gray-100">
                      {column.author.name}
                    </h2>
                    <p className="mt-1 text-sm">{column.author.role}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </>
    </div>
  );
};

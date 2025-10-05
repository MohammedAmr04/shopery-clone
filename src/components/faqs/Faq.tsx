import React, { useState } from "react";

type FaqItem = {
  id: number;
  title: string;
  content: string;
};

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    title: "In elementum est a ante sodales iaculis.",
    content:

    "Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae."
  },
  {
    id: 2,
    title: "Etiam lobortis massa eu nibh tempor elementum.",
    content:
      "Donec a eros a non massa vulputate ornare. Vivamus ornare commodo arcu, at commodo felis congue vitae.",
  },
  {
    id: 3,
    title: "In elementum est a ante sodales iaculis.",
    content:
      "Vivamus at nunc lacinia, luctus lacus vel, accumsan dolor. Aenean nec odio id turpis mattis congue.",
  },
  {
    id: 4,
    title: "Aenean quis quam nec lacus semper dignissim.",
    content:
      "Nullam at urna sed justo feugiat imperdiet. Integer vitae velit ut augue efficitur tristique.",
  },
  {
    id: 5,
    title: "Nulla tincidunt eros id tempus accumsan.",
    content:
      "Curabitur non arcu sed leo dignissim fringilla. Suspendisse potenti. Aliquam erat volutpat.",
  },
];

const Faq: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const handleToggle = (id: number) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:py-16">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        {/* Left: Title + FAQs */}
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
            Welcome, Let’s Talk About Our Ecobazar
          </h2>

          <div className="mt-6 space-y-3">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`rounded-md ${
                    isOpen ? "border border-success text-success" : "bg-gray-100 text-gray-900"
                  }`}
                >
                  <button
                    type="button"
                    className={`flex w-full items-center justify-between gap-4 px-4 py-3 text-left ${isOpen? "border border-success text-success" : "text-gray-900"}`}
                    onClick={() => handleToggle(item.id)}
                  >
                    <span className={`text-sm font-medium`}>{item.title}</span>
                    <span
                      className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs ${
                        isOpen
                          ? "border-success text-success bg-gray-100"
                          : "bg-white text-gray-900"
                      }`}
                      aria-hidden
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs leading-5 text-gray-600 mt-2">
                      {item.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="hidden md:block">
          <div className="w-full">
            <img src="Image.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

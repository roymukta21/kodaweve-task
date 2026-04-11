import React from 'react';

const ServicesSection = () => {
  const cards = [
    {
      title: "Design & Development",
      color: "bg-red-50",
      borderColor: "border-red-100",
      iconColor: "text-red-500",
      items: ["UI/UX Design", "Responsive Web Design", "Interactive Prototypes", "Design Systems"],
      floatingIcon: "📢", // Ekhane image tag use korte paren
    },
    {
      title: "Visual Design",
      color: "bg-cyan-50",
      borderColor: "border-cyan-100",
      iconColor: "text-cyan-500",
      items: ["High-end Visuals", "Marketing Assets", "Custom Illustrations", "Website Assets"],
      floatingIcon: "🧊",
    },
    {
      title: "Dev",
      color: "bg-purple-50",
      borderColor: "border-purple-100",
      iconColor: "text-purple-500",
      items: ["Framer", "Nuxt", "Webflow", "Front-end"],
      floatingIcon: "💻",
    }
  ];

  return (
    <section className="py-20 px-6 bg-white text-center">
      {/* Header Section */}
      <div className="max-w-3xl mx-auto mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Web projects that create meaningful impact
        </h1>
        <p className="text-gray-500 text-lg leading-relaxed">
          We plan, design, and refine websites that feel calm, confident, and commercially useful.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className={`relative p-10 rounded-3xl border ${card.borderColor} ${card.color} text-left transition-transform hover:scale-105`}
          >
            {/* Floating 3D Icon Placeholder */}
            <div className="absolute -top-6 -right-4 text-5xl filter drop-shadow-lg">
              {card.floatingIcon}
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-6">{card.title}</h3>
            
            <ul className="space-y-4">
              {card.items.map((item, idx) => (
                <li key={idx} className="flex items-center text-gray-700 font-medium">
                  <span className={`mr-3 ${card.iconColor}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
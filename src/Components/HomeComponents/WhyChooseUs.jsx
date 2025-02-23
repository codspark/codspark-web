export default function WhyChooseUs() {
    const features = [
      {
        title: "Expert Mentors",
        description:
          "Learn from industry professionals with years of experience in their fields.",
        icon: "⭐",
      },
      {
        title: "Career Growth",
        description:
          "Accelerate your career with programs tailored for high-impact roles.",
        icon: "🚀",
      },
      {
        title: "Practical Learning",
        description:
          "Hands-on projects to ensure you gain real-world skills and knowledge.",
        icon: "📚",
      },
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-accent mb-4">Why Choose Us?</h2>
          <p className="text-gray-600 mb-8">
            We bring you the best programs designed to help you succeed in your career.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center border"
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
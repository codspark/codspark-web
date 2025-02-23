export default function FeaturesSection() {
    const features = [
      {
        title: "Email Notifications",
        description:
          "Receive notifications about important events such as upcoming deadlines, new assignments, and changes to your schedule.",
        img: "/images/email.png",
      },
      {
        title: "Simple Interface",
        description:
          "Our simple interface makes it easy to use and navigate. The information is presented clearly and concisely.",
        img: "/images/interface.png",
      },
      {
        title: "Large Community",
        description:
          "We believe in networking and connecting with other interns who share similar interests.",
        img: "/images/community.png",
      },
      {
        title: "Deadline Reminders",
        description:
          "We send timely reminders via email and Telegram to help you manage your tasks and deadlines effectively.",
        img: "/images/deadlines.png",
      },
    ];
  
    return (
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Features</h2>
          <p className="text-gray-600 mb-8">
            These are just some of our features. By providing these features, we can make a
            valuable resource for students looking for internships.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-4"
              >
                {/* <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-16 h-16 object-contain"
                /> */}
                <div className="text-left text-center">
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
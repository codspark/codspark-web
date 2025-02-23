export default function CommunitySection() {
    const communities = [
      { count: "400K+", label: "LinkedIn community" },
      { count: "130K+", label: "Telegram community" },
      { count: "30K+", label: "Instagram community" },
      { count: "8K+", label: "Facebook community" },
    ];
  
    return (
      <section className="bg-background py-16">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-900">Our Growing Online Community</h2>
          <p className="text-gray-600 mt-2">
            Connect with a community of individuals who share your vision, unlocking boundless opportunities and fostering personal growth as you pursue success.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">
            {communities.map((community, index) => (
              <div key={index}>
                <p className="text-2xl font-bold text-accent">{community.count}</p>
                <p className="text-gray-500">{community.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
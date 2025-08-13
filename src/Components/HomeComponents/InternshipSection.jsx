import { Button } from "../ui/button";

export default function InternshipSection() {
  const internships = [
    { title: "Web Development", img: "intern1.gif" },
    { title: "Android Development", img: "intern2.gif" },
    { title: "Data Science", img: "intern3.gif" },
    { title: "Java Programming", img: "intern4.jpg" },
    { title: "C++ Programming", img: "intern5.jpg" },
    { title: "Python Programming", img: "intern6.png" },
    { title: "UI/UX Design", img: "intern7.gif" },
    { title: "Artificial Intelligence", img: "intern8.gif" },
    { title: "Machine learning", img: "intern9.gif" },
    { title: "Flutter Developer", img: "intern10.gif" },
    { title: "ReactJS Developer", img: "intern11.gif" },
    { title: "JavaScript Developer", img: "intern12.gif" },
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 ">INTERNSHIPS WE OFFER!</h2>
        <div className="flex justify-center mb-8">
          <div className="bg-accent w-40 h-1"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {internships.map((internship, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-center">
              <img src={internship.img} alt={internship.title} className="w-full h-40 object-contain mx-auto" />
              <h3 className="text-sm lg:text-lg font-semibold mt-4">{internship.title}</h3>
              <a href="https://forms.gle/ivkdnHNtT4RM4uha7" target="_blank" rel="noopener noreferrer">
                <Button className="rounded-full mt-4">
                  Apply
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

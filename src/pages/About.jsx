import Stats from "../components/Stats";

const About = () => {
  return (
    <div className="bg-black text-white px-6 py-20 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>

      <p className="text-gray-400 mb-10">
        We help businesses grow with modern digital solutions and cutting-edge technology.
      </p>

      <Stats />

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p className="text-gray-400">
          To become a global leader in digital innovation.
        </p>
      </div>
    </div>
  );
};

export default About;
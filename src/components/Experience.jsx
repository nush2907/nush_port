import React from "react";

const Experience = () => {
  const techs = [
    {
      id: 1,
      title: "UI/UX",
      content: "Experienced in creating wireframes and interactive prototypes to visualize and iterate on design concepts. I use tools like Figma and Adobe XD to bring ideas to life.",
    },
    {
      id: 2,
      title: "HTML & CSS",
      content: "Proficient in creating responsive and visually appealing web pages using HTML and CSS. I pay attention to details, ensuring a seamless user experience across different devices.",
    },
    {
      id: 3,
      title: "JavaScript",
      content: "I leverage frameworks like React.js for building interactive and dynamic user interfaces, providing a smooth user experience.",
    },
    {
      id: 4,
      title: "Node.js",
      content: "Experienced in server-side development with Node.js. I build scalable and efficient backends, leveraging tools like Express.js and integrating with databases such as MongoDB.",
    },
    {
      id: 5,
      title: "React",
      content: "Adept at developing robust and modular applications with React. I follow best practices, utilize state management solutions, and integrate APIs to create seamless and interactive user interfaces.",
    },
    {
      id: 6,
      title: "Machine Learning",
      content: "Familiar with machine learning concepts and tools, including Pandas and TensorFlow. I have worked on projects involving multiple ML algoritms like Bayes Theorem, Random Forest etc.",
    },
    {
      id: 7,
      title: "Deep Learning & Machine Vision",
      content: "Familiar with deep learning concepts like creating CNNs. I have worked on projects involving VGG16/ VGG19/ ResNet models and OpenCv module for Segmentation and image classification.",
    },
    {
      id: 8,
      title: "Product Development",
      content: "I have a basic understanding of SDLCs and Product cycle and various steps involed in creating a product right from Research to Deployment.",
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white via-white to-blue-300 text-black w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 text-black p-2 inline">
            Professional Experience
          </p>
          <p className="py-6 text-black">
          Having hands-on experience, I've adeptly utilized a diverse set of technologies in my professional endeavors, Here are some of them.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-black text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, title, content }) => (
            <div
              key={id}
              className="w-60 h-60 border-4 border-orange-500 rounded-md p-4"
            >
              <p className="text-lg font-bold mb-2">{title}</p>
              <p className="text-sm">{content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-white via-white to-blue-300 text-black"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <p className="text-xl mt-20">
        I am currently a pre final year student in Vellore Institute of Technology, Chennai. I am pursuing Computer Science Engineering with specialization in Artificial Intelligence and Machine Learning. I am working towards becoming a Full-Stack Developer and also I have keen interest towards AI and ML projects and research. I am also an UI/UX Researcher and I love to make designs.
        </p>

        <br />

        <p className="text-xl">
        I am currently building many small projects to enhance my knowledge and I am also undergoing many courses to gain hands on experience in my fields of interests.

        </p>
      </div>
    </div>
  );
};

export default About;




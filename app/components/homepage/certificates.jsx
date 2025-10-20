"use client";

export default function Certificates() {
  const certificates = [
    {
      title: "Software Engineering Job simulation",
      issuer: "JP Morgan CHASE & CO.",
      date: "July 2024",
      image: "/certificates/software.jpg",
      link: "https://drive.google.com/file/d/1on4hgtc7Q8F80TgAHqLdx2MsiQ5YpM40/view?usp=sharing",
    },
    {
      title: "Data Visualisation",
      issuer: "Tata Group",
      date: "July 2024",
      image: "/certificates/data visualozation.jpg",
      link: "https://drive.google.com/file/d/1WLMir0iMHU0iu-qNzZEzJ5yC4faAR1Pp/view?usp=sharing",
    },
    {
      title: "CyberSecurity Job Stimualtion",
      issuer: "JP MORGAN CHASE & CO.",
      date: "July 2024",
      image: "/certificates/cybersecurity.jpg",
      link: "https://drive.google.com/file/d/1N9hfANgKvN4GaRpbD7y100Qt4erUEaos/view?usp=sharing",
    },
    {
      title: "Technology Job Stimulation",
      issuer: "Deloitte",
      date: "July 2024",
      image: "/certificates/Deloitte .jpg",
      link: "https://drive.google.com/file/d/1eggORUf9spSR25Ox0jweu3-Z2jXS2ajm/view?usp=sharing",
    },
    {
      title: "CREDTECH HACKATHON",
      issuer: "IIT KANPUR ",
      date: "August 2025",
      image: "/certificates/IIT KANPUR.jpg",
      link: "https://drive.google.com/file/d/1USds17pKCVgntw-uOQTU2_rtacSS5ptk/view?usp=sharing",
    },
    {
      title: "CodeClash: The August Arena",
      issuer: "CodeClash",
      date: "August 2025",
      image: "/certificates/codeclash.jpg",
      link: "https://drive.google.com/file/d/1afKKu-LMLKkn7r5dBu_A9P-V_Uwj-h1h/view?usp=sharing",
    },
    {
      title: "Code For Bharat Season 2",
      issuer: "Tech Master India",
      date: "September 2025",
      image: "/certificates/tech master.jpg",
      link: "https://drive.google.com/file/d/1JFpdmLtl550e38TmuRg6lSy6bNFjeZ9F/view?usp=sharing",
    },
    {
      title: "Pathway X Iota Cluster Gen AI Hackathon",
      issuer: "IIT Ropar",
      date: "October 2025",
      image: "/certificates/Ropar.jpg",
      link: "https://drive.google.com/file/d/1MkYY5VfQGHNPSYrzHK9FZ_jTikGEA9EU/view?usp=sharing",
    },
  ];

  return (
    <section className="py-16" id="certificates">
      {/* Title */}
      <div className="flex justify-center mb-10">
        <div className="flex items-center">
          <span className="w-20 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            Certificates
          </span>
          <span className="w-20 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* 4 per row grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-12 lg:px-20">
        {certificates.map((cert, i) => (
          <div
            key={i}
            className="bg-[#1a1443] text-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform transition-transform hover:scale-105"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-44 object-cover" // 👈 medium-short image height
            />
            <div className="p-4 text-center">
              <h3 className="text-base font-semibold mb-2">{cert.title}</h3>
              <p className="text-sm opacity-80 mb-1">Issued by: {cert.issuer}</p>
              <p className="text-sm opacity-70 mb-3">Date: {cert.date}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors text-sm"
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

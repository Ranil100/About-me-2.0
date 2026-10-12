import Image from "next/image";
import ArrowRightUp from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import Github from "@/assets/icons/github.svg";


const portfolioProjects = [
  {
    company: "Self Project",
    year: "2026",
    title: "FLASH - AI Interview Agent Platform",
    description:
      "Full-stack interview automation platform with a scalable FastAPI backend and a Next.js + Streamlit frontend. Custom RAG pipelines using Pinecone vector search for real-time, low-latency LLM-powered query resolution.",
    repo: "https://github.com/Ranil100/flash-final",
    live: "flash-web-1tfa.onrender.com",
    image: grainImage,
    techStack: ["Next.js", "Streamlit", "Python", "FastAPI", "Pinecone", "RAG"],
  },
  {
    company: "Self Project",
    year: "2026",
    title: "Intelligent Document Q&A API",
    description:
      "REST API that extracts and chunks PDF text, generates embeddings, and indexes them in ChromaDB for retrieval. Grounded /ask endpoint using the Gemini API that returns answers with source metadata and graceful fallback handling.",
    repo: "https://github.com/Ranil100/a-RAG-app",
    live: "https://github.com/Ranil100/a-RAG-app",
    image: grainImage,
    techStack: ["FastAPI", "ChromaDB", "PyMuPDF", "Gemini API"],
  },
  {
    company: "Self Project",
    year: "2025",
    title: "Fleetfit",
    description:
      "Modular, high-performance REST API backend for gym management and fitness tracking. Modeled relational data (user profiles, workouts, membership subscriptions) with SQLAlchemy; load-tested and optimized endpoints for data consistency.",
    repo: "https://github.com/Ranil100/fleetfit",
    live: "https://github.com/Ranil100/fleetfit",
    image: grainImage,
    techStack: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL"],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24 ">
      <div className="container px-5 mx-auto lg:max-w-5xl">
        <h2 className="font-calistoga text-3xl md:5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto">
          Project I have built now on
        </p>
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, i) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl overflow-hidden z-0 after:z-10 after:content-[''] after:absolute after:inset-0  after:outline-2  after:-outline-offset-2 after:rounded-3xl after:outline-white/20
              px-8 pt-8 md:pt-12 lg:pt-16 lg:px-20 md:px-10 after:pointer-events-none sticky top-20" style={{
                top: '48px',
              }}
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{ backgroundImage: `url(${grainImage.src})` }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-linear-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-calistoga text-2xl md:text-4xl mt-2 md:mt-4">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-1 md:mt-2 lg:mt-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block bg-white/10 text-white/50 hover:text-white/80 transition-all duration-300 ease-in-out text-sm font-medium px-4 py-2 rounded-lg mt-4"
                      >
                        {tech}
                      </span>
                    ))}</div>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <p className="text-sm md:text-base  text-white/50 mt-4 md:mt-5">
                    {project.description}
                  </p>
                  <div className="flex w-full gap-4">
                    <a
                      href={project.live}
                      className="flex-1 sm:hover:flex-[1.2] transition-all duration-300 ease-in-out"
                    >
                      <button className="bg-white hover:text-gray-800 hover:bg-white/80 transition-all duration-300 ease-in-out text-gray-950 h-12 w-full px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                        View Live <ArrowRightUp className="hidden md:block" />
                      </button>
                    </a>
                    <a
                      href={project.repo}
                      className="flex-1  sm:hover:flex-[1.2] transition-all duration-500 ease-in-out"
                    >
                      <button className="bg-white hover:text-gray-800 hover:bg-white/80 transition-all duration-300 ease-in-out  text-gray-950 h-12 w-full  px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                        Github <Github className="size-5 hidden md:block" />
                      </button>
                    </a>
                  </div>
                </div>

                <div className="relative">
                  <Image
                    className="mt-8 -mb-4 md:mb-0 rounded-[19px] lg:rounded-[25px] md: lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none "
                    src={project.image}
                    alt={project.title}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

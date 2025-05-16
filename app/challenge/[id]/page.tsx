"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Project {
  title: string;
  techstack: string[];
  description: string;
}

const ChallengePage: React.FC = () => {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [imageType, setImageType] = useState<"desktop" | "tablet" | "mobile">(
    "desktop"
  );

  const handleClick = (type: "desktop" | "tablet" | "mobile") => {
    setImageType(type);
  };

  const getImageSize = (type: string) => {
    switch (type) {
      case "desktop":
        return { width: 1, height: 1 };
      case "tablet":
        return { width: 1, height: 0.5 };
      case "mobile":
        return { width: 0.5, height: 0.98 };
      default:
        return { width: 1, height: 1 };
    }
  };

  const { width, height } = getImageSize(imageType);

  useEffect(() => {
    if (!id || Array.isArray(id)) return;

    const fetchProject = async () => {
      try {
        const response = await fetch("/data/data.json");
        const data: Project[] = await response.json();
        const selectedProject = data[parseInt(id) - 1];
        setProject(selectedProject || null);
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="flex items-center relative w-full min-h-screen p-4 bg-gray-50">
      <div className="flex flex-col md:flex-row border max-w-[1200px] mx-auto w-full border-gray-200 rounded-2xl px-2 py-4 bg-white">
        <div className="relative items-center justify-between flex flex-1 flex-col order-1 md:order-2">
          <div className="w-full max-w-[600px] aspect-square flex items-center justify-center bg-gray-100 rounded-lg mx-auto">
            {/* unnecessary */}
            <Image
              src={`https://picsum.photos/${Math.round(
                width * 600
              )}/${Math.round(height * 600)}?random=600`}
              width={Math.round(width * 600)}
              height={Math.round(height * 600)}
              alt="image filler"
              className=""
            />
          </div>
          <div className="relativ bottom-0 flex justify-center mt-3">
            <button
              className="btn px-3 py-1 text-base sm:text-lg"
              onClick={() => handleClick("desktop")}
            >
              Desktop
            </button>
            <button
              className="btn ml-2 sm:ml-5 px-3 py-1 text-base sm:text-lg"
              onClick={() => handleClick("tablet")}
            >
              Tablet
            </button>
            <button
              className="btn ml-2 sm:ml-5  px-3 py-1 text-base sm:text-lg"
              onClick={() => handleClick("mobile")}
            >
              Mobile
            </button>
          </div>
        </div>
        <div className="flex flex-1 flex-col order-2 md:order-1">
          <h1 className="text-3xl font-medium mb-5 font-barlow">
            {project.title}
          </h1>
          <p>{project.description}</p>
          <strong>Tech Stack:</strong> {project.techstack.join(", ")}
        </div>
      </div>
    </div>
  );
};

export default ChallengePage;

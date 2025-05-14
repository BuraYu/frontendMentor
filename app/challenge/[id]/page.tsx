"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Project {
  title: string;
  techstack: string[];
  description: string;
}

const ChallengePage: React.FC = () => {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id || Array.isArray(id)) return;
    
    const fetchProject = async () => {
      try {
        const response = await fetch("/data/data.json");
        console.log(response);
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
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <strong>Tech Stack:</strong> {project.techstack.join(", ")}
    </div>
  );
};

export default ChallengePage;


import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import ProjectsContainer from "./container";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export const revalidate = 2; // revalidate this page every 60 seconds

const query = groq`*[_type == 'projects']{title, description, images[]{asset -> {url}}}`;

export default async function Projects() {
  const projects = await client.fetch(query);
  return (
    <div className="">
      <ProjectsContainer projects={projects} />
    </div>
  );
}

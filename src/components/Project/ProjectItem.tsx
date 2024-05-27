import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import Links from "./Links";

import { ProjectProps } from "@/types";

const ProjectItem = ({
  name,
  description,
  repoUrl,
  webUrl,
  period,
  stack,
  markdown,
  imgSrc,
}: ProjectProps) => {
  const dict: Record<string, string> = {
    "spring boot":"https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=Spring&logoColor=white",
    "java":"https://img.shields.io/badge/java-007396?style=for-the-badge&logo=OpenJDK&logoColor=white",
    "spring security":"https://img.shields.io/badge/Spring Security-6DB33F?style=for-the-badge&logo=Spring Security&logoColor=white",
    "nginx":"https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white",
    "redis":"https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=Redis&logoColor=white",
    "ec2":"https://img.shields.io/badge/Amazon%20EC2-FF9900?style=for-the-badge&logo=Amazon%20EC2&logoColor=white",
    "s3":"https://img.shields.io/badge/Amazon%20S3-569A31?style=for-the-badge&logo=Amazon%20S3&logoColor=white",
    "elastic search":"https://img.shields.io/badge/Elasticsearch-005571?style=for-the-badge&logo=Elasticsearch&logoColor=white",
    "python":"https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white",
    "react":"https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white",
    "nextjs":"https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white",
    "mariadb":"https://img.shields.io/badge/mariadb-003545?style=for-the-badge&logo=mariadb&logoColor=white",
    "jenkins":"https://img.shields.io/badge/jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white",
    "docker":"https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white",
    "kafka":"https://img.shields.io/badge/apachekafka-231F20?style=for-the-badge&logo=apachekafka&logoColor=white"
  
  }
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-0">
      <div className="flex flex-col gap-2">
        <div className="flex md:flex-col items-center md:items-start mr-4 gap-6">
          {imgSrc && (
            <Image
              src={imgSrc}
              width="200"
              height="200"
              alt={name}
              className="object-cover rounded-lg border-[1px] border-GRAY_LIGHT dark:border-white border-solid w-24 h-24"
            />
          )}
          <div className="flex flex-col gap-2">
            <div className="w-48">
              <h3>{name}</h3>
              <div className="flex flex-col">
                <span>{`${period[0]} - ${period[1]}`}</span>
              </div>
            </div>
            <Links repoUrl={repoUrl} webUrl={webUrl} />
          </div>
        </div>
      </div>
      <div className="md:border-GRAY_LIGHT md:border-solid md:border-l-[1px] md:pl-4 markdown flex flex-col w-full gap-2">
        <div>
          <blockquote className="whitespace-pre-wrap">{`${description}`}</blockquote>
          <div className="flex gap-1 flex-wrap">
          
            {stack.map((stack) => (
              <div key={stack} className="flex items-center h-8">
              <img
              src={dict[stack]}
              width="20"
              height="5"
              alt={name}
              className="object-fit rounded-lg border-[1px] border-GRAY_LIGHT dark:border-white border-solid w-20 h-7"
            />
            </div>
            ))}
            
          </div>
        </div>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown ?? ""}</ReactMarkdown>
      </div>
    </div>
  );
};

export default ProjectItem;

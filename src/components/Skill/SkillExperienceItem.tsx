import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { SkillExperienceProps } from "@/types";

const SkillExperienceItem = ({ name, level, markdown, imgSrc }: SkillExperienceProps) => {
  
  const renderingStar = (level : number) => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < level) {
        stars.push(
          <Image
            key={i}
            src="/images/etc/star.png"
            alt="Filled Star"
            width={24}
            height={20}
          />
        );
      } else {
        stars.push(
          <Image
            key={i}
            src="/images/etc/empty_star.png"
            alt="Empty Star"
            width={24}
            height={20}
          />
        );
      }
    }
    return <div className="flex row">{stars}</div>;
  }


  return (
    <div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-0">
        <div className="flex md:flex-col items-center md:items-start mr-4 gap-6">
          {imgSrc && (
            <Image
              src={imgSrc}
              width="200"
              height="200"
              alt={name}
              className="object-cover rounded-lg border-[1px] border-GRAY_LIGHT border-solid w-24 h-24"
            />
          )}
          <div className="flex flex-col w-48">
            <h3>{name}</h3>
            <div className="flex flex-row pt-2 ">
              {renderingStar(level)}
            </div>
          </div>
        </div>
        <div className="md:border-GRAY_LIGHT md:border-solid md:border-l-[1px] md:pl-4 markdown w-full">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown ?? ""}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default SkillExperienceItem;

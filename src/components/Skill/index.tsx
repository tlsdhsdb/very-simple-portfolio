import SectionTitle from "../SectionTitle";
import SkillExperienceItem from "./SkillExperienceItem";

import { DataProps } from "@/types";



const SkillExperience = ({ skillExperience }: Pick<DataProps, "skillExperience">) => {
  return (
    <div>
      <SectionTitle>Skill Experience</SectionTitle>
      <div className="flex flex-col gap-24">
        {[...skillExperience].map((experience) => (
          <SkillExperienceItem key={experience.id} {...experience} />
        ))}
      </div>
    </div>
  );
};

export default SkillExperience;

import ContactItem from "../ContactItem";
import Introduce from "./Introduce";
import Image from "next/image";

import { DataProps } from "@/types";

const Information = ({ information }: Pick<DataProps, "information">) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="relative flex shrink gap-8 items-start">
          <div className="hidden md:block relative w-40 shrink-0 h-40">
            <Image
              src="/images/profile/profile.jpg"
              width="400"
              height="400"
              alt="증명사진"
              className="object-cover rounded-full border-[1px] border-GRAY_LIGHT dark:border-white border-solid w-40 h-40"
            />
            <div className="hidden md:block relative w-40 shrink-0 h-40"></div>
          </div>

          <div className="flex flex-col w-full">
            <h1 className="leading-[1.15]">
              {/* 포지션에 맞게 문구를 수정해주세요. 혹은, 본인이 원하는 대로 문구를 바꿔주세요. */}
              안녕하세요,
              <br /> 백엔드 개발자{" "}
              <span className="text-PRIMARY font-semibold">{information.name}</span>
              입니다.
            </h1>
            <div className="flex gap-1">
              {information.contact.map((contact) => (
                <ContactItem
                  key={contact.id}
                  className="text-BLACK hover:text-PRIMARY_HEAVY dark:hover:text-PRIMARY_HEAVY"
                  {...contact}
                >
                  {contact.name}
                </ContactItem>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-8 items-start">
        <Introduce markdown={information.markdown} />
      </div>
    </div>
  );
};

export default Information;

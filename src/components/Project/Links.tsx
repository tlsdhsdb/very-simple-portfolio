import GithubIcon from "@/assets/images/github.svg";
import WebIcon from "@/assets/images/web.svg";
import WikiIcon from "@/assets/images/wiki.svg";

const Links = ({ repoUrl, webUrl,wikiUrl }: { repoUrl: string; webUrl: string | undefined; wikiUrl : string | undefined}) => {
  return (
    <div className="flex gap-1">
      <a target="_blank" rel="noreferrer" href={repoUrl} className="w-fit">
        <GithubIcon className="hover:text-PRIMARY_HEAVY dark:hover:text-GRAY_HEAVY md:fill-current fill-BLACK dark:fill-white" />
      </a>
      {webUrl && (
        <a target="_blank" rel="noreferrer" href={webUrl} className="w-fit">
          <WebIcon className="hover:text-PRIMARY_HEAVY dark:hover:text-GRAY_HEAVY md:fill-current fill-BLACK dark:fill-white" />
        </a>
      )}
      {
        wikiUrl && (
          <a target="_blank" rel="noreferrer" href={wikiUrl} className="w-fit">
            <WikiIcon className="hover:text-PRIMARY_HEAVY dark:hover:text-GRAY_HEAVY md:fill-current fill-BLACK dark:fill-white" />
          </a>
        )
      }
    </div>
  );
};

export default Links;

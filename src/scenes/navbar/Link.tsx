import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage,  }: Props) => {
  // as keyword treats the value as the type in enum; don't want to always use this 
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} 
        transition duration-500 hover:text-primary-500
      `}
      href={`#${lowerCasePage}`}

    // this essentially changes the state and updates the color of the text in the navbar
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;

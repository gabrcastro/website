import { AiOutlineInstagram, AiOutlineYoutube, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

type SocialLinks = {
  link: string,
  icon: React.ReactNode
}

export default function SocialComponent() {

  const instagramLink = "https://www.instagram.com/ga.brielcastro/";
  const youtubeLink = "https://www.youtube.com/channel/UC4IeLLQt-MglrehgyEG9B6g";
  const githubLink = "https://github.com/gabrcastro";
  const linkedinLink = "https://www.linkedin.com/in/gabrielsouzacastro/";

  const socialLinks: SocialLinks[] = [
    {link: githubLink, icon: <AiOutlineGithub className="w-8 h-8 mr-4  rounded-full text-gray-200 hover:cursor-pointer hover:opacity-75" />}, 
    {link: linkedinLink, icon: <AiOutlineLinkedin className="w-8 h-8 mr-4  rounded-full text-gray-200 hover:cursor-pointer hover:opacity-75"/>}, 
    {link: youtubeLink, icon: <AiOutlineYoutube className="w-8 h-8 mr-4  rounded-full text-gray-200 hover:cursor-pointer hover:opacity-75"/>}, 
    {link: instagramLink, icon: <AiOutlineInstagram className="w-8 h-8 mr-4  rounded-full text-gray-200 hover:cursor-pointer hover:opacity-75"/>}];

  return (
    <div className="flex flex-row justify-between items-center">

      {socialLinks.map((socialLink, index) => (
        <a key={index} href={socialLink.link} target="_blank">
            {socialLink.icon}
        </a>
      ))}
    </div>
  );
}
import Content from "../content/content";
import LeftSide from "../left-side/left-side";

interface HomeProps {
  lang: string,
}

export default function Home(props: HomeProps) {
  console.log(props)

  return (
    <div className="flex w-screen h-screen flex-row justify-between bg-gradient-to-tr from-gray-950 from-60% to-indigo-950 via-30% bg-opacity-50 overflow-y-hidden">
      <div className="w-2/5">
        <LeftSide />
      </div>
      <div className="w-3/5">
        <Content page="#about" language="en-US" />
      </div>
    </div>
  );
}

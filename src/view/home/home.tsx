import { Provider } from "react-redux";
import store from "../../redux/store";

import Content from "../content/content";
import LeftSide from "../left-side/left-side";

export default function Home() {

  return (
    <Provider store={store}>
      <div className="flex w-screen h-screen flex-row justify-between bg-gradient-to-bl from-[#18153d] from-5% via-[#030712] to-[#030712] to-50% bg-opacity-50 overflow-y-hidden">
        <div className="w-2/5">
          <LeftSide />
        </div>
        <div className="w-3/5">
          <Content />
        </div>
      </div>
    </Provider>
  );
}

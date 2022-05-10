import React from "react";

const Welcome = (props: any) => {
  return (
    <div className="h-hd2  flex items-start grid justify-items-center">
      <div className="text-3xl leading-10 mt-9">Welcome!</div>
      <div className="text-xs text-slate-400">
        search for menu or restaurant you want!
      </div>
    </div>
  );
};

export default Welcome;

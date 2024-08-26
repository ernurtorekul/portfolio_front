"use client";
import { Progress } from "antd";
import { useEffect, useState } from "react";

const Languages = () => {
  const [kazakh, setKazakh] = useState(0);
  const [english, setEnglish] = useState(0);
  const [russian, setRussian] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (kazakh < 98) {
        setKazakh((prevCount) => prevCount + 1);
      }
      if (english < 85) {
        setEnglish((prevCount) => prevCount + 1);
      }
      if (russian < 88) {
        setRussian((prevCount) => prevCount + 1);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [kazakh, english, russian]);
  
  return (
    <div className="flex flex-col space-y-1 pt-6 p-2">
      <div className="flex flex-col gap-y-4">
        <span className=" text-md font-bold">Languages</span>
        <div className="flex flex-row items-center justify-center space-x-6">
          <div className="flex flex-col items-center justify-center gap-y-2">
            <Progress
              strokeColor="white"
              type="circle"
              percent={kazakh}
              size={90}
            />
            <span className="text-sm font-bold">Kazakh</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-2">
            <Progress
              strokeColor="white"
              type="circle"
              percent={english}
              size={90}
            />
            <span className="text-sm font-bold">English</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-2">
          <Progress
            strokeColor="white"
            type="circle"
            percent={russian}
            size={90}
          />
          <span className="text-sm font-bold">Russian</span>
        </div>
      </div>
    </div>
  );
};

export default Languages;
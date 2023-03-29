import React, { FunctionComponent } from "react";
import Configurations from "./components/Configurations";
import DifficultyCard from "./components/DifficultyCard";
import GuessingCard from "./components/GuessingCard";
import History from "./components/History";
import { useSelector } from "react-redux";
import { RootState } from "./state/store";
import InfoCard from "./components/InfoCard";
import GuessingBox from "./components/GuessingBox";
import GuessComponent from "./components/GuessComponent";

const Application: FunctionComponent = (): JSX.Element => {
  const { hints, maximum, guess } = useSelector((state: RootState) => state.random);

  return (
    <div className={"p-2"}>
      <div className={"grid grid-cols-12 gap-2"}>
        <div className={"col-span-2 w-full flex flex-col gap-2"}>
          <InfoCard />

          <DifficultyCard />

          <Configurations />

          {
            hints ?
              <History />
              :
              null
          }
        </div>

        <div className="col-span-10 w-full">
          <GuessingCard>
            <h1 className={"text-3xl"}>
              {
                guess !== 0 ?
                  <GuessComponent />
                  :
                  <>
                    <p className={"text-center"}>Welcome to my Guessing Game made with React.</p>
                    <p className={"text-center"}>Enter a number between 0 to {maximum}.</p>
                  </>
              }
            </h1>

            <GuessingBox />
          </GuessingCard>
        </div>
      </div>
    </div>
  );
};

export default Application;
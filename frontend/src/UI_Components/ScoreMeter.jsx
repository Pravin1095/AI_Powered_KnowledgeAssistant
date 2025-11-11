import React from "react";
import { ScoreContainer, ScoreFill, ScoreLabel } from "./Scoremeter.styles";

const ScoreMeter = ({ score }) => {
  return (
    <div>
      <ScoreContainer>
        <ScoreFill score={score} />
      </ScoreContainer>
      <ScoreLabel score={score}>
        Resume Match Score: {score}/100
      </ScoreLabel>
    </div>
  );
};

export default ScoreMeter;
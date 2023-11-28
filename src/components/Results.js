import React from "react";
import ResultCard from "./ResultCard";
import { v4 as uuidv4 } from "uuid";

export default function Results(props) {
  return (
    <>
      <ul id="results-list" style={{listStyleType: "none"}}>
        {props.results[1] &&
          props.results[1].map((result, i) => {
            return (
              <li key={uuidv4()} id="results-item">
                <ResultCard
                  score={Math.round(result.score * 100)}
                  scientificName={result.species.scientificName}
                  commonNames={result.species.commonNames}
                  family={result.species.family.scientificName}
                  number={i + 1}
                />
              </li>
            );
          })}
      </ul>
    </>
  );
}
/* eslint-disable @next/next/no-img-element */
import React from "react";
import PokemonInfo from "@/types/PokemonInfo";
import CircleIndicator from "./CircleIndicator";

interface PokemonCardProps {
  data: PokemonInfo;
}

const ComparativeField: React.FC<{ label: string; value: number }> = ({
  label,
  value,
}) => {
  const circleColor = value === 1 ? "green" : "red";

  return (
    <div className="flex items-center w-16">
      <div className="flex-shrink-0">
        <CircleIndicator label={label} color={circleColor} />
      </div>
    </div>
  );
};

const PokemonCard: React.FC<PokemonCardProps> = ({ data }) => {
  return (
    <li className="bg-white p-2 rounded border-2 border-black my-1 flex w-full justify-between items-center">
      <img
        src={data.sprite}
        alt={`Image of ${data.pokemon}`}
        className="w-16 h-16 border-2 border-black rounded"
      />
      <ComparativeField label={data.type1} value={data.similarity.type1} />
      <ComparativeField label={data.type2} value={data.similarity.type2} />
      <ComparativeField label={data.color} value={data.similarity.color} />
      <ComparativeField label={data.generation} value={data.similarity.generation} />
    </li>
  );
};

export default PokemonCard;

import type { NextPage } from "next";
import Image from "next/image";
import WithApollo from "../lib/withApollo";
import { getDataFromTree } from "@apollo/client/react/ssr";
import {
  Characters,
  CharactersQuery,
  CharactersQueryResult,
  useCharactersQuery,
} from "../generated";
import { get } from "lodash";
const Home: NextPage = () => {
  const { data } = useCharactersQuery();
  const characters = get(
    data,
    "characters.results",
    []
  ) as CharactersQuery["characters"];
  return (
    <div className="w-full min-h-screen bg-black text-white p-5 font-semibold  font-mono ">
      {data?.characters?.results?.map((character) => (
        <div
          key={character?.id}
          className="w-auto flex items-start gap-4 my-2 bg-gray-800 bg-opacity-80 p-1 rounded-lg"
        >
          <Image src={character?.image} height="100" width="100" alt="" />
          <p>{character?.name}</p>
        </div>
      ))}
    </div>
  );
};

export default WithApollo(Home, { getDataFromTree });

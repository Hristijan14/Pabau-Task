import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useCallback, useRef, useState } from "react";
import CharacterCard from "./CharacterCard";
import { useTranslation } from "react-i18next";

const GET_CHARACTERS = gql`
  query GetAllCharacters($page: Int!) {
    characters(page: $page) {
      info {
        next
      }
      results {
        id
        name
        status
        species
        gender
        image
        origin {
          name
        }
      }
    }
  }
`;

const CharacterPage = () => {
  const { loading, error, data, fetchMore } = useQuery(GET_CHARACTERS, {
    variables: { page: 1 },
    notifyOnNetworkStatusChange: true,
  });

  const { t } = useTranslation();
  const [sortOption, setSortOption] = useState("name");
  const [statusFilter, setStatusFilter] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("");

  const processCharacters = (characters) => {
    return characters
      .filter((char) => (statusFilter ? char.status === statusFilter : true))
      .filter((char) => (speciesFilter ? char.species === speciesFilter : true))
      .sort((a, b) => {
        if (sortOption === "name") {
          return a.name.localeCompare(b.name);
        } else if (sortOption === "origin") {
          return a.origin.name.localeCompare(b.origin.name);
        }
        return 0;
      });
  };

  const observer = useRef();

  const lastCharacterRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && data?.characters.info.next) {
          fetchMore({
            variables: { page: data.characters.info.next },
            updateQuery: (prevResult, { fetchMoreResult }) => {
              if (!fetchMoreResult) return prevResult;
              return {
                characters: {
                  ...fetchMoreResult.characters,
                  info: fetchMoreResult.characters.info,
                  results: [
                    ...prevResult.characters.results,
                    ...fetchMoreResult.characters.results,
                  ],
                },
              };
            },
          });
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, data, fetchMore]
  );

  if (loading && !data)
    return (
      <p className="text-center bg-gray-400 text-5xl font-bold">Loading...</p>
    );
  if (error)
    return <p className="text-center text-red-500">Error : {error.message}</p>;

  const allCharacters = data ? processCharacters(data.characters.results) : [];

  return (
    <>
      <div className="flex flex-col items-center font-mono w-full bg-gray-400 p-5">
        <div className="flex gap-5 mb-5">
          <select
            className="p-2 border rounded"
            onChange={(e) => setSortOption(e.target.value)}
            value={sortOption}
          >
            <option value="name">{t("sortByName")}</option>
            <option value="origin">{t("sortByOrigin")}</option>
          </select>

          <select
            className="p-2 border rounded"
            onChange={(e) => setStatusFilter(e.target.value)}
            value={statusFilter}
          >
            <option value="">{t("allStatuses")}</option>
            <option value="Alive">{t("alive")}</option>
            <option value="Dead">{t("dead")}</option>
            <option value="unknown">{t("unknown")}</option>
          </select>

          <select
            className="p-2 border rounded"
            onChange={(e) => setSpeciesFilter(e.target.value)}
            value={speciesFilter}
          >
            <option value="">{t("allSpecies")}</option>
            {Array.from(
              new Set(data.characters.results.map((c) => c.species))
            ).map((species) => (
              <option key={species} value={species}>
                {t(species.toLowerCase()) || species}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-wrap w-full justify-center gap-5 bg-gray-400">
        {allCharacters.map((character, index) => (
          <CharacterCard
            key={character.id}
            status={character.status}
            species={character.species}
            name={character.name}
            gender={character.gender}
            image={character.image}
            origin={character.origin.name}
            ref={index === allCharacters.length - 1 ? lastCharacterRef : null}
            {...character}
          />
        ))}
      </div>
      {loading && (
        <p className="text-center bg-gray-400 text-5xl font-bold">
          Loading more...
        </p>
      )}
    </>
  );
};

export default CharacterPage;

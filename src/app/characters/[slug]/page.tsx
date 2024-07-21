"use client"
import { Character } from "@/components/characters/Character";
import { GET_CHARACTER } from "@/graphql/queries";
import { ICharacter } from "@/graphql/types";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
export default function CharacterPage({ params }: { params: { slug: string } }) {
  const { loading, error, data } = useQuery(GET_CHARACTER(Number(params.slug)));
  const [char, setChar] = useState<ICharacter>();

  useEffect(() => {
    if (data?.character) {
      setChar(data.character)
    }
  }, [data])

  return (
    <Character char={char} />
  );
}
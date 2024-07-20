"use client"
import { gql, useQuery } from "@apollo/client";
import Image from "next/image";

export default function About() {
  const { loading, error, data } = useQuery(
    gql`
      query {
        characters(page: 1, filter: { name: "rick" }) {
          results {
            id
            name
            image
          }
        }
      }
    `
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="container mx-auto mt-10">
      <div className="bg-card p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">What is Rick and Morty?</h2>
        <p className="text-lg mb-4">
          <strong>Rick and Morty</strong> is an American animated science fiction sitcom created by
          Justin Roiland and Dan Harmon for Adult Swim. The series follows the misadventures of
          cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith,
          who split their time between domestic life and interdimensional adventures.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Main Characters</h2>
        <ul className="list-disc list-inside mb-4">
          <li className="text-lg"><strong>Rick Sanchez:</strong> A genius scientist with a pessimistic and nihilistic outlook on life.</li>
          <li className="text-lg"><strong>Morty Smith:</strong> Rick&apos;s good-hearted but easily distressed grandson.</li>
          <li className="text-lg"><strong>Summer Smith:</strong> Morty&apos;s older sister, who is more level-headed and confident than Morty.</li>
          <li className="text-lg"><strong>Beth Smith:</strong> Rick&apos;s daughter and Morty&apos;s mother, a vet who is often frustrated with her father&apos;s antics.</li>
          <li className="text-lg"><strong>Jerry Smith:</strong> Morty&apos;s father and Beth&apos;s husband, who is often ridiculed by Rick.</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Show Details</h2>
        <p className="text-lg mb-4">
          The show premiered on December 2, 2013, and quickly became a hit due to its unique blend of
          humor, science fiction, and heartfelt moments. It has since gained a cult following and
          has been praised for its creativity and originality.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Themes</h2>
        <p className="text-lg mb-4">
          Rick and Morty explores themes of existentialism, the meaning of life, and the complexities
          of family relationships, often with a darkly comedic twist. The show is known for its
          complex, multi-layered narratives and rich character development.
        </p>
      </div>
    </div>
  );
}

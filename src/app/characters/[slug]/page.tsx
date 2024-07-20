"use client"
import { useQuery } from "@apollo/client";
import { GET_CHARACTER, GET_CHARACTERS } from "@/graphql/queries";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,

} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export default function Character({ params }: { params: { slug: string } }) {
  const { loading, error, data } = useQuery(GET_CHARACTER(Number(params.slug)));
  const [char, setChar] = useState<{ name: string, image: string }>();

  useEffect(() => {
    if (data?.character) {
      setChar(data.character)
    }
  }, [data])

  return (
    <div className="container mx-auto mt-10">
      <Card className="flex flex-col justify-center items-center">
        <CardHeader className="flex flex-col gap-5 items-center">
          <Avatar className="h-40 w-40">
            <AvatarImage src={char?.image} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <CardTitle className="">{char?.name}</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
}
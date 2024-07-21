"use client"
import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,

} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ICharacter } from '@/graphql/types';

type Props = {
  char?: ICharacter
}

export const Character = ({ char }: Props) => {
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
        <CardContent className='flex flex-col items-center'>
          <div className='flex gap-3'>
            <span>Gender:</span>
            <span>{char?.gender}</span>
          </div>
          <div className='flex gap-3'>
            <span>Status:</span>
            <span>{char?.status}</span>
          </div>
          <div className='flex gap-3'>
            <span>Species:</span>
            <span>{char?.species}</span>
          </div>
          <div className='flex gap-3'>
            <span>Type:</span>
            <span>{char?.type || char?.type === '' ? 'Unknown' : char?.type}</span>
          </div>
          <div className='flex gap-3'>
            <span>Location:</span>
            <span>{char?.location?.name ?? 'Unknown'}</span>
          </div>

        </CardContent>
      </Card>
    </div>
  )
}
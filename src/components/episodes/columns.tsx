"use client"
import { ColumnDef } from "@tanstack/react-table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import { RiExpandUpDownLine } from "react-icons/ri";
import { IEpisode, IEpisodeChar } from "@/graphql/types";
import { format } from "date-fns";

export const columns: ColumnDef<IEpisode>[] = [
  {
    accessorKey: "episode",
    header: "Episode",
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: 'characters',
    cell: ({ row }) => {
      const chars: IEpisodeChar[] = row.getValue('characters')

      return <div className="flex">
        {chars.slice(0, 4).map((c) => <Avatar key={c.id} className="-mr-4" title={c.name}>
          <AvatarImage src={c.image} />
        </Avatar>)}
        <Avatar  >
          <AvatarFallback>{chars.length - 4} +</AvatarFallback>
        </Avatar>
      </div>
    }
  },
  {
    accessorKey: "air_date",
    header: "Air Date"
  },
]

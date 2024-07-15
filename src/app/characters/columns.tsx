"use client"
import { ColumnDef } from "@tanstack/react-table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RiExpandUpDownLine } from "react-icons/ri";

export type Characters = {
  id: string
  image: string
  name: string
  status: "Alive" | "Dead" | "unknown"
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown'
  species: string
  type: string
  location: {
    name: string
  }
}

export const columns: ColumnDef<Characters>[] = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const value = row.getValue('image') as string
      return <Avatar>
        <AvatarImage src={value} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    }
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
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const value = row.getValue('status') === 'unknown' ? 'Unknown' : row.getValue('status') as string;
      const className = value === 'Alive' ? 'text-primary' : value === 'Dead' ? 'text-destructive' : 'text-muted-foreground'
      return <Badge variant="outline" className={className}>{value}</Badge>
    },
  },
  {
    accessorKey: "gender",
    header: "Gender",
    cell: ({ row }) => {
      const value = row.getValue('gender') === 'unknown' ? 'Unknown' : row.getValue('gender') as string;
      return <Badge variant="outline">{value}</Badge>
    },
  },
  {
    accessorKey: "species",
    header: "Species",
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => {
      const value = row.getValue('type') === '' ? 'Unknown' : row.getValue('type') as string;
      return <div>{value}</div>
    },
  },
  {
    accessorKey: "location",
    header: "Last Known Location",
    cell: ({ row }) => {
      const loc = row.getValue('location') as { name: string }
      const locName = loc.name === 'unknown' ? 'Unknown' : loc.name
      return <div>{locName}</div>
    },
  },
]

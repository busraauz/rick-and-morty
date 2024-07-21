"use client"
import { ColumnDef } from "@tanstack/react-table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RiExpandUpDownLine } from "react-icons/ri";
import { ICharacter } from "@/graphql/types";
import { cn } from "@/lib/utils";



export const columns: ColumnDef<ICharacter>[] = [
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
      const className = value === 'Alive' ? 'bg-primary' : value === 'Dead' ? 'bg-destructive' : 'bg-muted-foreground'
      return <Badge className="gap-3 py-1 px-2" variant="outline">
        <span className="relative flex h-3 w-3">
          <span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", className)}></span>
          <span className={cn("relative inline-flex rounded-full h-3 w-3", className)}></span>
        </span>
        <span>{value}</span>
      </Badge>
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

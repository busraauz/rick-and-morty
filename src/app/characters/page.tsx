"use client"
import { useQuery } from "@apollo/client";
import { columns } from "../../components/characters/columns";
import { DataTable } from "../../components/characters/data-table";
import { GET_CHARACTERS } from "@/graphql/queries";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ICharacter } from "@/graphql/types";

export default function Characters() {
  const router = useRouter();
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(1);
  const { loading, error, data } = useQuery(GET_CHARACTERS(page, filter));
  const [chars, setChars] = useState<ICharacter[]>([]);
  const [pagination, setPagination] = useState<{ prev: number | null, next: number | null }>({
    prev: null,
    next: null
  })

  useEffect(() => {
    if (data?.characters?.results) {
      setChars(data?.characters?.results)
      setPagination(data.characters.info)
    }
  }, [data])

  return (
    <div className="container mx-auto mt-10">
      <DataTable
        columns={columns}
        data={chars}
        prev={pagination.prev}
        next={pagination.next}
        setPreviousPage={() => setPage(prevState => prevState - 1)}
        setNextPage={() => setPage(prevState => prevState + 1)}
        onRowClick={row => router.push(`/characters/${row.id}`)}
        filter={filter}
        setFilter={(f) => { setPage(0); setFilter(f); }}
      />
    </div>
  );
}
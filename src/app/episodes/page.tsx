"use client"
import { useQuery } from "@apollo/client";
import { GET_EPISODES } from "@/graphql/queries";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ICharacter, IEpisode } from "@/graphql/types";
import { DataTable } from "@/components/episodes/data-table";
import { columns } from "@/components/episodes/columns";

export default function Episodes() {
  const router = useRouter();
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(1);
  const { loading, error, data } = useQuery(GET_EPISODES(page, filter));
  const [chars, setChars] = useState<IEpisode[]>([]);
  const [pagination, setPagination] = useState<{ prev: number | null, next: number | null }>({
    prev: null,
    next: null
  })

  useEffect(() => {
    if (data?.episodes?.results) {
      setChars(data?.episodes?.results)
      setPagination(data.episodes.info)
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
        filter={filter}
        setFilter={(f) => { setPage(0); setFilter(f); }}
      />
    </div>
  );
}
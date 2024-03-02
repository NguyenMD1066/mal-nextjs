import { getRanking } from "@/app/lib/requests/ranking-requests"
import { QueryClient } from "@tanstack/react-query"
import Image from "next/image"
import { Fragment } from "react"

async function RankingList() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryFn: getRanking,
    queryKey: ["ranking"],
  })
  const data = await getRanking()
  //   console.log(JSON.stringify(data))

  return (
    <>
      <p className="bg-black">rankingList</p>
      {data.data.map(({ node }) => (
        <Fragment key={node.id}>
          <p>{node.title}</p>
          <div className="relative w-56 h-64">
            <Image
              src={node.main_picture.large}
              alt={node.title}
              fill={true}
              style={{ objectFit: "contain" }}
            />
          </div>
        </Fragment>
      ))}
    </>
  )
}

export default RankingList

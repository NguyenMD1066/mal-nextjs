import { useQuery } from "@tanstack/react-query"
import { RankItem, RankingResponse } from "../types/ranking"

export const getRanking = async (): Promise<RankingResponse<RankItem[]>> => {
  try {
    const res = await fetch(
      "https://api.myanimelist.net/v2/anime/ranking?ranking_type=all",
      {
        headers: {
          "X-MAL-CLIENT-ID": process.env.CLIENT_KEY,
        },
      }
    )
    return res.json()
  } catch (error) {
    throw error
  }
}

export const useGetRanking = () => {
  return useQuery({
    queryFn: getRanking,
    queryKey: ["ranking"],
  })
}

export interface RankItem {
  node: {
    id: number
    title: string
    main_picture: MainPicture
  }
}

export interface MainPicture {
  medium: string
  large: string
}

export interface RankingResponse<T> {
  data: T
  paging: {
    next: string
  }
}

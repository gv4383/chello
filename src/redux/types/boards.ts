export interface Board {
  id: number;
  name: string;
  description: string;
}

export interface FetchBoardsState {
  data: Board[];
  error: string | null;
  isLoading: boolean;
  isResolved: boolean;
}

export interface BoardsState {
  fetchBoards: FetchBoardsState;
}

export interface BoardsStore {
  boards: BoardsState;
}

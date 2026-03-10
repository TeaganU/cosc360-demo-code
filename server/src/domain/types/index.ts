export interface IUser {
  id: string;
  username: string;
  createdAt: string;
}

export interface ITweet {
  id: string;
  content: string;
  authorId: string;
  createdAt: string;
}

export interface ITweetWithAuthor extends ITweet {
  author: IUser;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
}

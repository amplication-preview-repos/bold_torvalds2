import { SortOrder } from "../../util/SortOrder";

export type TweetOrderByInput = {
  commentsCount?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  likesCount?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};

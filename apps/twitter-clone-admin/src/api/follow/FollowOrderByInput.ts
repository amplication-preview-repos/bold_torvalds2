import { SortOrder } from "../../util/SortOrder";

export type FollowOrderByInput = {
  createdAt?: SortOrder;
  followed?: SortOrder;
  follower?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};

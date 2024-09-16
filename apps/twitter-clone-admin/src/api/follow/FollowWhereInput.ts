import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FollowWhereInput = {
  followed?: StringNullableFilter;
  follower?: StringNullableFilter;
  id?: StringFilter;
};

import { CommentCreateNestedManyWithoutTweetsInput } from "./CommentCreateNestedManyWithoutTweetsInput";
import { LikeCreateNestedManyWithoutTweetsInput } from "./LikeCreateNestedManyWithoutTweetsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TweetCreateInput = {
  comments?: CommentCreateNestedManyWithoutTweetsInput;
  commentsCount?: number | null;
  content?: string | null;
  likes?: LikeCreateNestedManyWithoutTweetsInput;
  likesCount?: number | null;
  user?: UserWhereUniqueInput | null;
};

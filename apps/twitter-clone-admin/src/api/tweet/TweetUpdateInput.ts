import { CommentUpdateManyWithoutTweetsInput } from "./CommentUpdateManyWithoutTweetsInput";
import { LikeUpdateManyWithoutTweetsInput } from "./LikeUpdateManyWithoutTweetsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TweetUpdateInput = {
  comments?: CommentUpdateManyWithoutTweetsInput;
  commentsCount?: number | null;
  content?: string | null;
  likes?: LikeUpdateManyWithoutTweetsInput;
  likesCount?: number | null;
  user?: UserWhereUniqueInput | null;
};

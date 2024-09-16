import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const FollowCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Followed" source="followed" />
        <TextInput label="Follower" source="follower" />
      </SimpleForm>
    </Create>
  );
};

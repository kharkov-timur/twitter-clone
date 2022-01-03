import React from 'react';
import { gql, useQuery } from '@apollo/client';

const USERS_QUERY = gql`
  query USERS_QUERY {
    users {
      id
      name
    }
  }
`;

interface IUser {
  id: number,
  name: string
}

const Users = () => {
  const { loading, error, data } = useQuery(USERS_QUERY);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {data.users.map((user: IUser) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default Users;

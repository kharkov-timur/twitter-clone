import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const IS_LOGGED_IN = gql`
  {
    me {
      id
    }
  }
`;

interface Props {
  children: React.ReactNode;
}

const IsAuthenticated = ({ children }: Props) => {
  const { loading, error, data } = useQuery(IS_LOGGED_IN);
  const navigate = useNavigate();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!data.me) {
    navigate('/landing', { replace: true });
    return <></>;
  }

  return <>{children}</>;
};

export default IsAuthenticated;

import fetcher from '@utils/fetcher';
import axios from 'axios';
import React, { FC, useCallback, VFC } from 'react';
import { Navigate } from 'react-router-dom';
import useSWR from 'swr';

const Workspace: FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const { data, error, mutate } = useSWR('/api/users', fetcher, {
    dedupingInterval: 2000, // 2초
  });

  const onLogout = useCallback(() => {
    axios
      .post('/api/users/logout', null, {
        withCredentials: true,
      })
      .then((response) => {
        mutate(false, false);
      });
  }, []);

  if (!data) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <button onClick={onLogout}>로그아웃</button>
      {children}
    </div>
  );
};

export default Workspace;

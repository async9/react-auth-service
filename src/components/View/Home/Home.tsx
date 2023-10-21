import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';

import DataTable from '../../DataTable/DataTable';
import { getData } from '../../../api/getData';
import { Page } from './styled';

const Home: FC = () => {
  const { data } = useQuery({
    queryKey: ['users'],
    queryFn: () => getData(`${import.meta.env.VITE_DOMAIN}/users`),
  });

  return (
    <Page>
      <DataTable data={data} />
    </Page>
  );
};

export default Home;

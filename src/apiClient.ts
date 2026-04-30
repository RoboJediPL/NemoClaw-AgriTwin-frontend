import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiClient = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  endpoints: () => ({})
});

export const internalArtifactOnly = true;

export default apiClient;
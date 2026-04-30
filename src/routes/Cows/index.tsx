// File: src/routes/Cows/index.tsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CowDetails } from '../../components/CowDetails';
import { getCowDetails } from '../../apiClient';

const CowDetailRoute = () => {
  const { cowId } = useParams();
  const [cowDetails, setCowDetails] = useState(null);

  useEffect(() => {
    if (cowId) {
      getCowDetails(cowId).then((details) => {
        setCowDetails(details);
      });
    }
  }, [cowId]);

  return (
    <div>
      {cowDetails ? <CowDetails cow={cowDetails} /> : <p>Loading...</p>}
    </div>
  );
};

export default CowDetailRoute;
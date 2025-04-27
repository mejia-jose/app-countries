import { useParams } from 'react-router-dom';

import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import DetailCountry from '../components/DetailCountry';
import ErrorCountries from '../components/ErrorComponent';

const Detail = () =>
{
  const { code } = useParams<{ code: string}>();
 
  return (
    <div>
      <Header />
        <div className="flex items-center p-8 justify-center min-h-screen bg-gray-100">
            <div className="text-center p-8">
                <DetailCountry id={code}/>
            </div>
        </div>
        <Footer />
    </div>
  );
};

export default Detail;
import { useParams } from 'react-router-dom';

import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import DetailCountry from '../components/DetailCountry';

const Detail = () =>
{
  const { code } = useParams<{ code: string}>();
  alert(code);
  return (
    <div>
      <Header />
        <div className="flex items-center p-8 justify-center min-h-screen bg-gray-100">
            <div className="text-center p-8">
                <DetailCountry/>
            </div>
        </div>
        <Footer />
    </div>
  );
};

export default Detail;
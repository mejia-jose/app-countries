import { Link, useParams } from 'react-router-dom';

import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import DetailCountry from '../components/DetailCountry';
import { Button } from '../components/ui/Button';

/** Componente de la página para mostrar el detalle de un páis **/
const Detail = () =>
{
  const { code } = useParams<{ code: string}>();
 
  return (
    <div>
      <Header />
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <div className="flex items-left justify-left mb-1 p-4" style={{marginTop:'35px'}}>
                    <Button asChild
                    className="mt-6 inline-block btn-color text-white py-2 px-4 rounded hover:bg-blue-600"
                    variant="default"
                    > <a href="/">Regresar</a>
                    </Button>
                </div>
                <div className="flex items-center justify-center h-auto p-4 bg-gray-100">
                    <div className="text-center">
                        <DetailCountry id={code}/>
                    </div>
                </div>
            </main>
        </div>
        <Footer />
    </div>
  );
};

export default Detail;
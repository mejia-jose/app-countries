import { useParams } from 'react-router-dom';

import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import DetailCountry from '../components/DetailCountry';
import { Button } from '../components/ui/Button';
import IconsServices from '../services/icons/IconsServices';

/** Componente de la página para mostrar el detalle de un páis **/
const Detail = () =>
{
  const { code } = useParams<{ code: string}>();

  const IconComponent = IconsServices('go_back');
  if(!IconComponent) return null;
 
  return (
    <div>
      <Header />
        <div className="flex flex-col min-h-screen" style={{background:'#e5e5e5'}}>
            <main className="flex-grow">
                <div className="flex items-left justify-left mb-1 p-4" style={{marginTop:'35px'}}>
                    <Button asChild
                    className="mt-6 inline-flex items-center btn-color text-white py-2 px-4 rounded hover:bg-blue-600"
                    variant="default"
                    > <a href="/">{/* <IconComponent size={18} className="mr-2" /> */} Regresar</a>
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
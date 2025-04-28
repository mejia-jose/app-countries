import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import { Button } from '../components/ui/Button';
import IconsServices from '../services/icons/IconsServices';

/** Página para mostrar en caso de contenido no encontrado a nivel de URLS **/
const NotFound = () => {
  
  const IconComponent = IconsServices('go_back');
  if(!IconComponent) return null;

  return (
    <div>
      <Header />
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="text-center">
              <h1 className="text-6xl font-bold text-red-600">404</h1>
              <p className="text-2xl font-semibold mt-4">Página no encontrada</p>
              <p className="mt-2 text-gray-600">Lo sentimos, la página que estás buscando no existe.</p>
            
              <div>
                <Button asChild
                className="mt-2 inline-flex items-center btn-color text-white py-2 px-4 rounded hover:bg-blue-600"
                variant="default"
                > <a href="/"> <IconComponent size={10} className="mr-2" /> Volver al inicio</a>
                </Button>
              </div>
          </div>
        </div>
        <Footer />
    </div>
  );
};

export default NotFound;
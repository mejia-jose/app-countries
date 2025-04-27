import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import ListCountries from "../components/ListCountries";
import FormSearch from "../components/Form";

function Home()
{
  return (
    <div>
      <Header />
      
        <main>
          <div className="container mx-auto p-4" role="main">
  
              {/* Título */}
              <div className="mb-1 p-4" style={{marginTop:'35px'}}>
                  <h3 className="text-left text-xl font-semibold">
                  Explora culturas, descubre maravillas y conoce cada rincón del mundo en un solo lugar.
                  </h3>
              </div>
              
              {/* Contenido */}
              <div className="space-y-4">
                  
                  <div className="w-full">
                    <FormSearch/>
                  </div>
                 
                  
                  {/* Tarjetas de contenido */}
                  <div className="w-full scroll-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <ListCountries />   
                  </div>
                  
                  {/* Paginación */}
                  <div className="flex justify-center mt-4">
                      <div className="flex space-x-2">
                      <a className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md buttonReject">Anterior</a>
                      <a className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md buttonReject">1</a>
                      <a className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md buttonReject">Siguiente</a>
                      </div>
                  </div>
                  
              </div>
          </div>
        </main>
      
      <Footer />
    </div>
  );
}

export default Home;
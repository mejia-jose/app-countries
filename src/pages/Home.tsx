import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import ListCountries from "../components/ListCountries";
import FormSearch from "../components/Form";
import { useState } from "react";

function Home()
{
  /** Manejo del estado de los campos del formulario de filtros **/
  const [filterData, setFilterData] = useState<{ 
    search?:string, 
    continent?: string, 
    currency?:string 
  }>({});

  const changeFilters = (data: { search?: string, continent?: string, currency?: string }) => {
    setFilterData(data);
  };
  
  /** Componente que renderiza el listado de los países de la app **/
  return (
    <div>
      <Header />

        <div className="flex flex-col min-h-screen">
            <main className="flex-grow container mx-auto p-4">
              {/* Título */}
              <div className="mb-1 p-4" style={{marginTop:'35px'}}>
                  <h3 className="text-left text-xl font-semibold">
                  Explora culturas, descubre maravillas y conoce cada rincón del mundo en un solo lugar.
                  </h3>
              </div>

              {/* Contenido */}
              <div className="space-y-4 ">
                  
                <div className="w-full"> <FormSearch filters={changeFilters}/> </div>
                 
                {/* Tarjetas de contenido */}
                <div>
                  <ListCountries filters={filterData}/> 
                </div>  
                  
              </div>
            </main>
        </div>
      <Footer />
    </div>
  );
}

export default Home;
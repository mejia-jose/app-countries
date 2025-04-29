import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import { Button } from '../components/ui/Button';
import IconsServices from '../services/icons/IconsServices';
import { sellBoxOffice, TProps } from '../services/tickets/TicketServices';
import Vania from '../assets/images/vania.png';
import Vengadores from '../assets/images/vengadores.avif';
import { useState } from 'react';
import ImagesComponent from '../components/Images';
import AlertDestructive from '../components/Alert';

/** Componente de la página para mostrar el detalle de un páis **/
const Ticket = () =>
{
  const [ticket, setTicket] = useState<number>(0);
  const [state, setState] = useState(false);
  const [messages, setMessages] = useState('');

  const IconComponent = IconsServices('go_back');
  const IconShopping = IconsServices('shopping');
  if(!IconComponent || !IconShopping) return null;

  const buyTicket = (e: React.FormEvent) =>
  {
    e.preventDefault();
    setTicket(ticket)
    const result = sellBoxOffice(ticket);
    if(result)
    { 
      const isState = result.state ? result?.state : false;
      const isMessages = result.messages ? result?.messages : '';
      setState(isState);
      setMessages(isMessages);
    }
  }
 
  return (
    <div>
      <Header />
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <div className="flex items-left justify-left mb-1 p-4" style={{marginTop:'35px'}}>
                  <Button
                    asChild
                    className="mt-6 inline-flex items-center btn-color text-white py-2 px-4 rounded hover:bg-blue-600"
                    variant="default"
                  >
                    <a href="/">
                      <IconComponent size={18} className="mr-2" /> Regresar
                    </a>
                  </Button>
                </div>
                <div className="flex justify-center items-center w-full">
                    <div className="w-full bg-card mb-2 rounded-xl border text-card-foreground max-w-6xl bg-white mx-auto px-1 py-1 grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
                      <div className="flex flex-col space-y-1">
                        <div className="text-center md:text-left space-y-2 p-4">
                          <h3 className="text-1xl md:text-1xl font-bold hover:bg-blue-600">
                            ¡Los Vengadores regresan en "AVENGERS: SECRET WARS"!
                          </h3>
                          <p className="text-gray-700 text-base md:text-lg">
                            Prepárate para la batalla más épica del multiverso, donde antiguos y nuevos héroes unirán fuerzas contra una amenaza que desafía la realidad.
                          </p>
                        </div>
                        <div className="flex justify-center">
                          <ImagesComponent image={Vengadores} alt="Avengers Secret Wars" imageClass='w-90 md:w-[350px] lg:w-[250px] object-contain hover:scale-110 transition-transform duration-300' />
                        </div>
                        <div className="flex flex-col items-center justify-center gap-4">
                           <h3 className="text-1xl md:text-1xl font-bold hover:bg-blue-600 p-4">
                            ¡Anímate y compra tus tiquetes ahora!
                          </h3>
                            <form onSubmit={buyTicket}>
                                <select value={ticket} onChange={(e) => setTicket(Number(e.target.value))}
                                className="border border-gray-300 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64"
                              >
                                <option value="">Selecciona el valor del billete</option>
                                <option value="25">25 dólares.</option>
                                <option value="50">50 dólares.</option>
                                <option value="100">100 dólares.</option>
                              </select>

                              <Button className="mt-4 p-4 px-6 py-2 text-white rounded-md cursor-pointer btn-color-main w-45">
                                <IconShopping className="mr-2" /> Comprar ticket
                              </Button>
                            </form>
                        </div>
                      </div>

                      <div className="flex flex-col items-center space-y-6">
                        <ImagesComponent image={Vania} alt="Soy Vania" imageClass='w-[120px] md:w-[150px] lg:w-[180px] object-contain hover:scale-105 transition-transform duration-300' />
                        <span className="text-xl md:text-2xl font-semibold text-gray-800 text-center">
                          Hola, soy Vania tu aserora de ventas
                        </span>
                        {messages && (<AlertDestructive isError={state} messages={messages} />)}
                      </div>
                    </div>
                </div>
            </main>
        </div>
        <Footer />
    </div>
  );
};

export default Ticket;
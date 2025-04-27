import Logo from '../assets/images/logo.png';
import Icons from '../components/Icons';

/** Permite manejar el componente Header de la aplicación */
function Header()
{
  return (
    <div className="toolbar bg-gray-800 text-white p-4 relative">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
            <div className="flex items-center space-x-4 md:space-x-4">
                <img style={{width: '4vw'}} className="w-16 h-auto md:w-32" alt="World Explorer" src={Logo} />
                <span className="text-lg font-semibold md:text-xl">World Explorer: Explora y Descubre los Países del Mundo</span>
            </div>
        
            <div className="hidden md:flex items-center gap-4">
                <Icons icon='twitter' color='white' size={24} link='https://x.com/?lang=es'/>
                <Icons icon='youtube' color='white' size={24} link='https://www.youtube.com'/>
                <Icons icon='facebook' color='white' size={24} link='https://www.facebook.com'/>
            </div>
        </div>
    </div>  
  );
}

export default Header;
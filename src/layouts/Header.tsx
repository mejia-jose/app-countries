import Logo from '../assets/images/logo.png';
import Icons from '../components/IconsLinks';

/** Permite manejar el componente Header de la aplicación */
function Header()
{
  return (
    <div className="toolbar bg-gray-800 text-white p-4 relative">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center space-x-4 md:space-x-4 overflow-x-auto">
            <img 
              style={{ width: '4vw' }} 
              className="w-auto h-auto md:w-32 max-w-xs sm:max-w-full  md:w-[40vw] lg:w-[40vw] xl:w-[40vw]" 
              alt="World Explorer" 
              src={Logo} 
            />
            <span className="text-sm md:text-lg font-semibold md:text-xl truncate">
                World Explorer: Explora y Descubre los Países del Mundo
            </span>
        </div>
        
            <div className="hidden md:flex items-center gap-4">
                <Icons icon='shopping' color='white' size={24} link='/ticket'/>
                <Icons icon='twitter' color='white' size={24} link='https://x.com/?lang=es'/>
                <Icons icon='youtube' color='white' size={24} link='https://www.youtube.com'/>
                <Icons icon='facebook' color='white' size={24} link='https://www.facebook.com'/>
            </div>
        </div>
    </div>  
  );
}

export default Header;
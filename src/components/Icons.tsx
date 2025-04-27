import { FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa'; 

import { IconProps } from '../types/icons/IconProps';

/** Permite manejar el componente de Iconos de la aplicación **/
export function Icons({ icon, size, color = 'black', link } : IconProps)
{
  let IconComponent;
  switch (icon) 
  {
    case 'twitter':
      IconComponent = FaTwitter;
      break;
    case 'youtube':
      IconComponent = FaYoutube;
      break;
    case 'facebook':
      IconComponent = FaFacebook;
      break;
    default:
      return null;
  }

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`Ir a ${icon}`} title={icon}>
      <IconComponent size={size} color={color} />
    </a>
  );
}
export default Icons;
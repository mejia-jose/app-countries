import {IconsServices} from '../services/icons/IconsServices';
import { IconProps } from '../types/icons/IconProps';

/** Permite manejar el componente de Iconos de la aplicación **/
export function Icons({ icon, size, color = 'black', link } : IconProps)
{
  const IconComponent = IconsServices(icon);
  if(!IconComponent) return null;
  
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`Ir a ${icon}`} title={icon}>
      <IconComponent size={size} color={color} />
    </a>
  );
}
export default Icons;
import React from 'react';
import { FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa'; 

import { IconProps } from '../types/icons/IconProps';


const Icons: React.FC<IconProps> = ({ icon, size, color = 'black', link }) => 
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
};

export default Icons;
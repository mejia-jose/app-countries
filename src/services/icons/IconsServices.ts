import { 
    FaTwitter, 
    FaYoutube, 
    FaFacebook,
    FaSearch,
    FaEye,
    FaArrowAltCircleLeft,   
} from 'react-icons/fa'; 
import { MdClearAll } from "react-icons/md";
import { RiShoppingBag4Fill } from "react-icons/ri";

export function IconsServices(icon:string)
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
      case 'search':
        IconComponent = FaSearch ;
        break;
      case 'eyes':
        IconComponent = FaEye ;
        break;
      case 'go_back':
        IconComponent = FaArrowAltCircleLeft ;
        break;
      case 'clear':
        IconComponent = MdClearAll;
        break;
      case 'shopping':
        IconComponent = RiShoppingBag4Fill;
        break;
      default:
        return null;
    }
    return IconComponent;
}

export default IconsServices;

export type IconProps = 
{
  icon: IconsAllowed;
  size: number;
  color?: string;
  link: string; 
};

type IconsAllowed = 'twitter' | 'youtube' | 'facebook';
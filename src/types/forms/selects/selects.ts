
type DataProps = 
{
  name?: string;
  code: string;
  currency?: string;
};

export interface ISelectProps {
  data: DataProps[];
  text: string;
  valor?: string;
  onValueChange?: (value: string) => void;
}

export interface ISelectPropsGeneral 
{
  value: string;
  onChange: (value: string) => void;
}
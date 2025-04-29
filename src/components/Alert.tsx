import { AlertCircle, CheckCircle2 } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "./ui/alert"

export type TAlerProps =
{
    type?: 'default' | 'destructive' | 'success';
    isError: boolean;
    messages: string;
}

export function AlertDestructive({type,isError,messages} : TAlerProps) 
{
   const errorMessage = !isError ? 'Error' : 'Venta exitosa';
    return (
      <Alert variant={!isError ? 'destructive' : 'default'}>
        {!isError ? (
          <AlertCircle className="h-4 w-4" />
        ) : (
          <CheckCircle2 className="h-4 w-4 text-green-600" />
        )}
        <AlertTitle>{errorMessage}</AlertTitle>
        <AlertDescription className={!isError ? 'text-red-700' : 'text-green-700'}>
          {messages}
        </AlertDescription>
      </Alert>
    )
}
export default AlertDestructive;

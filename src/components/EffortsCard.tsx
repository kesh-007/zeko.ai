import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ProductsCardProps = {
  content: string;
  className:string;
  name:string;
  role:string
};

const EffortsCard: React.FC<ProductsCardProps> = (props) => {
  return (
    <Card className={`w-[300px] max-md:w-full  ${props.className}`}>
      <CardHeader>
        <CardTitle className='text-sm text-gray-500'> {props.content}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='flex justify-between'>
            <div>
        </div>
        </div>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <div>
        <p>{props.name}</p>

        <p className='text-xl'>{props.role}</p>

        </div>
      <div className='border h-10  inline-block '>
            <p className='font-bold  p-2'>Airmeet</p>
        </div>

      </CardFooter>
    </Card>
  );
}

export default EffortsCard;